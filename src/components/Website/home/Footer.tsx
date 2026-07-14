"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
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
  { label: "المواقع والمنصات", href: "/services/websites" },
  { label: "الأنظمة والأتمتة", href: "/services/automation-systems" },
  { label: "تطبيقات الجوال", href: "/services/mobile-apps" },
  { label: "التصميم وتجربة المستخدم", href: "/services/design" },
];

const bottomLinks = [
  { label: "سياسة الخصوصية", href: "/privacy" },
  { label: "الشروط والأحكام", href: "/terms" },
];

const footerLinkClass =
  "group inline-flex items-center gap-2 text-sm leading-7 text-slate-300 transition-colors hover:text-white focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300";

export const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer
        className="relative isolate overflow-hidden bg-[#06122f] text-white"
        dir="rtl"
      >
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.16]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148, 197, 255, 0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 197, 255, 0.16) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "linear-gradient(to bottom, black, transparent 75%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent 75%)",
          }}
        />
        <div className="pointer-events-none absolute -right-36 -top-48 -z-10 h-[34rem] w-[34rem] rounded-full bg-[#075dc7]/20 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-56 -left-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-cyan-400/10 blur-[120px]" />

        <div className="border-y border-white/10">
          <div className="website-container grid gap-7 py-9 sm:py-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl text-right">
              <div className="mb-3 flex items-center gap-2 text-xs font-bold text-sky-300 sm:text-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-300 opacity-50" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sky-300" />
                </span>
                جاهزون لمشروع جديد
              </div>
              <h2 className="website-subsection-title !text-white">
                لنحوّل فكرتك إلى خطوة رقمية واضحة ومؤثرة.
              </h2>
            </div>

            <Link
              href="/contact"
              className="group inline-flex min-h-12 w-fit items-center justify-center gap-3 rounded-xl bg-white px-5 text-sm font-extrabold text-[#071b4e] shadow-[0_12px_35px_rgba(0,0,0,0.16)] transition hover:-translate-y-0.5 hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06122f]"
            >
              تحدث معنا عن مشروعك
              <ArrowLeft className="h-4 w-4 text-[#075dc7] transition-transform group-hover:-translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="website-container py-12 sm:py-14 lg:py-16">
          <div className="grid gap-11 lg:grid-cols-12 lg:gap-8">
            <div className="text-right lg:col-span-5 lg:pl-12">
              <Link
                href="/"
                aria-label="العودة إلى الصفحة الرئيسية"
                className="inline-flex rounded-2xl bg-white px-4 py-3 shadow-[0_16px_45px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
              >
                <Image
                  src="/icons/logo-web.png"
                  alt="مسار للحلول الرقمية"
                  width={176}
                  height={64}
                  sizes="160px"
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <p className="mt-5 max-w-md text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                نبني حلولاً رقمية عملية تجمع بين التقنية والتصميم وفهم الأعمال،
                لتعمل ببساطة اليوم وتتوسع بثقة غداً.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-bold text-slate-300">
                <MapPin className="h-4 w-4 text-sky-300" />
                نخدم عملاءنا إقليمياً ودولياً
              </div>
            </div>

            <nav
              aria-label="روابط حلول مسار"
              className="text-right sm:col-span-1 lg:col-span-2"
            >
              <h3 className="mb-5 text-sm font-extrabold text-white">حلولنا</h3>
              <ul className="space-y-2.5">
                {servicesLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={footerLinkClass}>
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-400/60 transition group-hover:bg-sky-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav
              aria-label="روابط الشركة"
              className="text-right sm:col-span-1 lg:col-span-2"
            >
              <h3 className="mb-5 text-sm font-extrabold text-white">الشركة</h3>
              <ul className="space-y-2.5">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={footerLinkClass}>
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-400/60 transition group-hover:bg-sky-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="text-right lg:col-span-3">
              <h3 className="mb-5 text-sm font-extrabold text-white">
                تواصل مباشر
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+970567465929"
                  dir="ltr"
                  className="group flex items-center justify-end gap-3 text-sm text-slate-300 transition hover:text-white focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                >
                  <span>+970 56 746 5929</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-sky-300 transition group-hover:border-sky-300/30 group-hover:bg-sky-300/10">
                    <Phone className="h-4 w-4" />
                  </span>
                </a>
                <a
                  href="mailto:info@masar.com"
                  dir="ltr"
                  className="group flex items-center justify-end gap-3 text-sm text-slate-300 transition hover:text-white focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                >
                  <span>info@masar.com</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-sky-300 transition group-hover:border-sky-300/30 group-hover:bg-sky-300/10">
                    <Mail className="h-4 w-4" />
                  </span>
                </a>
              </div>
              <p className="mt-6 border-r-2 border-sky-400/70 pr-3 text-xs leading-6 text-slate-400">
                نرد عادةً خلال يوم عمل واحد.
              </p>
            </div>
          </div>

          <div className="mt-11 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} مسار للحلول الرقمية. جميع الحقوق محفوظة.</p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {bottomLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="transition-colors hover:text-white focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <motion.a
        href="https://wa.me/970567465929"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.75, x: 16 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        whileHover={{ scale: 1.06, y: -2 }}
        whileTap={{ scale: 0.94 }}
        className="fixed bottom-20 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-[#25D366] text-white shadow-[0_12px_30px_rgba(13,84,43,0.28)] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-green-300 sm:bottom-20 sm:right-6"
        aria-label="تواصل معنا عبر واتساب"
      >
        <MessageCircle className="h-5 w-5" fill="currentColor" />
      </motion.a>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scroll-top-button"
            initial={{ opacity: 0, scale: 0.75, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.75, y: 12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.94 }}
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[#075dc7] text-white shadow-[0_12px_30px_rgba(7,45,98,0.3)] transition-colors hover:bg-[#064fa8] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-300 sm:right-6"
            aria-label="الرجوع لأعلى الصفحة"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};
