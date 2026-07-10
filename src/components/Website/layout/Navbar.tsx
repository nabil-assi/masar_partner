"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; // استدعاء الأيقونة

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "حلولنا", href: "/services" },
    { name: "أعمالنا", href: "/portfolio" },
    { name: "عملائنا", href: "/clients" },

    { name: "المدونة", href: "/blog" },
    { name: "من نحن", href: "/about" },
    { name: "تواصل معنا", href: "/contact" },
  ];

  const isLinkActive = (href: string) => {
    // الرئيسية لازم تكون مطابقة تامة فقط، وإلا رح تصير مفعّلة دايماً
    if (href === "/") {
      return pathname === "/";
    }
    // باقي الروابط: مفعّلة لو المسار الحالي بيبلش بنفس الرابط
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav
      className="fixed inset-x-4 top-4 z-50 mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-gray-100 bg-white/95 px-4 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.08)] backdrop-blur-md sm:inset-x-6 sm:px-6 lg:inset-x-8 lg:px-8"
      dir="rtl"
    >
      {/* الشعار */}
      <Link
        href="/"
        className="flex items-center w-[140px] h-[48px] sm:w-[160px] sm:h-[54px] lg:w-[185px] lg:h-[63px] relative shrink-0"
        onClick={() => setIsOpen(false)}
      >
        <Image
          src="/icons/logo-web.png"
          alt="مسار للحلول الرقمية"
          width={185}
          height={63}
          sizes="(min-width: 1024px) 185px, 160px"
          className="object-contain p-3 mb-2"
          priority
        />
      </Link>

      {/* الروابط - سطح المكتب */}
      <div className="hidden lg:flex items-center gap-2 xl:gap-3 text-gray-700">
        {navLinks.map((link) => {
          const isActive = isLinkActive(link.href);
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`relative px-4 py-2 rounded-xl font-almarai font-bold text-[15px] transition-all ${
                isActive
                  ? "bg-blue-50 text-[#0047AB]"
                  : "text-gray-600 hover:text-[#0047AB] hover:bg-gray-50"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      {/* زر الحجز - سطح المكتب */}
      <a
        href="https://wa.me/970567465929"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:inline-flex items-center gap-2 bg-[#0047AB] text-white px-6 py-2.5 rounded-xl font-bold hover:bg-[#003580] transition-all shadow-lg shadow-blue-900/20 shrink-0"
      >
        <FaWhatsapp size={20} />
        استشارة مجانية
      </a>

      {/* زر القائمة - الجوال والتابلت */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 text-[#0047AB] shrink-0"
        aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* القائمة المنسدلة - الجوال والتابلت */}
      {isOpen && (
        <div className="lg:hidden absolute top-full mt-3 left-0 right-0 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 p-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = isLinkActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-xl font-almarai font-bold text-[15px] transition-all text-right ${
                  isActive
                    ? "bg-blue-50 text-[#0047AB]"
                    : "text-gray-600 hover:text-[#0047AB] hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <button className="mt-2 bg-gradient-to-b from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg font-bold shadow-md hover:from-blue-700 hover:to-blue-900 transition-all w-full">
            احجز استشارة مجانية
          </button>
        </div>
      )}
    </nav>
  );
};
