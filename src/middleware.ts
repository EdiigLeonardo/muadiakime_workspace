import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if the pathname is a protected route
  const isProtectedRoute = [
    '/conta',
    '/checkout',
    '/favoritos',
    '/carrinho',
  ].some(route => pathname.startsWith(route));

  // Get the token from the request
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // If the route is protected and there's no token, redirect to sign-in
  if (isProtectedRoute && !token) {
    const url = new URL('/auth/sign-in', request.url);
    url.searchParams.set('callbackUrl', encodeURI(pathname));
    return NextResponse.redirect(url);
  }

  // If the user is authenticated and trying to access auth pages, redirect to home
  if (token && (pathname.startsWith('/auth/sign-in') || pathname.startsWith('/auth/sign-up'))) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/conta/:path*',
    '/checkout/:path*',
    '/favoritos/:path*',
    '/carrinho/:path*',
    '/auth/sign-in',
    '/auth/sign-up',
  ],
};