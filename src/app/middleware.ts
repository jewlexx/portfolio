import { NextResponse } from "next/server";

export function middleware(request: {
  url: string | URL;
  headers: HeadersInit;
}) {
  const requestHeaders = new Headers(request.headers);

  const referrer = requestHeaders.get("referer");

  const response = NextResponse.next();

  if (!referrer || !referrer.startsWith("https://app.contentful.com/")) {
    response.headers.set("X-Frame-Options", "DENY");
  } else {
    response.headers.delete("X-Frame-Options");
  }

  return response;
}

export const config = {
  matcher: "/:path*",
};
