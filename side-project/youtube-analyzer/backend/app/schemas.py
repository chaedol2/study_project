from pydantic import BaseModel
from datetime import datetime

class VideoBase(BaseModel):
    video_id: str
    title: str
    description: str | None = None
    published_at: datetime
    thumbnail_url: str | None = None

class VideoCreate(VideoBase):
    pass

class Video(VideoBase):
    id: int

    class Config:
        orm_mode = True
