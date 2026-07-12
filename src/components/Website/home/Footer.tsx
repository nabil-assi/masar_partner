"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUp,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

const companyLinks = [
  { label: "من نحن", href: "/about" },
  { label: "عملاؤنا", href: "/clients" },
  { label: "أعمالنا", href: "/portfolio" },
  { label: "المدونة", href: "/blog" },
];

const servicesLinks = [
  { label: "تطوير المواقع والمنصات", href: "/services/websites" },
  { label: "الأنظمة والأتمتة", href: "/services/automation-systems" },
  { label: "تطبيقات الجوال", href: "/services/mobile-apps" },
  { label: "التصميم وتجربة المستخدم", href: "/services/design" },
];

const bottomLinks = [
  { label: "سياسة الخصوصية", href: "/privacy" },
  { label: "الشروط والأحكام", href: "/terms" },
];

const contactItems = [
  {
    label: "نخدم عملاءنا عن بُعد إقليمياً ودولياً",
    href: "/contact",
    icon: MapPin,
  },
  {
    label: "+970 56 746 5929",
    href: "tel:+970567465929",
    icon: Phone,
    dir: "ltr" as const,
  },
  {
    label: "info@masar.com",
    href: "mailto:info@masar.com",
    icon: Mail,
    dir: "ltr" as const,
  },
];

export const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="relative mt-24 overflow-hidden border-t border-slate-200/80 bg-[linear-gradient(135deg,_#f8fbff_0%,_#eef5ff_45%,_#f7faff_100%)] text-slate-700" dir="rtl">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/60 to-transparent" />

        <div className="relative website-container py-10 sm:py-12">
          <div className="flex flex-col gap-8 pb-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
            <div className="max-w-md">
              <Link href="/" className="relative mb-4 flex h-14 w-40 transition-transform duration-300 hover:scale-[1.02]">
                <Image
                  src="/icons/logo-web.png"
                  alt="مسار للحلول الرقمية"
                  width={160}
                  height={56}
                  sizes="160px"
                  className="object-contain object-right"
                />
              </Link>

              <p className="text-sm leading-7 text-slate-600">
                نبني حلولاً رقمية موثوقة تساعد الشركات على التطور والازدهار عبر خبرات عملية ومصممة وفق احتياجاتهم الفعلية.
              </p>
            </div>

            <div className="flex flex-col gap-8 sm:flex-row sm:gap-10 lg:gap-14">
              <div>
                <h3 className="mb-4 text-sm font-extrabold text-slate-900">حلولنا</h3>
                <ul className="space-y-2.5">
                  {servicesLinks.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-600 transition-colors hover:text-sky-700"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-sm font-extrabold text-slate-900">الشركة</h3>
                <ul className="space-y-2.5">
                  {companyLinks.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-600 transition-colors hover:text-sky-700"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-sm font-extrabold text-slate-900">تواصل معنا</h3>
                <ul className="space-y-2.5">
                  {contactItems.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="flex items-center gap-3 rounded-xl px-2 py-1.5 text-sm text-slate-600 transition-all duration-300 hover:bg-sky-50 hover:text-sky-700"
                        dir={item.dir}
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                          <item.icon className="h-4 w-4" />
                        </span>
                        <span className="break-words text-right" dir={item.dir}>
                          {item.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-2 rounded-2xl border border-slate-200/80 bg-white/70 px-4 py-4 shadow-[0_8px_24px_rgba(15,23,42,0.04)] sm:px-6">
            <div className="flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
              <p className="text-slate-500">
                © مسار {new Date().getFullYear()}. جميع الحقوق محفوظة.
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                {bottomLinks.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="text-slate-500 transition-colors hover:text-sky-700"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* أزرار التواصل والرجوع للأعلى */}
      <AnimatePresence>
        <motion.a
          key="whatsapp-button"
          href="https://wa.me/970567465929"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.5, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.5, x: 20 }}
          whileHover={{ scale: 1.1, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-24 right-6 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/30"
          aria-label="تواصل معنا عبر واتساب"
        >
          <MessageCircle size={24} />
        </motion.a>
        {showScrollTop && (
          <motion.button
            key="scroll-top-button"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#075dc7] text-white shadow-lg shadow-blue-900/30 transition-colors hover:bg-[#064fa8]"
            aria-label="الرجوع لأعلى الصفحة"
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowUp size={20} />
            </motion.div>
          </motion.button>
        )}
     
      </AnimatePresence>
    </>
  );
};
