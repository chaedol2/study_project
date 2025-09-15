from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from . import models, schemas
from .database import engine, get_db
from typing import List

# 데이터베이스에 테이블 생성
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

@app.get("/", response_model=List[schemas.Video])
def get_videos(db: Session = Depends(get_db)):
    """
    저장된 모든 비디오 목록을 반환합니다.
    """
    videos = db.query(models.Video).order_by(models.Video.published_at.desc()).all()
    return videos