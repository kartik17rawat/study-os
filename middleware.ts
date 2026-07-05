import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const protectedRoutes = [
    "/dashboard",
    "/tasks",
    "/calendar",
    "/pomodoro",
    "/analytics",
    "/tests",
    "/settings",
  ];

  const isProtected = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/tasks/:path*",
    "/calendar/:path*",
    "/pomodoro/:path*",
    "/analytics/:path*",
    "/tests/:path*",
    "/settings/:path*",
  ],
};