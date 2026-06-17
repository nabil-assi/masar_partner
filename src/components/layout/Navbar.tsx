"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // 1. استيراد الهوك
import { Menu, X, GraduationCap, User } from "lucide-react";

const navLinks = [
  { name: "الرئيسية", href: "/" },
  { name: "الأقسام التعليمية", href: "/departments" },
  { name: "المقالات", href: "/blog" },
  { name: "عن الأكاديمية", href: "/about" },
  { name: "تواصل معنا", href: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // 2. الحصول على المسار الحالي

  return (
    <nav className="fixed top-6 left-4 right-4 md:left-9 md:right-9 z-50 bg-[#1E293B]/70 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <User size={18} /> تسجيل الدخول
            </Link>
            <Link href="/register" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-xl font-bold transition-all shadow-lg shadow-orange-500/20">
              ابدأ الآن
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              // 3. التحقق مما إذا كان هذا هو الرابط النشط
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors font-medium text-sm ${
                    isActive 
                      ? "text-orange-500 font-bold" // لون وتنسيق الرابط النشط
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-white">مسار</span>
            <div className="bg-orange-600 p-1.5 rounded-lg">
              <GraduationCap className="text-white" size={20} />
            </div>
          </Link>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#1E293B]/95 border-t border-white/10 rounded-b-2xl p-6 flex flex-col gap-4 text-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)} 
                className={`py-2 ${isActive ? "text-orange-500 font-bold" : "text-gray-300 hover:text-orange-500"}`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
            <Link href="/login" className="text-gray-300 flex justify-center items-center gap-2"><User size={18} /> تسجيل الدخول</Link>
            <Link href="/register" className="bg-orange-500 text-white py-3 rounded-xl font-bold">ابدأ الآن</Link>
          </div>
        </div>
      )}
    </nav>
  );
};