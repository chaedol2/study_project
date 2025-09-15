# YouTube-Analyzer

## 1. 프로젝트 개요

이 프로젝트는 지정된 유튜브 채널의 동영상 데이터를 수집하고, 사용자가 키워드를 통해 원하는 정보를 검색할 수 있는 풀스택 웹 애플리케이션입니다.

## 2. 아키텍처

(생략... 이전 내용과 동일)

## 3. 실행 방법 및 데이터 수집

### 3.1. YouTube API 키 발급

데이터를 수집하기 위해서는 YouTube Data API v3 사용 설정 및 API 키 발급이 필요합니다.

1.  [Google Cloud Console](https://console.cloud.google.com/)에 접속하여 새 프로젝트를 생성합니다.
2.  `API 및 서비스 > 라이브러리` 메뉴에서 `YouTube Data API v3`를 검색하여 '사용 설정'합니다.
3.  `API 및 서비스 > 사용자 인증 정보` 메뉴에서 `사용자 인증 정보 만들기 > API 키`를 선택하여 키를 발급받습니다.

### 3.2. API 키 설정

프로젝트의 루트 디렉토리(최상위 폴더)에 `.env` 파일을 생성하고, 발급받은 API 키를 다음과 같이 추가합니다. `your_api_key_here` 부분을 실제 키로 변경해주세요.

```
# .env
YOUTUBE_API_KEY=your_api_key_here
```

### 3.3. 데이터 수집 스크립트 실행

아래 명령어를 실행하여 유튜브 채널의 동영상 데이터를 수집하고 데이터베이스에 저장합니다. `backend` 서비스를 새로 빌드하여 추가된 스크립트를 포함시킨 후 실행합니다.

```bash
docker-compose build backend
docker-compose run --rm backend python -m app.collect_data
```

### 3.4. 애플리케이션 실행

다음 명령어를 실행하면 모든 서비스가 실행됩니다.

```bash
docker-compose up
```

### 3.5. 서비스 접속 및 데이터 확인

-   **프론트엔드 (웹사이트)**: [http://localhost:3000](http://localhost:3000)
-   **백엔드 (API)**: [http://localhost:8000/](http://localhost:8000/)
    -   데이터 수집이 완료되었다면, 이 주소에 접속했을 때 동영상 목록이 JSON 형태로 표시됩니다.
-   **백엔드 (API 문서)**: [http://localhost:8000/docs](http://localhost:8000/docs)

## 4. MCP (Multi-Container Pattern) 적용

(생략... 이전 내용과 동일)