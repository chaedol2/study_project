"use client";

import {InfiniteData, useSuspenseInfiniteQuery} from "@tanstack/react-query";
import {getPostRecommends} from "@/app/(afterLogin)/home/_lib/getPostRecommends";
import Post from "@/app/(afterLogin)/_component/Post";
import { Post as IPost } from '@/model/Post';
import {Fragment, useEffect} from "react";
import {useInView} from "react-intersection-observer";

export default function PostRecommends() {
    const { data, fetchNextPage, hasNextPage, isFetching } = useSuspenseInfiniteQuery<IPost[], object, InfiniteData<IPost[]>, [_1:string,_2:string], number>({
        queryKey: ['posts', 'recommends'],
        queryFn: getPostRecommends,
        initialPageParam: 0, // [[1,2,3,4,5], [6,7,8,9,10], [11,12,13,14,15]] 2차원 배열 주의
        getNextPageParam: (lastPage) => lastPage.at(-1)?.postId,
        // staleTime을 gcTime 보다 작게 해야한다.(반대의경우 의도가 폐색된다.)
        staleTime: 60*1000, // fresh -> stale 60초간 FRESH 상태로 유지. *Infinity=>항상 FRESH(한번 데이터를 가져오면 새로고침 하지 않는다.)
        gcTime: 300 * 1000, // 기본값 5분 가비지 컬렉션 타임(캐시가 5분뒤 날라감)
        // initialData: () => [] // 초기데이터가 있을 때 Reset을 사용하면 된다.
    })

    const { ref, inView } = useInView({
        threshold: 0, // 보인 후 몇 픽셀 후에 호출 할 것인가.
        delay: 0, // 보인 후 몇 초후에 보일 것인가.
    });

    useEffect(()=>{
        if (inView){
            // 화면에 보일 때, 데이터를 가져오는중이 아니고, 다음 페이지가 존재할 때 데이터 5개 추가
            !isFetching && hasNextPage && fetchNextPage();
        }
    }, [inView, isFetching, hasNextPage, fetchNextPage])


    return (
        <>
            {data?.pages.map((page, i)=> (
            <Fragment key={i}>
                {page.map((post) => <Post key={post.postId} post={post}/>)}
            </Fragment>))}
            <div ref={ref} style={{ height: 50 }} />
        </>
    )
}