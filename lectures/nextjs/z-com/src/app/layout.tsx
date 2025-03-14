import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {MSWProvider} from "@/app/_component/MSWComponent";
import AuthSession from "@/app/_component/AuthSession";

if (process.env.NEXT_RUNTIME === 'nodejs' && process.env.NODE_ENV !== 'production' && process.env.NEXT_PUBLIC_MSW_ENABLED !== 'false') {
    // 서버 컴포넌트용 http.ts를 사용하기 위해 불러옴.
    const { server } = require('@/mocks/http')
    server.listen()
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Z. 무슨 일이 일어나고 있나요?",
  description: "Z.com inspired by X.com",
};

type Props = {
    children: React.ReactNode
};

export default function RootLayout({
  children
}: Props) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <MSWProvider>
          <AuthSession>
            {children}
          </AuthSession>
      </MSWProvider>
      </body>
    </html>
  );
}
