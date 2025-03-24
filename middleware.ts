// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import { getToken } from 'next-auth/jwt';

// export async function middleware(req: NextRequest) {
//   const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
//   const url = req.nextUrl.clone();

//   if (!token) {
//     // Redirect to login if not authenticated
//     url.pathname = '/login';
//     return NextResponse.redirect(url);
//   }

//   const userId = token?.sub;
//   const { pathname } = req.nextUrl;

//   if (pathname.startsWith('/listeners') && userId && !pathname.includes(userId)) {
//     // Redirect to the user's own page if they try to access someone else's page
//     url.pathname = `/listeners/${userId}`;
//     return NextResponse.redirect(url);
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/listeners/:path*'],
// };

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const { pathname } = url;

  // Skip middleware for login or NextAuth API routes
  if (pathname.startsWith("/login") || pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  // Otherwise check for token
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  if (!token) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  const userId = token.sub;
  if (
    pathname.startsWith("/listeners") &&
    userId &&
    !pathname.includes(userId)
  ) {
    url.pathname = `/listeners/${userId}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/listeners/:path*"],
};
