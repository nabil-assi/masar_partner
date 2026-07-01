// src/app/Academy/layout.tsx
import { Navbar } from '@/components/Website/layout/Navbar'; 
import { Footer } from '@/components/Website/home/Footer'; 
import { Almarai } from "next/font/google";

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-almarai", // هذا مهم جداً
});

export default function AcademyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div dir='rtl' className={`flex flex-col min-h-screen ${almarai.variable} font-almarai`}>
      {/* الـ Navbar يظهر فقط في صفحات الأكاديمية */}
      <Navbar />
      
      {/* المحتوى الرئيسي */}
      <main className="flex-grow ">
        {children}
      </main>

      {/* الـ Footer يظهر فقط في صفحات الأكاديمية */}
      <Footer />
    </div>
  );
}