"use client";

import {useState} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

type Props = {
    children: React.ReactNode;
}

export default function RQProvider({children}: Props){
    const [client] = useState(
        new QueryClient({
            defaultOptions: {
                queries: {
                    // 탭전환 시 데이터 다시 가져오겠다
                    refetchOnWindowFocus: false,
                    // 페이지 이동하면서 마운트 될 때
                    refetchOnMount: true,
                    // 페이지 이동, 컴포넌트가 리액트에 올라간 순간 다시 가져오기.
                    refetchOnReconnect: false,
                    // 실패 시 재시도 횟수 정할 수 있다.
                    retry: false,
                }
            }
        })
    );

    return (
        <QueryClientProvider client={client}>
            {children}
            <ReactQueryDevtools initialIsOpen={process.env.NEXT_PUBLIC_MODE === 'local'} />
        </QueryClientProvider>
    )
}