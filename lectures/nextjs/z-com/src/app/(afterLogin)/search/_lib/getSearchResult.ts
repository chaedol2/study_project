import {QueryFunction} from "@tanstack/query-core";
import {Post} from "@/model/Post";

export const  getSearchResult: QueryFunction<Post[], [_1:string, _2:string, searchParams: {q:string, pf?:string, f?:string}]> = async ({queryKey}) => {
    const [_1, _2, searchParams] = queryKey;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/search/${searchParams.q}?${searchParams.toString()}`, {
        next: {
            tags: ['posts', 'search', searchParams.q],
            // 60초 이 후 캐싱 지우기.
            // revalidate: 60,
        },
        // 데이터 캐싱을 하고싶다면 'force-cache'를 넣는다. 데이터 캐싱을 하지 않는 'no-store'가 기본값이다.
        // cache: 'force-cache',
        cache: 'no-store',
    });
    // the return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest 'error.js' Error Boundary
        throw new Error('Failed to fetch data');
    }

    return res.json();
}