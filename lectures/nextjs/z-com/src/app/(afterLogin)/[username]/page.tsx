import style from './profile.module.css';
import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import UserPosts from "@/app/(afterLogin)/[username]/_component/UserPosts";
import UserInfo from "@/app/(afterLogin)/[username]/_component/UserInfo";
import {getUser} from "@/app/(afterLogin)/[username]/_lib/getUser";
import {getUserPosts} from "@/app/(afterLogin)/[username]/_lib/getUserPosts";

type Props = {
    params: Promise<{ username: string }>
}
export default async function Profile(props:Props) {
    const { username } = await props.params;
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({
        queryKey: ['users', username],
        queryFn: getUser,
    });
    await queryClient.prefetchQuery({
        queryKey: ['posts', 'user', username],
        queryFn: getUserPosts,
    });
    const dehydratedState = dehydrate(queryClient);

    return (
        <main className={style.main}>
            <HydrationBoundary state={dehydratedState}>
                <UserInfo username={username} />
                <div>
                    <UserPosts username={username} />
                </div>
            </HydrationBoundary>
        </main>
    );
}
