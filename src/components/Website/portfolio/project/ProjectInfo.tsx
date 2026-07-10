"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  Calendar,
  Clock,
  FolderOpen,
  User,
  ChevronLeft,
  ChevronRight,
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

const AUTOPLAY_INTERVAL = 5000; // 5 ثواني

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

  // التشغيل التلقائي كل 5 ثواني
  useEffect(() => {
    if (slides.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      goToNext();
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [goToNext, slides.length, isPaused]);

  // عند أي تفاعل يدوي، نوقف التشغيل التلقائي مؤقتًا (10 ثواني) ثم نعيد تفعيله
  const handleManualInteraction = (action: () => void) => {
    action();
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  return (
    <section className="py-16 px-6 bg-white" dir="rtl">
      <div className="website-container-narrow relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
       
          {/* معرض الصور - كاروسيل */}
          <div className="lg:col-span-2 relative">
            <div className="relative w-full h-[320px] lg:h-[420px] rounded-2xl overflow-hidden bg-gray-100">
              <Image
                key={activeSlide}
                src={slides[activeSlide]}
                alt={`${client} - عرض ${activeSlide + 1}`}
                fill
                sizes="(min-width: 1024px) 1024px, calc(100vw - 32px)"
                className="object-cover transition-opacity duration-500"
              />

              {slides.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() =>
                        handleManualInteraction(() => setActiveSlide(i))
                      }
                      aria-label={`الانتقال للصورة ${i + 1}`}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        i === activeSlide ? "bg-cyan-400" : "bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {slides.length > 1 && (
              <button
                onClick={() => handleManualInteraction(goToPrev)}
                aria-label="الصورة السابقة"
                className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -right-14 w-10 h-10 rounded-full bg-white shadow-md items-center justify-center hover:bg-gray-50 transition-colors z-10"
              >
                <ChevronRight className="w-5 h-5 text-[#0F172A]" />
              </button>
            )}

            {slides.length > 1 && (
              <button
                onClick={() => handleManualInteraction(goToNext)}
                aria-label="الصورة التالية"
                className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -left-14 w-10 h-10 rounded-full bg-white shadow-md items-center justify-center hover:bg-gray-50 transition-colors z-10"
              >
                <ChevronLeft className="w-5 h-5 text-[#0F172A]" />
              </button>
            )}
          </div>

             {/* بطاقة معلومات المشروع - فاتحة */}
          <div className="lg:col-span-1 bg-white rounded-2xl p-8">
            <h3 className="text-xl font-bold text-[#0F172A] mb-4">
              معلومات المشروع
            </h3>
            <div className="h-px bg-gray-200 mb-6" />

            <div className="space-y-5">
              <div>
                <p className="text-xs text-gray-400 mb-1">العميل</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-[#0F172A]">{client}</p>
                  <User className="w-4 h-4 text-cyan-500 shrink-0" />
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-400 mb-1">التصنيف</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-[#0F172A]">
                    {category}
                  </p>
                  <FolderOpen className="w-4 h-4 text-cyan-500 shrink-0" />
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-400 mb-1">المدة</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-[#0F172A]">
                    {duration}
                  </p>
                  <Clock className="w-4 h-4 text-cyan-500 shrink-0" />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-base font-bold text-[#0F172A] mb-4">
                التقنيات المستخدمة
              </p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 text-xs font-bold rounded-full bg-gray-100 text-gray-600 border border-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {link && (
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 mt-8 bg-[#0047AB] hover:bg-[#003580] transition-colors text-white text-sm font-bold px-5 py-3 rounded-xl"
              >
                <span>زيارة المشروع</span>
                <ExternalLink size={14} />
              </Link>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
