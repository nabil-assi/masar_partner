import { ArrowLeft, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden py-24 sm:py-28 lg:py-24">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes floatImage {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @keyframes blobPulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.06); }
        }

        .hero-fade {
          opacity: 0;
          animation: fadeInUp 0.7s ease-out forwards;
        }
        .hero-fade-1 { animation-delay: 0.05s; }
        .hero-fade-2 { animation-delay: 0.15s; }
        .hero-fade-3 { animation-delay: 0.25s; }
        .hero-fade-4 { animation-delay: 0.35s; }
        .hero-fade-5 { animation-delay: 0.45s; }

        .hero-image-wrap {
          opacity: 0;
          animation: fadeInUp 0.9s ease-out forwards;
          animation-delay: 0.3s;
        }
        
      `}</style>

      <div className="website-container grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="space-y-5 lg:col-span-6" dir="rtl">
          <span className="hero-fade hero-fade-1 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-extrabold text-[#0047AB] shadow-sm">
            <Star size={18} className="text-[#0047AB]" />
            شركة حلول رقمية{" "}
          </span>

          <h1 className="hero-fade hero-fade-2 max-w-3xl text-3xl font-extrabold leading-[1.2] text-[#011856] sm:text-4xl lg:text-5xl">
            نبني حلولاً رقمية متكاملة تدفع أعمالك نحو النمو.
          </h1>

          <p className="hero-fade hero-fade-3 max-w-2xl text-base leading-8 text-gray-600 lg:text-lg">
            نساعد الشركات والمؤسسات على تصميم وتطوير وتشغيل حلول رقمية حديثة،
            بأعلى معايير الجودة والكفاءة التقنية.
          </p>

          <div className="hero-fade hero-fade-4 flex flex-wrap gap-3 pt-2">
            <Link
              href="/contact"
              className="inline-flex min-h-13 items-center gap-3 rounded-xl bg-[#0047AB] px-7 text-sm font-extrabold text-white shadow-lg shadow-blue-900/20 transition hover:bg-[#003D93] hover:scale-[1.03] active:scale-[0.98]"
            >
              ابدأ مشروعك معنا <ArrowLeft className="w-5 h-5" />
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex min-h-13 items-center gap-3 rounded-xl border border-[#0047AB]/20 bg-white px-7 text-sm font-extrabold text-[#0047AB] shadow-sm transition hover:border-[#0047AB]/35 hover:bg-blue-50 hover:scale-[1.03] active:scale-[0.98]"
            >
              استكشف أعمالنا
            </Link>
          </div>

          {/* النقاط الثلاث - أكبر وموزعة بشكل أوضح */}
          <div className="hero-fade hero-fade-5 flex flex-col sm:flex-row gap-6 pt-3">
            <div className="flex items-center gap-3 text-[#011856] font-bold text-sm">
              <span className="text-[#0047AB] text-2xl">●</span> حلول مخصصة
            </div>
            <div className="flex items-center gap-3 text-[#011856] font-bold text-sm">
              <span className="text-[#0047AB] text-2xl">●</span> فريق متعدد
              التخصصات
            </div>
            <div className="flex items-center gap-3 text-[#011856] font-bold text-sm">
              <span className="text-[#0047AB] text-2xl">●</span> دعم وتطوير
              مستمر
            </div>
          </div>
        </div>

        <div className="hero-image-wrap relative hidden h-[340px] w-full md:block lg:col-span-6 lg:h-[500px]">
          <div className="hero-blob absolute inset-x-8 bottom-10 h-24 rounded-[50%] bg-[#0047AB]/12 blur-2xl" />
          <div className="hero-image-float relative h-full w-full">
            <Image
              src="/Website/images/hero.webp"
              alt="لوحة تحكم منصة مسار"
              fill
              sizes="(min-width: 1024px) 50vw, 90vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};