import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/hdr") {
    return NextResponse.redirect(new URL("/HDR", request.url), 308);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/hdr"],
};
