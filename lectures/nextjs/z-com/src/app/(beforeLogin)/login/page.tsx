"use client"

import {useRouter} from "next/navigation";
import Main from "@/app/(beforeLogin)/_component/Main";
import {useSession} from "next-auth/react";
import RedirectToLogin from "@/app/(beforeLogin)/login/_component/RedirectToLogin";

export default function Login() {
    const router = useRouter();
    const {data: session} = useSession();

  if (session?.user) {
    router.replace('/home');
    return null;
  }

  // router.replace('/i/flow/login');
  return (
      <>
        <RedirectToLogin />
        <Main/>
      </>
  );
}


// router.push
// lcoalhost:3000 -> lcoalhost:3000/login(뒤로가기 시 히스토리가 남아있어 무한반복됨.) -> localhost:3000/i/flow/login

// router.replace
// localhost:3000 -> localhost:3000/login(이동후 해당 히스토리 삭제해버려서 뒤로가기 시 더 이전으로 이동.) -> localhost:3000/i/flow/login