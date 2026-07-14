"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ExternalLink, 
  Calendar, 
  Clock, 
  FolderOpen, 
  User, 
  ChevronLeft, 
  ChevronRight, 
  Code2 
} from "lucide-react";

interface ProjectInfoProps {
  image: string;
  gallery: string[];
  client: string;
  category: string;
  year: string;
  duration: string;
  tags: string[];
  link: string;
}

import { Variants } from "framer-motion";


const AUTOPLAY_INTERVAL = 5000;

// إعدادات الحركة
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: "easeOut" as const // هنا يكمن الحل
    } 
  }
};
 
export const ProjectInfo = ({
  image,
  gallery,
  client,
  category,
  year,
  duration,
  tags,
  link,
}: ProjectInfoProps) => {
  const slides = [image, ...(gallery || [])];
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToPrev = useCallback(() => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  const goToNext = useCallback(() => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  useEffect(() => {
    if (slides.length <= 1 || isPaused) return;
    const timer = setInterval(goToNext, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [goToNext, slides.length, isPaused]);

  const handleManualInteraction = (action: () => void) => {
    action();
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="bg-white px-4 py-10 sm:px-6 sm:py-12" 
      dir="rtl"
    >
      <div className="website-container-narrow">
        <motion.div 
          variants={itemVariants}
          className="rounded-[2rem] border border-blue-100 bg-white p-4 shadow-[0_24px_70px_rgba(31,78,132,0.05)] lg:p-6"
        >
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
            {/* معرض الصور */}
            <div className="space-y-6">
              <div className="relative h-[280px] w-full overflow-hidden rounded-[1.5rem] bg-slate-100 sm:h-[400px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={slides[activeSlide]}
                      alt={`${client} - عرض ${activeSlide + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                {slides.length > 1 && (
                  <>
                    <button
                      onClick={() => handleManualInteraction(goToPrev)}
                      className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur hover:bg-white"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleManualInteraction(goToNext)}
                      className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur hover:bg-white"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>

              {/* التقنيات المستخدمة */}
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <div className="mb-4 flex items-center gap-2 text-[#071b4e]">
                  <Code2 className="h-5 w-5" />
                  <h3 className="font-bold">التقنيات المستخدمة</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-lg bg-white px-3 py-1 text-xs font-bold text-[#075dc7] shadow-sm border border-blue-100"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* القائمة الجانبية */}
            <aside className="flex flex-col gap-4">
              <div className="rounded-2xl border border-blue-50 bg-blue-50/30 p-5">
                <h3 className="mb-6 font-extrabold text-[#071b4e]">تفاصيل المشروع</h3>
                <div className="space-y-4">
                  {[
                    { label: "العميل", value: client, icon: User },
                    { label: "التصنيف", value: category, icon: FolderOpen },
                    { label: "المدة", value: duration, icon: Clock },
                    { label: "السنة", value: year, icon: Calendar },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm border border-blue-100">
                        <item.icon className="h-4 w-4 text-[#075dc7]" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase text-slate-400 font-bold">{item.label}</p>
                        <p className="text-sm font-bold text-[#071b4e]">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {link && (
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href={link}
                    target="_blank"
                    className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-[#071b4e] text-white font-bold transition hover:bg-[#075dc7]"
                  >
                    زيارة الموقع
                    <ExternalLink size={16} />
                  </Link>
                </motion.div>
              )}
            </aside>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};