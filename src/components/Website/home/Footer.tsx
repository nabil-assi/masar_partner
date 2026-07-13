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
      <footer className="relative mt-24 overflow-hidden bg-[#06112f] text-slate-100" dir="rtl">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/50 to-transparent" />
        <div className="absolute -left-16 -top-16 h-44 w-44 rounded-full bg-sky-400/15 blur-3xl" />
        <div className="absolute -right-16 -bottom-16 h-48 w-48 rounded-full bg-blue-950/25 blur-3xl" />

        <div className="relative website-container py-16">
          <div className="grid gap-10 lg:grid-cols-4">
            <div className="space-y-4 text-right">
              <Link href="/" className="inline-flex items-center rounded-3xl bg-white p-3 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                <Image
                  src="/icons/logo-web.png"
                  alt="مسار للحلول الرقمية"
                  width={176}
                  height={64}
                  sizes="176px"
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <p className="max-w-xs text-sm leading-7 text-slate-300">
                نساعدك تبني تجربة رقمية حديثة وواضحة، بدون تعقيد وبطابع عربي محترف.
              </p>
            </div>

            <div className="text-right">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">حلولنا</h3>
              <ul className="space-y-3 text-sm text-slate-200/90">
                {servicesLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-right">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">الشركة</h3>
              <ul className="space-y-3 text-sm text-slate-200/90">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-right space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">تواصل معنا</h3>
              <ul className="space-y-3 text-sm text-slate-200/90">
                {contactItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-white/20 hover:text-white"
                      dir={item.dir ?? "rtl"}
                    >
                      <span className="max-w-[70%] text-right break-words">{item.label}</span>
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-300/10 text-sky-200">
                        <item.icon className="h-4 w-4" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex sm:items-center sm:justify-between">
            <p>© مسار {new Date().getFullYear()}. جميع الحقوق محفوظة.</p>
            <div className="mt-3 flex flex-wrap items-center gap-4 sm:mt-0">
              {bottomLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>

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
