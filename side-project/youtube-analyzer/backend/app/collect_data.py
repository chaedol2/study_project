import os
import googleapiclient.discovery
from sqlalchemy.orm import Session
from app.database import SessionLocal, engine # engine 추가
from app.models import Video, Base # Base 추가
from datetime import datetime

# --- 설정 --- #
# 1. 유튜브 API 키를 아래에 설정하거나, 환경 변수 YOUTUBE_API_KEY로 전달해야 합니다.
API_KEY = os.getenv("YOUTUBE_API_KEY")

# 2. 데이터를 수집할 유튜브 채널의 ID입니다. (여기를 원하는 채널 ID로 변경하세요)
# 예시: Google Developers 채널
CHANNEL_ID = "UC_x5XG1OV2P6uZZ5FSM9Ttw"
# --- --- #

def collect_videos():
    # 스크립트 시작 시 테이블 생성
    print("데이터베이스 테이블을 확인하고, 필요시 생성합니다...")
    Base.metadata.create_all(bind=engine)
    print("테이블 준비 완료.")

    if not API_KEY:
        print("오류: YOUTUBE_API_KEY 환경 변수가 설정되지 않았습니다.")
        return

    db: Session = SessionLocal()
    try:
        youtube = googleapiclient.discovery.build(
            "youtube", "v3", developerKey=API_KEY)

        # 채널의 uploads 플레이리스트 ID 가져오기
        channel_request = youtube.channels().list(
            part="contentDetails",
            id=CHANNEL_ID
        )
        channel_response = channel_request.execute()
        playlist_id = channel_response["items"][0]["contentDetails"]["relatedPlaylists"]["uploads"]

        print(f"'{CHANNEL_ID}' 채널의 동영상 데이터 수집을 시작합니다...")

        next_page_token = None
        video_count = 0
        while True:
            playlist_request = youtube.playlistItems().list(
                playlistId=playlist_id,
                part="snippet",
                maxResults=50,
                pageToken=next_page_token
            )
            playlist_response = playlist_request.execute()

            video_ids = [item["snippet"]["resourceId"]["videoId"] for item in playlist_response["items"]]
            if not video_ids:
                continue

            # 동영상 ID 목록으로 통계 정보(조회수, 좋아요 등) 가져오기
            video_stats_request = youtube.videos().list(
                part="statistics",
                id=",".join(video_ids)
            )
            video_stats_response = video_stats_request.execute()
            stats_dict = {item['id']: item['statistics'] for item in video_stats_response['items']}

            for item in playlist_response["items"]:
                snippet = item["snippet"]
                video_id = snippet["resourceId"]["videoId"]

                # 데이터베이스에 이미 존재하는 동영상인지 확인
                exists = db.query(Video).filter(Video.video_id == video_id).first()
                if not exists:
                    stats = stats_dict.get(video_id, {})
                    video = Video(
                        video_id=video_id,
                        title=snippet["title"],
                        description=snippet["description"],
                        published_at=datetime.strptime(snippet["publishedAt"], "%Y-%m-%dT%H:%M:%SZ"),
                        thumbnail_url=snippet["thumbnails"].get("high", {}).get("url"),
                        view_count=int(stats.get("viewCount", 0)),
                        like_count=int(stats.get("likeCount", 0)),
                        comment_count=int(stats.get("commentCount", 0))
                    )
                    db.add(video)
                    video_count += 1
            
            next_page_token = playlist_response.get("nextPageToken")
            if not next_page_token:
                break
        
        db.commit()
        print(f"총 {video_count}개의 새로운 동영상을 데이터베이스에 추가했습니다.")

    finally:
        db.close()

if __name__ == "__main__":
    collect_videos()
