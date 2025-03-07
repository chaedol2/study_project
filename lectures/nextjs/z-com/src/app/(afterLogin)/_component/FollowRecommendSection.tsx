"use client";

import {getFollowRecommends} from "@/app/(afterLogin)/_lib/getFollowRecommends";
import {useQuery} from "@tanstack/react-query";
import {User} from "@/model/User";
import FollowRecommend from "@/app/(afterLogin)/_component/FollowRecommend";

export default function FollowRecommendSection() {
    const { data } = useQuery<User[]>({
        queryKey: ['usesrs', 'followRecommends'],
        queryFn: getFollowRecommends,
        staleTime: 60 * 1000,
        gcTime: 300 * 1000,
    })

    return data?.map((user)=><FollowRecommend user={user} key={user.id} />);
}