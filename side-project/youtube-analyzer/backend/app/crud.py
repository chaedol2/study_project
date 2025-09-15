from sqlalchemy.orm import Session
from sqlalchemy import func
from . import models
from typing import Optional

def search_videos(db: Session, query: Optional[str], skip: int = 0, limit: int = 100, sort_by: str = 'published_at', order: str = 'desc'):
    db_query = db.query(models.Video)

    if query:
        # title, description이 NULL일 경우를 대비해 coalesce 사용
        # 좀 더 유연한 websearch_to_tsquery 사용
        search_vector = func.to_tsvector(
            'english',
            func.coalesce(models.Video.title, '') + ' ' + func.coalesce(models.Video.description, '')
        )
        db_query = db_query.filter(search_vector.match(func.websearch_to_tsquery('english', query)))

    # 정렬 기능 추가
    sort_column = getattr(models.Video, sort_by, models.Video.published_at)
    if order == 'asc':
        db_query = db_query.order_by(sort_column.asc())
    else:
        db_query = db_query.order_by(sort_column.desc())

    return db_query.offset(skip).limit(limit).all()
