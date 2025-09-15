import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import './App.css';

// API 기본 URL
const API_URL = 'http://localhost:8000/api/search';

// 동영상 데이터 타입 정의
interface Video {
  id: number;
  video_id: string;
  title: string;
  description: string;
  published_at: string;
  thumbnail_url: string;
  view_count: number;
  like_count: number;
  comment_count: number;
}

function App() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [query, setQuery] = useState(''); // 사용자가 입력하는 검색어
  const [submittedQuery, setSubmittedQuery] = useState(''); // 검색 버튼을 눌렀을 때 확정된 검색어
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [sortBy, setSortBy] = useState('view_count'); // 정렬 기준
  const [sortOrder, setSortOrder] = useState('desc'); // 정렬 순서

  const observer = useRef<IntersectionObserver | null>(null);

  // 무한 스크롤을 위한 마지막 요소 감지 콜백
  const lastVideoElementRef = useCallback((node: HTMLTableRowElement) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prevPage => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  // '확정된' 검색어, 페이지, 또는 정렬 기준이 변경될 때 데이터 로드
  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      try {
        const response = await axios.get(API_URL, {
          params: { 
            q: submittedQuery, 
            page, 
            limit: 100,
            sort_by: sortBy,
            order: sortOrder
          }
        });
        setVideos(prevVideos => page === 1 ? response.data : [...prevVideos, ...response.data]);
        setHasMore(response.data.length > 0);
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [submittedQuery, page, sortBy, sortOrder]);

  // 새로운 검색 시 기존 결과 초기화 및 검색어 확정
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    setVideos([]);
    setHasMore(true);
    setSubmittedQuery(query);
  };

  // 정렬 핸들러
  const handleSort = (newSortBy: string) => {
    if (newSortBy === sortBy) {
      setSortOrder(prevOrder => prevOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(newSortBy);
      setSortOrder('desc');
    }
    setPage(1);
    setVideos([]);
    setHasMore(true);
  };

  // 정렬 화살표 렌더링 함수
  const renderSortArrow = (column: string) => {
    if (sortBy !== column) return null;
    return sortOrder === 'asc' ? ' ▲' : ' ▼';
  };

  return (
    <div className="App">
      <div className="container mt-4">
        <h1 className="mb-4 text-center">YouTube Analyzer</h1>
        <form onSubmit={handleSearch} className="mb-4">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="검색어를 입력하세요..."
              value={query} // 입력값 상태와 동기화
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">검색</button>
          </div>
        </form>

        <table className="table table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th scope="col">썸네일</th>
              <th scope="col" onClick={() => handleSort('title')}>제목{renderSortArrow('title')}</th>
              <th scope="col">설명</th>
              <th scope="col" onClick={() => handleSort('published_at')}>게시일{renderSortArrow('published_at')}</th>
              <th scope="col" onClick={() => handleSort('view_count')}>조회수{renderSortArrow('view_count')}</th>
              <th scope="col" onClick={() => handleSort('like_count')}>좋아요{renderSortArrow('like_count')}</th>
              <th scope="col" onClick={() => handleSort('comment_count')}>댓글 수{renderSortArrow('comment_count')}</th>
            </tr>
          </thead>
          <tbody>
            {videos.map((video, index) => {
              const isLastElement = videos.length === index + 1;
              return (
                <tr key={video.id} ref={isLastElement ? lastVideoElementRef : null}>
                  <td className='thumbnail-cell'>
                    <a href={`https://www.youtube.com/watch?v=${video.video_id}`} target="_blank" rel="noopener noreferrer">
                      <img src={video.thumbnail_url} alt={video.title} />
                    </a>
                  </td>
                  <td>{video.title}</td>
                  <td className='description-cell'>{video.description}</td>
                  <td>{new Date(video.published_at).toLocaleDateString()}</td>
                  <td>{video.view_count.toLocaleString()}</td>
                  <td>{video.like_count.toLocaleString()}</td>
                  <td>{video.comment_count.toLocaleString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        
        {loading && <div className="loader">로딩 중...</div>}
        {!hasMore && videos.length > 0 && <div className="loader">더 이상 결과가 없습니다.</div>}
        {videos.length === 0 && !loading && <div className="loader">검색 결과가 없습니다.</div>}
      </div>
    </div>
  );
}

export default App;