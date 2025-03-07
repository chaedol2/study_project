"use client";

import {useSuspenseQuery} from "@tanstack/react-query";
import {getFollowingPosts} from "@/app/(afterLogin)/home/_lib/getFollowingPosts";
import Post from "@/app/(afterLogin)/_component/Post";
import { Post as IPost } from '@/model/Post';

export default function FollowingPosts() {
    const { data } = useSuspenseQuery<IPost[]>({
        queryKey: ['posts', 'followings'],
        queryFn: getFollowingPosts,
        // staleTime을 gcTime 보다 작게 해야한다.(반대의경우 의도가 폐색된다.)
        staleTime: 60*1000, // fresh -> stale 60초간 FRESH 상태로 유지. *Infinity=>항상 FRESH(한번 데이터를 가져오면 새로고침 하지 않는다.)
        gcTime: 300 * 1000, // 기본값 5분 가비지 컬렉션 타임(캐시가 5분뒤 날라감)
        // initialData: () => [] // 초기데이터가 있을 때 Reset을 사용하면 된다.
    })

    return data?.map((post)=> (
        <Post key={post.postId} post={post} />
    ))
}