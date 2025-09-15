from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from . import models, schemas, crud
from .database import engine, get_db
from typing import List, Optional
from fastapi.middleware.cors import CORSMiddleware

# 데이터베이스에 테이블 생성
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# CORS 설정
origins = [
    "http://localhost:3000", # React 앱 주소
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/search", response_model=List[schemas.Video])
def search_videos(
    q: Optional[str] = None, 
    page: int = 1, 
    limit: int = 100, 
    sort_by: Optional[str] = 'view_count',
    order: Optional[str] = 'desc',
    db: Session = Depends(get_db)
):
    """
    검색 쿼리(q)를 기반으로 동영상을 검색하고, 정렬 기준(sort_by, order)에 따라 결과를 반환합니다.
    쿼리가 없으면 모든 동영상을 페이지네이션하여 반환합니다.
    """
    skip = (page - 1) * limit
    videos = crud.search_videos(db=db, query=q, skip=skip, limit=limit, sort_by=sort_by, order=order)
    return videos
