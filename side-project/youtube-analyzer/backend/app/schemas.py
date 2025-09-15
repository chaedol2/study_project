from pydantic import BaseModel
from datetime import datetime

class VideoBase(BaseModel):
    video_id: str
    title: str
    description: str | None = None
    published_at: datetime
    thumbnail_url: str | None = None
    view_count: int | None = 0
    like_count: int | None = 0
    comment_count: int | None = 0

class VideoCreate(VideoBase):
    pass

class Video(VideoBase):
    id: int

    class Config:
        orm_mode = True
