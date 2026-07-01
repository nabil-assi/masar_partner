import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = request.headers.get('host');

  // 1. تحديد الدومين الأساسي (استبدل masar.com بدومينك الحقيقي)
  const rootDomain = 'masar.com'; 

  // 2. استخراج الدومين الفرعي
  // نحذف الدومين الأساسي و localhost إذا كنا في مرحلة التطوير
  const currentHost = hostname?.replace(`.${rootDomain}`, '').replace(':3000', '');

  // 3. المنطق الديناميكي
  // إذا كان الرابط academy.masar.com أو academy.localhost
  if (currentHost === 'academy') {
    return NextResponse.rewrite(new URL(`/Academy${url.pathname}`, request.url));
  }

  // إذا كان الرابط website.masar.com أو الرابط الرئيسي
  if (currentHost === 'website' || currentHost === 'www' || currentHost === rootDomain || !currentHost) {
    return NextResponse.rewrite(new URL(`/Website${url.pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  // استثناء الملفات الثابتة والصور ومسارات الـ API من الميدل وير
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)',
  ],
};