export async function getFollowingPosts() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/followingPosts`, {
        next: {
            tags: ['posts', 'followings'],
            // 60초 이 후 캐싱 지우기.
            // revalidate: 60,
        },
        cache: 'force-cache',
        // 데이터 캐싱을 하고싶다면 'force-cache'를 넣는다. 데이터 캐싱을 하지 않는 'no-store'가 기본값이다.
        // cache: 'force-cache',
    });
    // the return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest 'error.js' Error Boundary
        throw new Error('Failed to fetch data');
    }

    return res.json();
}