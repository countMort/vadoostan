import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

const protectedRoutes = ['/experience'];

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const cookieStore = await cookies();
  const cookie = cookieStore.get('token');
  const { pathname } = request.nextUrl;
  const isProtected = protectedRoutes.some((route) => {
    return pathname.startsWith(route);
  });

  if (isProtected && !cookie) {
    console.log({ cookie });
    return NextResponse.redirect(new URL('/signup', request.url));
  }
  return NextResponse.next();
}

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// };
