"use client";

import { Folder, Users, Code, Trophy } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    number: "+50",
    title: "مشروعاً رقمياً",
    desc: "نفذناها باحترافية في مختلف القطاعات.",
    icon: Folder,
  },
  {
    number: "+30",
    title: "عميلاً",
    desc: "من شركات ومؤسسات محلية وإقليمية.",
    icon: Users,
  },
  {
    number: "+15",
    title: "خدمة وحلاً تقنياً",
    desc: "نقدمها لتلبية احتياجات الأعمال المتنوعة.",
    icon: Code,
  },
  {
    number: "+98%",
    title: "فريق متخصص",
    desc: "من الخبراء في مجالات متعددة لتقديم أفضل النتائج.",
    icon: Trophy,
  },
];

const parseNumber = (value: string) => {
  const match = value.match(/[\d.]+/);
  const num = match ? parseFloat(match[0]) : 0;
  const prefix = value.split(match?.[0] ?? "")[0] ?? "";
  const suffix = value.split(match?.[0] ?? "")[1] ?? "";
  return { num, prefix, suffix };
};

const CountUpNumber = ({ value, start }: { value: string; start: boolean }) => {
  const [display, setDisplay] = useState(0);
  const { num, prefix, suffix } = parseNumber(value);

  useEffect(() => {
    if (!start) return;
    const duration = 1400;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplay(Math.round(eased * num));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [start, num]);

  return (
    <span>
      {prefix}
      {display}
      {suffix}
    </span>
  );
};

export const Stats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-20 overflow-hidden" dir="ltr">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .stats-header { opacity: 0; }
        .stats-header.in-view { animation: fadeUp 0.6s ease-out forwards; }

        .stats-panel { opacity: 0; }
        .stats-panel.in-view { animation: fadeUp 0.7s ease-out forwards; animation-delay: 0.15s; }

        .stat-item { opacity: 0; }
        .stat-item.in-view { animation: fadeUp 0.5s ease-out forwards; }
        .stat-item:nth-child(1).in-view { animation-delay: 0.35s; }
        .stat-item:nth-child(2).in-view { animation-delay: 0.5s; }
        .stat-item:nth-child(3).in-view { animation-delay: 0.65s; }
        .stat-item:nth-child(4).in-view { animation-delay: 0.8s; }
      `}</style>

      {/* زخرفة الخلفية */}
      <div className="absolute -top-24 -left-20 w-[360px] h-[360px] bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute -bottom-28 -right-16 w-[320px] h-[320px] bg-slate-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div ref={sectionRef} className="website-container relative z-10">
       
        {/* البانل الموحد */}
        <div
          className={`stats-panel ${isVisible ? "in-view" : ""} relative bg-[#00116e] rounded-[2.5rem] px-6 py-14 sm:px-12 overflow-hidden`}
        >
          {/* نقاط زخرفية داخل البانل الغامق */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#ffffff 1.4px, transparent 1.4px)",
              backgroundSize: "18px 18px",
            }}
          />

          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-y-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`stat-item ${isVisible ? "in-view" : ""} relative flex flex-col items-center text-center px-4 lg:border-l lg:border-white/10 lg:first:border-l-0`}
              >
                <div className="mb-4 w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                  <stat.icon className="text-white" size={26} strokeWidth={1.5} />
                </div>

                <div className="text-4xl sm:text-5xl font-bold text-white mb-1 tabular-nums">
                  <CountUpNumber value={stat.number} start={isVisible} />
                </div>
                <h3 className="text-sm font-bold text-blue-200 mb-2">
                  {stat.title}
                </h3>
                <p className="text-blue-100/60 text-xs leading-relaxed max-w-[160px] hidden sm:block">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};