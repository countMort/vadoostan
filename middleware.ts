// middleware.ts
import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/experience-list', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/profile'], // Protect this path
};
