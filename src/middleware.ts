import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const { pathname } = request.nextUrl;

  // نشيل البورت إذا موجود (متل :3000)
  const hostWithoutPort = hostname.split(":")[0];

  // ناخد أول جزء من الدومين (الـ subdomain)
  const subdomain = hostWithoutPort.split(".")[0];

  console.log("hostname:", hostname, "| subdomain:", subdomain); // للتشخيص المؤقت

  if (subdomain === "academy") {
    return NextResponse.rewrite(new URL(`/Academy${pathname}`, request.url));
  }

  return NextResponse.rewrite(new URL(`/Website${pathname}`, request.url));
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};