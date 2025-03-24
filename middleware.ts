import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const { searchParams, pathname } = req.nextUrl;
  // console.log("MIDDLEWARE searchParams:", searchParams.toString());
  // If we're finishing login (postLogin), skip check
  if (searchParams.get("postLogin")) {
    return NextResponse.next();
  }
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  console.log("MIDDLEWARE token:", token);
  console.log("MIDDLEWARE token.sub:", token?.sub);
  const userId = token?.sub;
  console.log("MIDDLEWARE userId:", userId);
  const url = req.nextUrl.clone();

  if (!token) {
    // Redirect to login if not authenticated
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  if (
    pathname.startsWith("/listeners") &&
    userId &&
    !pathname.includes(userId)
  ) {
    // Redirect to the user's own page if they try to access someone else's page
    url.pathname = `/listeners/${userId}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/listeners/:path*"],
};