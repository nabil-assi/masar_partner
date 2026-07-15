// src/app/layout.tsx
import "./globals.css";
import RevealProvider from "../components/ui/RevealProvider";
import { Almarai } from "next/font/google";
import type { Metadata } from "next";

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-almarai",
});

export const metadata: Metadata = {
  title: {
    default: "مسار للحلول الرقمية | منصات وأتمتة وتطوير برمجيات",
    template: "%s | مسار للحلول الرقمية",
  },
  description:
    "نبني المنصات الرقمية وتطبيقات الأعمال وأنظمة الأتمتة للشركات، من الاستراتيجية والتصميم إلى التطوير والدعم المستمر.",
  keywords: [
    "مسار للحلول الرقمية",
    "تطوير برمجيات",
    "تطوير منصات",
    "أتمتة الأعمال",
    "ERPNext",
    "تصميم UI UX",
  ],
  openGraph: {
    type: "website",
    locale: "ar_AR",
    siteName: "مسار للحلول الرقمية",
    title: "مسار للحلول الرقمية",
    description: "حلول رقمية متكاملة تساعد الشركات على العمل والنمو بوضوح.",
  },
  twitter: {
    card: "summary_large_image",
    title: "مسار للحلول الرقمية",
    description: "منصات وأتمتة وتطبيقات أعمال مصممة للنمو.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${almarai.variable}`} suppressHydrationWarning>
      
      <body className="min-h-screen  p-0 text-slate-950    vc-init" suppressHydrationWarning>
        
        <RevealProvider />
        
        {children}
      </body>
    </html>
  );
}
