import Link from "next/link";
import style from './post.module.css';
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/ko'
import ActionButtons from "@/app/(afterLogin)/_component/ActionButtons";
import PostArticle from "@/app/(afterLogin)/_component/PostArticle";
import {faker} from '@faker-js/faker';
import PostImages from "@/app/(afterLogin)/_component/PostImages";

dayjs.locale('ko')
dayjs.extend(relativeTime);

type Props = {
    noImage?: boolean;
}
export default function Post({noImage}: Props) {
    const target = {
        postId: 1,
        User: {
            id: 'chaedol2',
            nickname: '채돌이',
            image: '/yRsRRjGO.jpg',
        },
        content: '채돌이 approuter 강의',
        createdAt: new Date(),
        Images: [] as any[],
    }
    if (Math.random()>0.5 && !noImage){
        target.Images.push(
            {
                imageId: 1,
                link: faker.image.urlLoremFlickr()
            },
            {
                imageId: 2,
                link: faker.image.urlLoremFlickr()
            },
            {
                imageId: 3,
                link: faker.image.urlLoremFlickr()
            },
            {
                imageId: 4,
                link: faker.image.urlLoremFlickr()
            }
        )
    }
    return (
        <PostArticle post={target}>
            <div className={style.postWrapper}>
                <div className={style.postUserSection}>
                    <Link href={`/${target.User.id}`} className={style.postUserImage}>
                        <img src={target.User.image} alt={target.User.nickname} />
                    </Link>
                    <div className={style.postShade} />
                </div>
                <div className={style.postBody}>
                    <div className={style.postMeta}>
                        <Link href={`/${target.User.id}`}>
                            <span className={style.postUserName}>{target.User.nickname}</span>
                            &nbsp;
                            <span className={style.postUserId}>@{target.User.id}</span>
                            &nbsp;
                            .
                            &nbsp;
                        </Link>
                        <span className={style.postDate}>{dayjs(target.createdAt).fromNow(true)}</span>
                    </div>
                    <div>{target.content}</div>
                    <div>
                        <PostImages post={target} />
                    </div>
                    <ActionButtons />
                </div>
            </div>
        </PostArticle>
    )
}