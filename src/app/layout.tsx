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
        <div className="fixed inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-white via-[#F4F8FF] to-white" />
        <div
          className="absolute inset-0 -z-10 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,71,171,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,71,171,0.08) 1px, transparent 1px)",
            backgroundSize: "46px 46px",
          }}
        />
      </div>
         {children}
      </body>
    </html>
  );
}