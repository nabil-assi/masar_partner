// src/app/layout.tsx
import "./globals.css";
import { Almarai } from "next/font/google";

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-almarai",
});

export const metadata = {
  title: "منصة مسار التعليمية",
  description: "بوابتك نحو الاحتراف التقني",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${almarai.variable}`}>
      <body className="bg-[#0F172A] text-white min-h-screen vc-init">
        {/* المحتوى يأتي من الصفحات أو الـ Layouts الفرعية */}
        {children}
      </body>
    </html>
  );
}