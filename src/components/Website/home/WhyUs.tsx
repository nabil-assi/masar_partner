"use client";

import { Target, Layers, Headset, TrendingUp } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    title: "حلول مخصصة",
    desc: "تصمم حلولاً تناسب طبيعة عملك وأهدافه",
    icon: Target,
  },
  {
    title: "دعم مستمر",
    desc: "نرافقك بعد الإطلاق بالتحسين والتطوير",
    icon: Headset,
  },
  {
    title: "رؤية متكاملة",
    desc: "تطوير وتصميم وتسويق ضمن منظومة واحدة",
    icon: Layers,
  },
  {
    title: "جودة قابلة للنمو",
    desc: "تنفيذ احترافي يوازن بين الأداء والمرونة",
    icon: TrendingUp,
  },
];

export const WhyUs = () => {
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
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden" dir="ltr">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fromRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fromLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleFadeIn {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .why-title { opacity: 0; }
        .why-title.in-view { animation: fadeUp 0.6s ease-out forwards; }

        .why-card { opacity: 0; }
        .why-card.in-view { animation-fill-mode: forwards; animation-duration: 0.7s; animation-timing-function: ease-out; }
        .why-card.from-right.in-view { animation-name: fromRight; }
        .why-card.from-left.in-view { animation-name: fromLeft; }
        .why-card:nth-child(1).in-view { animation-delay: 0.1s; }
        .why-card:nth-child(2).in-view { animation-delay: 0.3s; }

        .why-image { opacity: 0; }
        .why-image.in-view {
          animation: scaleFadeIn 0.8s ease-out forwards;
          animation-delay: 0.2s;
        }
        .why-image.in-view .why-image-inner {
          animation: floatSlow 6s ease-in-out infinite;
          animation-delay: 1s;
        }

        .why-cta { opacity: 0; }
        .why-cta.in-view { animation: fadeUp 0.6s ease-out forwards; animation-delay: 0.7s; }
      `}</style>

      <div ref={sectionRef} className="website-container-narrow text-center relative z-10">
        <div className={`why-title ${isVisible ? "in-view" : ""}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">
            لماذا مسار؟
          </h2>
          <p className="text-gray-500 mb-20 text-lg">
            لأن مشروعك يحتاج شريكاً رقمياً يفهم أهدافك.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-x-0 items-center">
          {/* الكروت اليمنى */}
          <div className="space-y-32 lg:ml-[-50px] z-20">
            {features.slice(0, 2).map((f, i) => (
              <div
                key={i}
                className={`why-card from-right ${isVisible ? "in-view" : ""} p-8 bg-white rounded-[2rem] border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.04)] flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all`}
              >
                <div className="mb-4 p-4 bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center">
                  <f.icon className="text-[#0047AB]" size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">
                  {f.title}
                </h3>
                <div className="w-10 h-[2px] bg-[#0047AB] mb-4"></div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex relative w-full items-center justify-center">
            <div
              className={`why-image ${isVisible ? "in-view" : ""} relative w-[500px] h-[500px] rounded-full flex items-center justify-center`}
            >
              <div className="why-image-inner relative w-[90%] h-[90%] rounded-full overflow-hidden">
                <Image
                  src="/Website/images/why-us-image.png"
                  alt="مسار"
                  fill
                  sizes="450px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* الكروت اليسرى */}
          <div className="space-y-32 lg:mr-[-50px] z-20">
            {features.slice(2, 4).map((f, i) => (
              <div
                key={i}
                className={`why-card from-left ${isVisible ? "in-view" : ""} p-8 bg-white rounded-[2rem] border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.04)] flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all`}
              >
                <div className="mb-4 p-4 bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center">
                  <f.icon className="text-[#0047AB]" size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">
                  {f.title}
                </h3>
                <div className="w-10 h-[2px] bg-[#0047AB] mb-4"></div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <button
          className={`why-cta ${isVisible ? "in-view" : ""} mt-20 px-8 py-4 border border-[#0047AB] text-[#0047AB] rounded-xl font-bold hover:bg-[#0047AB] hover:text-white transition-all flex items-center gap-2 mx-auto`}
        >
          ← اكتشف كيف نعمل
        </button>
      </div>
    </section>
  );
};