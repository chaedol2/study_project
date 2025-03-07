import BackButton from "@/app/(afterLogin)/_component/BackButton";
import style from './singlePost.module.css';
import CommentForm from "@/app/(afterLogin)/[username]/status/[id]/_component/CommentForm";
import SinglePost from "./_component/SinglePost";
import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import {getSinglePost} from "@/app/(afterLogin)/[username]/status/[id]/_lib/getSinglePost";
import {getComments} from "@/app/(afterLogin)/[username]/status/[id]/_lib/getComments";
import Comments from "@/app/(afterLogin)/[username]/status/[id]/_component/Comments";

type Props = {
  params: Promise<{id:string}>
}
export default async function Page(props: Props) {
  const { id } = await props.params;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({queryKey: ['posts', id], queryFn: getSinglePost})
  await queryClient.prefetchQuery({queryKey: ['posts', id, 'comments'], queryFn: getComments})
  const dehydrateState = dehydrate(queryClient);

  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydrateState}>
      <div className={style.header}>
        <BackButton />
        <h3 className={style.headerTitle}>게시하기</h3>
      </div>
      <SinglePost id={id} />
        <CommentForm id={id} />
        <div>
          <Comments id={id} />
        </div>
      </HydrationBoundary>
    </main>
  );
}
