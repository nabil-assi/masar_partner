// src/app/Academy/layout.tsx
import { NavbarWrapper } from '@/components/Academy/layout/NavbarWrapper'; 
import { Footer } from '@/components/Academy/home/Footer'; 

export default function AcademyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* الـ Navbar يظهر فقط في صفحات الأكاديمية */}
      <NavbarWrapper />
      
      {/* المحتوى الرئيسي */}
      <main className="flex-grow">
        {children}
      </main>

      {/* الـ Footer يظهر فقط في صفحات الأكاديمية */}
      <Footer />
    </div>
  );
}