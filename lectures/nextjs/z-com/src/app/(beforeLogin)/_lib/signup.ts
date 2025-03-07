"use server";

import {redirect} from "next/navigation";
import {signIn} from "@/auth";

export default async (prevState: { message: string | null }, formData: FormData) => {
    if (!formData.get('id') || !(formData.get('id') as string)?.trim()) {
        return { message: 'no_id' };
    }
    if (!formData.get('name') || !(formData.get('name') as string)?.trim()) {
        return { message: 'no_name' };
    }
    if (!formData.get('password') || !(formData.get('password') as string)?.trim()) {
        return { message: 'no_password' };
    }
    if (!formData.get('image')) {
        return { message: 'no_image' };
    }
    let shouldRedirect = false;
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
            {
                method: 'post',
                body: formData,
                credentials: 'include' // 이게 있어야 쿠키가 전달이 된다.(쿠키가 있어야 로그인 했는지 안했는지 여부를 알 수있다.)
            });
        console.log(response.status);

        // 백엔드 에러처리
        if (response.status === 403) {
            return { message : 'user_exist' }
        }
        console.log(await response.json());
        shouldRedirect = true;
        await signIn("credentials", {
            username: formData.get('id'),
            password: formData.get('password'),
            redirect: false,
        })
    } catch (err) {
        console.error(err);
        return { message: null };
    }
    if (shouldRedirect) {
        redirect('/home'); // 주의할점 : try, catch문 내부에서 사용하면 안된다.
    }
    return { message : null }
}