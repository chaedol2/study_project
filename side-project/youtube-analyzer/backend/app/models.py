from sqlalchemy import Column, Integer, String, DateTime, Text, Index, text
from .database import Base

class Video(Base):
    __tablename__ = "videos"

    id = Column(Integer, primary_key=True, index=True)
    video_id = Column(String, unique=True, index=True, nullable=False)
    title = Column(String, nullable=False)
    description = Column(Text, nullable=True)
    published_at = Column(DateTime, nullable=False)
    thumbnail_url = Column(String, nullable=True)
    view_count = Column(Integer, default=0)
    like_count = Column(Integer, default=0)
    comment_count = Column(Integer, default=0)

    # Full-Text Search를 위한 GIN 인덱스 추가
    __table_args__ = (
        Index(
            'ix_videos_tsv',
            text("to_tsvector('english', title || ' ' || description)"),
            postgresql_using='gin'
        ),
    )
