"use client";

import Image from "next/image";
import { Monitor, Smartphone, GraduationCap, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "منصة إدارة أعمال",
    category: "أتمتة العمليات • ERPNext",
    desc: "حل متكامل لإدارة العمليات والمبيعات والمخزون.",
    icon: Monitor,
    image: "/Website/images/project-2.webp",
  },
  {
    title: "تطبيق خدمات ذكي",
    category: "تطبيق موبايل • UI/UX",
    desc: "تجربة سلسة لخدمات يومية بواجهة عصرية.",
    icon: Smartphone,
    image: "/Website/images/project-1.webp",
  },
  {
    title: "منصة تعليمية رقمية",
    category: "منصة ويب • نظام اشتراكات",
    desc: "منصة تعليمية تفاعلية لإدارة الدورات والمحتوى.",
    icon: GraduationCap,
    image: "/Website/images/project-1.webp",
  },
];

export const Portfolio = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const MainIcon = projects[0].icon;

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden" dir="rtl">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleFadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fromLeftRTL {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .portfolio-header { opacity: 0; }
        .portfolio-header.in-view { animation: fadeUp 0.6s ease-out forwards; }

        .portfolio-main { opacity: 0; }
        .portfolio-main.in-view {
          animation: scaleFadeIn 0.7s ease-out forwards;
          animation-delay: 0.15s;
        }

        .portfolio-side { opacity: 0; }
        .portfolio-side.in-view {
          animation: fromLeftRTL 0.6s ease-out forwards;
        }
        .portfolio-side:nth-child(1).in-view { animation-delay: 0.3s; }
        .portfolio-side:nth-child(2).in-view { animation-delay: 0.45s; }

        .portfolio-cta { opacity: 0; }
        .portfolio-cta.in-view {
          animation: fadeUp 0.6s ease-out forwards;
          animation-delay: 0.6s;
        }

        .project-image {
          transition: transform 0.5s ease;
        }
        .project-card:hover .project-image {
          transform: scale(1.06);
        }
      `}</style>

      {/* زخرفة خلفية */}
      <div
        className="absolute top-6 left-6 w-28 h-28 opacity-60 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#cbd9ee 1.5px, transparent 1.5px)",
          backgroundSize: "16px 16px",
        }}
      />
      <div className="absolute -top-16 -right-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute -bottom-24 -left-20 w-96 h-96 bg-slate-50 rounded-full blur-3xl opacity-70 pointer-events-none" />

      <div ref={sectionRef} className="website-container relative z-10">
        {/* العنوان */}
        <div className={`portfolio-header ${isVisible ? "in-view" : ""} text-center mb-16`}>
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#0047AB] px-4 py-1.5 rounded-full text-sm font-extrabold mb-4">
            <Star size={18} className=" text-[#0047AB]" />
            مشاريع مختارة
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#00116e] mb-4">
            أعمالنا ومشاريعنا
          </h2>
          <p className="text-gray-500 text-lg">
            نماذج من حلول رقمية صممناها وطوّرناها لتصنع أثرًا واضحًا.
          </p>
        </div>

        {/* الشبكة */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 items-start">
          {/* المشاريع الصغيرة */}
          <div className="flex flex-col gap-8 h-full">
            {projects.slice(1).map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className={`portfolio-side project-card ${isVisible ? "in-view" : ""} bg-white p-6 rounded-[2rem] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-xl transition-shadow duration-300 flex gap-4 items-start flex-1`}
                >
                  <div className="flex-1 text-right">
                    <h3 className="text-xl font-bold text-[#0F172A] mb-7">
                      {p.title}
                    </h3>
                    <p className="text-[#0047AB] text-sm font-bold mb-7">
                      {p.category}
                    </p>
                    <p className="text-gray-500 text-sm mb-4">{p.desc}</p>
                    <div className="p-3 bg-blue-50 w-fit rounded-xl">
                      <Icon className="text-[#0047AB]" size={20} />
                    </div>
                  </div>
                  <div className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] shrink-0 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(min-width: 640px) 200px, 150px"
                      className="project-image object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* المشروع الرئيسي */}
          <div
            className={`portfolio-main project-card ${isVisible ? "in-view" : ""} bg-white p-6 rounded-[2rem] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-xl transition-shadow duration-300 h-full`}
          >
            <div className="relative w-full h-[300px] sm:h-[400px] mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50">
              <Image
                src={projects[0].image}
                alt={projects[0].title}
                fill
                sizes="(min-width: 1024px) 58vw, calc(100vw - 32px)"
                className="project-image object-cover"
              />
            </div>

            <div className="flex gap-4 items-start">
              <div className="text-right flex-1">
                <h3 className="text-2xl font-bold text-[#0F172A] mb-2">
                  {projects[0].title}
                </h3>
                <p className="text-[#0047AB] text-sm font-bold mb-2">
                  {projects[0].category}
                </p>
                <p className="text-gray-500">{projects[0].desc}</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-xl shrink-0">
                <MainIcon className="text-[#0047AB]" size={26} />
              </div>
            </div>
          </div>
        </div>

        {/* زر عرض الكل */}
        <div className={`portfolio-cta ${isVisible ? "in-view" : ""} text-center mt-16`}>
          <button className="px-8 py-4 border border-[#0047AB] text-[#0047AB] rounded-xl font-bold hover:bg-[#0047AB] hover:text-white transition-all inline-flex items-center gap-2 mx-auto">
            استعرض جميع أعمالنا
            <span>←</span>
          </button>
        </div>
      </div>
    </section>
  );
};