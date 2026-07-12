import { NextRequest, NextResponse } from "next/server";

const INTERNAL_PREFIXES = ["/Website", "/Academy"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (INTERNAL_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`))) {
    return NextResponse.next();
  }

  const hostname = request.headers.get("host") || "";
  const hostWithoutPort = hostname.split(":")[0];
  const subdomain = hostWithoutPort.split(".")[0];
  const routePrefix = subdomain === "academy" ? "/Academy" : "/Website";
  const destination = request.nextUrl.clone();
  destination.pathname = `${routePrefix}${pathname === "/" ? "" : pathname}`;

  return NextResponse.rewrite(destination);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\..*).*)"],
};
