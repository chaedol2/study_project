import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    experimental:{
        serverActions:{
            bodySizeLimit: '10mb', // 10mb 업로드 제한
        }
    },
    async rewrites() {
        return [
            {
                source: '/upload/:slug',
                destination: `${process.env.NEXT_PUBLIC_BASE_URL}/upload/:slug`, // Matched parameters can be used in the destination
            }
        ]
    }
};

export default nextConfig;
