export { GET, POST } from '@/auth';

// [...nextauth] 폴더는 Catch-all Segments
// https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#catch-all-segments
// GET http://localhost:3000/api/auth/a
// GET /api/auth/a
// GET /api/auth/b
// GET /api/auth/a/b
// GET /api/auth/a/b/c
export function GET() {

}

export function POST() {

}