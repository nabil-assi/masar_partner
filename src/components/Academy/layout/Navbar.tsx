"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, User } from "lucide-react";

import { AuthModal } from "../auth/AuthModal";
import { LoginForm } from "../auth/LoginForm";
const navLinks = [
  { name: "الرئيسية", href: "/" },
  { name: "الأقسام التعليمية", href: "/departments" },
  { name: "المقالات", href: "/blog" },
  { name: "عن الأكاديمية", href: "/about" },
  { name: "تواصل معنا", href: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  return (
    <nav className="fixed top-4 left-4 right-4 md:top-2 md:left-9 md:right-9 z-50 bg-[#1E293B]/70 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl px-4 md:px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between items-center h-20">
          {/* الأزرار (تظهر فقط في الشاشات الكبيرة) */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/Academy/login"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <User size={18} /> تسجيل الدخول
            </Link>
            <Link
              href="/Academy/register"
              className="bg-gradient-to-r from-[#FF6D00] to-[#FFB692] px-6 py-2 rounded-3xl font-bold text-white transition-all hover:scale-105"
            >
              ابدأ الآن
            </Link>
          </div>

          {/* الروابط (تظهر فقط في الشاشات الكبيرة) */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors font-medium text-sm ${
                  pathname === link.href
                    ? "text-[#228FCC] !font-bold !font-almarai"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* الشعار */}
          <Link href="/" className="flex items-center">
            <div className="relative w-12 h-12 md:w-16 md:h-16">
              <Image
                src="/icons/logo.svg"
                alt="شعار مسار"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* زر القائمة (للجوال) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* قائمة الجوال */}
      {isOpen && (
        <div className="md:hidden bg-[#1E293B]/95 border-t border-white/10 rounded-b-2xl p-6 flex flex-col gap-4 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`py-2 ${pathname === link.href ? "text-orange-500 font-bold" : "text-gray-300"}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
            <button onClick={() => setIsLoginOpen(true)} className="text-white">
              تسجيل الدخول
            </button>
            <Link
              href="/register"
              className="bg-gradient-to-r from-[#FF6D00] to-[#FFB692] py-3 rounded-2xl font-bold text-white"
            >
              أبدا التعلم
            </Link>
            <AuthModal
              isOpen={isLoginOpen}
              onClose={() => setIsLoginOpen(false)} children={undefined}            >
             </AuthModal>
          </div>
        </div>
      )}
    </nav>
  );
};
