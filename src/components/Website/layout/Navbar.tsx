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
      className="fixed inset-x-3 top-3 z-50 mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/90 bg-white/90 px-4 py-2 shadow-[0_12px_38px_rgba(21,54,96,0.10)] backdrop-blur-xl sm:inset-x-6 sm:top-4 sm:px-6 lg:inset-x-8 lg:px-7"
      dir="rtl"
    >
      {/* الشعار */}
      <Link
        href="/"
        className="relative flex h-[48px] w-[135px] shrink-0 items-center sm:h-[54px] sm:w-[155px] lg:h-[58px] lg:w-[170px]"
        onClick={() => setIsOpen(false)}
      >
        <Image
          src="/icons/logo-web.png"
          alt="مسار للحلول الرقمية"
          width={185}
          height={63}
          sizes="(min-width: 1024px) 185px, 160px"
          className="object-contain p-2"
          priority
        />
      </Link>

      {/* الروابط - سطح المكتب */}
      <div className="hidden items-center gap-1 text-gray-700 lg:flex xl:gap-2">
        {navLinks.map((link) => {
          const isActive = isLinkActive(link.href);
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`relative rounded-xl px-3.5 py-2 font-almarai text-[14px] font-bold transition-all xl:px-4 ${
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
        className="hidden shrink-0 items-center gap-2 rounded-xl bg-[#075dc7] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-900/15 transition-all hover:-translate-y-0.5 hover:bg-[#064fa8] lg:inline-flex"
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
          <a
            href="https://wa.me/970567465929"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#075dc7] px-6 py-3 font-bold text-white shadow-md transition-all hover:bg-[#064fa8]"
          >
            <FaWhatsapp size={19} />
            احجز استشارة مجانية
          </a>
        </div>
      )}
    </nav>
  );
};
