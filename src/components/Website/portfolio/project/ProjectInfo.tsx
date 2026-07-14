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
    <section className="bg-white px-4 py-10 sm:px-6 sm:py-12" dir="rtl">
      <div className="website-container-narrow relative">
        <div className="rounded-[1.6rem] border border-blue-100 bg-[linear-gradient(135deg,#ffffff_0%,#f7fbff_52%,#eef8ff_100%)] p-3 shadow-[0_24px_70px_rgba(31,78,132,0.10)] sm:p-4 lg:p-5">
          <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-[minmax(0,1.72fr)_minmax(292px,.78fr)] lg:gap-5">
       
            {/* معرض الصور - كاروسيل */}
            <div className="relative min-w-0">
              <div className="relative h-[270px] w-full overflow-hidden rounded-[1.25rem] bg-slate-50 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.75)] sm:h-[350px] lg:h-[405px]">
              <Image
                key={activeSlide}
                src={slides[activeSlide]}
                alt={`${client} - عرض ${activeSlide + 1}`}
                fill
                sizes="(min-width: 1024px) 1024px, calc(100vw - 32px)"
                className="object-cover transition-opacity duration-500"
              />

              {slides.length > 1 && (
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/60 bg-white/80 px-3 py-2 shadow-sm backdrop-blur">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() =>
                        handleManualInteraction(() => setActiveSlide(i))
                      }
                      aria-label={`الانتقال للصورة ${i + 1}`}
                      className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                        i === activeSlide ? "bg-[#075dc7]" : "bg-slate-300"
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
                className="absolute right-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-blue-100 bg-white/90 text-[#071b4e] shadow-md transition hover:-translate-x-0.5 hover:bg-blue-50 lg:flex"
              >
                <ChevronRight className="w-5 h-5 text-[#0F172A]" />
              </button>
            )}

            {slides.length > 1 && (
              <button
                onClick={() => handleManualInteraction(goToNext)}
                aria-label="الصورة التالية"
                className="absolute left-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-blue-100 bg-white/90 text-[#071b4e] shadow-md transition hover:translate-x-0.5 hover:bg-blue-50 lg:flex"
              >
                <ChevronLeft className="w-5 h-5 text-[#0F172A]" />
              </button>
            )}
            </div>

            {/* بطاقة معلومات المشروع - فاتحة */}
            <aside className="flex rounded-[1.25rem] border border-blue-100 bg-white/95 p-5 shadow-[0_16px_45px_rgba(31,78,132,0.08)] backdrop-blur lg:min-h-[405px]">
              <div className="flex w-full flex-col">
                <div className="mb-5 flex items-center justify-between gap-4 border-b border-blue-100 pb-4">
                  <h3 className="text-lg font-extrabold text-[#071b4e] sm:text-xl">
                    معلومات المشروع
                  </h3>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-extrabold text-[#075dc7]">
                    دراسة مشروع
                  </span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  <div className="rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3.5">
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <p className="text-xs font-bold text-slate-400">العميل</p>
                      <User className="h-4 w-4 shrink-0 text-[#075dc7]" />
                    </div>
                    <p className="text-sm font-extrabold leading-6 text-[#071b4e]">{client}</p>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3.5">
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <p className="text-xs font-bold text-slate-400">التصنيف</p>
                      <FolderOpen className="h-4 w-4 shrink-0 text-[#075dc7]" />
                    </div>
                    <p className="text-sm font-extrabold leading-6 text-[#071b4e]">
                      {category}
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3.5">
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <p className="text-xs font-bold text-slate-400">المدة</p>
                      <Clock className="h-4 w-4 shrink-0 text-[#075dc7]" />
                    </div>
                    <p className="text-sm font-extrabold leading-6 text-[#071b4e]">
                      {duration}
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3.5">
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <p className="text-xs font-bold text-slate-400">السنة</p>
                      <Calendar className="h-4 w-4 shrink-0 text-[#075dc7]" />
                    </div>
                    <p className="text-sm font-extrabold leading-6 text-[#071b4e]">{year}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="mb-3 text-sm font-extrabold text-[#071b4e]">
                    التقنيات المستخدمة
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5 text-xs font-extrabold text-[#075dc7]"
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
                    className="mt-6 flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#075dc7] px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-blue-900/15 transition hover:-translate-y-0.5 hover:bg-[#064fa8] lg:mt-auto"
                  >
                    <span>زيارة المشروع</span>
                    <ExternalLink size={14} />
                  </Link>
                )}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};
