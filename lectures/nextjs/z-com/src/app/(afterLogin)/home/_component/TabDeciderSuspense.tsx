import TabDecider from "@/app/(afterLogin)/home/_component/TabDecider";
import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import {getPostRecommends} from "@/app/(afterLogin)/home/_lib/getPostRecommends";

export default async function TabDeciderSuspense() {
    const queryClient = new QueryClient();
    await queryClient.prefetchInfiniteQuery({
        queryKey: ['posts', 'recommends'],
        queryFn: getPostRecommends,
        initialPageParam: 0,
    })
    const dehydrateState = dehydrate(queryClient);
    return (
        <HydrationBoundary state={dehydrateState}>
            <TabDecider />
        </HydrationBoundary>
    )
}