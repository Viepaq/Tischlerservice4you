import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LEGACY_MENU_REDIRECTS } from "@/lib/legacy-redirects";

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  const menu = searchParams.get("menu");
  if (menu && LEGACY_MENU_REDIRECTS[menu]) {
    const destination = new URL(LEGACY_MENU_REDIRECTS[menu], request.url);
    return NextResponse.redirect(destination, 301);
  }

  if (pathname === "/index.html") {
    return NextResponse.redirect(new URL("/", request.url), 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/index.html"],
};
