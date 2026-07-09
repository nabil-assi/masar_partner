"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";

// أيقونات السوشيال ميديا كـ SVG مخصص (lucide-react شال أيقونات العلامات التجارية)
const InstagramIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect
      x="2"
      y="2"
      width="20"
      height="20"
      rx="5"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
  </svg>
);

const LinkedinIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect
      x="2"
      y="2"
      width="20"
      height="20"
      rx="3"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="7"
      y1="10"
      x2="7"
      y2="17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="7" cy="6.5" r="1.3" fill="currentColor" />
    <path
      d="M11 17V10M11 13C11 11 12.5 10 14 10C15.5 10 16 11 16 13V17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FacebookIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M15 8h-2c-1.1 0-2 .9-2 2v2H9v3h2v7h3v-7h2.5l.5-3H14v-1.5c0-.6.4-1 1-1h1.5V8h-1.5Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <rect
      x="2"
      y="2"
      width="20"
      height="20"
      rx="5"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const companyLinks = [
  { label: "من نحن", href: "/about" },
  { label: "فريقنا", href: "/about#team" },
  { label: "مشاريعنا", href: "/portfolio" },
  { label: "المدونة", href: "/blog" },
  { label: "تواصل معنا", href: "/contact" },
];

const servicesLinks = [
  { label: "العناية البصرية والتصميم", href: "/services/design" },
  { label: "تطوير المواقع والمنصات", href: "/services/websites" },
  { label: "تطبيقات الجوال", href: "/services/mobile-apps" },
  { label: "الأنظمة والأتمتة", href: "/services/automation-systems" },
  { label: "التسويق الرقمي", href: "/services/marketing" },
  { label: "استشارات الرقمية", href: "/services/consulting" },
];

const bottomLinks = [
  { label: "سياسة الخصوصية", href: "/privacy" },
  { label: "الشروط والأحكام", href: "/terms" },
];

const socials = [
  { Icon: InstagramIcon, href: "#" },
  { Icon: LinkedinIcon, href: "#" },
  { Icon: FacebookIcon, href: "#" },
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
      <footer className="bg-[#0A1330] pt-16 mt-20 pb-8 px-6" dir="rtl">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 pb-12">
            {/* الشعار والوصف والسوشيال */}
            <div>
              <div className="relative w-32 h-14 mb-5">
                <Image
                  src="/icons/logo-web.png"
                  alt="مسار"
                  fill
                  className="object-contain object-right"
                />
              </div>

              <p className="text-blue-100/70 text-sm leading-relaxed mb-6">
                مسار هي شركة رائدة في الحلول الرقمية والتسويقية، نبتكر، نصمم،
                ونبني للمستقبل.
              </p>
              <div className="flex gap-3">
                {socials.map((social, i) => {
                  const Icon = social.Icon;
                  return (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-blue-100/70 hover:bg-[#0047AB] hover:border-[#0047AB] hover:text-white transition-colors"
                    >
                      <Icon size={15} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* خدماتنا */}
            <div>
              <h4 className="text-white font-bold text-base mb-6">خدماتنا</h4>
              <ul className="space-y-4">
                {servicesLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-blue-100/80 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
   {/* الشركة */}
            <div>
              <h4 className="text-white font-bold text-base mb-6">الشركة</h4>
              <ul className="space-y-4">
                {companyLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-blue-100/80 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* تواصل معنا */}
            <div>
              <h4 className="text-white font-bold text-base mb-6">
                تواصل معنا
              </h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="text-blue-100/80 text-sm">طنطا، مصر</span>
                  <MapPin size={15} className="text-[#5CA8F1] shrink-0" />
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-100/80 text-sm" dir="ltr">
                    01505294544
                  </span>
                  <Phone size={15} className="text-[#5CA8F1] shrink-0" />
                </li>
                <li className="flex items-center gap-3">
                  <span
                    className="text-blue-100/80 text-sm break-all"
                    dir="ltr"
                  >
                    info@masar.com
                  </span>
                  <Mail size={15} className="text-[#5CA8F1] shrink-0" />
                </li>
              </ul>
            </div>

         
            
          </div>

          {/* خط فاصل */}
          <div className="h-px bg-white/10 mb-6" />

          {/* شريط الحقوق */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-blue-100/60">
              © مسار {new Date().getFullYear()}. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center gap-6">
              {bottomLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="text-blue-100/60 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* زر الرجوع لفوق */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#0047AB] hover:bg-[#003580] text-white flex items-center justify-center shadow-lg shadow-blue-900/30 transition-colors"
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
