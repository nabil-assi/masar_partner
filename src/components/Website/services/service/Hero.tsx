import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface HeroTitle {
  line1: string;
  line2Normal: string;
  line2Highlight: string;
}

interface HeroProps {
  breadcrumbLabel: string;
  heroTitle: HeroTitle;
  heroDescription: string;
  stats: { value: string; label: string }[];
}

export const Hero = ({
  breadcrumbLabel,
  heroTitle,
  heroDescription,
  stats,
}: HeroProps) => {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-[#0A1A5C] via-[#0B1F63] to-[#050F3D] pt-30 pb-24 text-right"
      dir="rtl"
    >
      <div className="container mx-auto px-6 pt-10 relative z-10">
        {/* Breadcrumb */}
        <div className="flex justify-start items-center gap-2 text-sm text-blue-200/70 mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            الرئيسية
          </Link>
          <span className="text-blue-300/40">•</span>
          <Link href="/services" className="hover:text-white transition-colors">
            الخدمات
          </Link>
          <span className="text-blue-300/40">•</span>
          <span className="text-white font-medium">{breadcrumbLabel}</span>
        </div>

        {/* Content Container */}
        <div className="max-w-3xl mr-0">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-blue-100 px-4 py-1.5 rounded-full text-xs font-bold mb-5">
            <ArrowUpRight size={14} />
            خدمات مسار
          </span>

          {/* العنوان */}
          <h1 className="text-3xl lg:text-5xl font-extrabold leading-[1.4] mb-5 text-white">
            {heroTitle.line1} <br />
            <span className="text-white">{heroTitle.line2Normal} </span>
            <span className="text-[#5CA8F1]">{heroTitle.line2Highlight}</span>
          </h1>

          {/* الوصف */}
          <p className="text-blue-100/80 text-sm lg:text-base leading-relaxed mb-8 max-w-xl">
            {heroDescription}
          </p>

          {/* الأزرار */}
          <div className="flex flex-wrap gap-4 mb-16 justify-start">
            <button className="bg-[#0047AB] hover:bg-[#003a8c] transition-colors text-white font-bold px-6 py-3 rounded-xl text-sm">
              احجز استشارة مجانية
            </button>
            <button className="bg-white/10 hover:bg-white/20 border border-white/20 transition-colors text-white font-bold px-6 py-3 rounded-xl text-sm">
              اطلب عرض سعر
            </button>
          </div>
        </div>

         
      </div>

      {/* القوس الأبيض بالأسفل */}
      <div className="absolute bottom-0 left-0 w-full leading-[0] z-10">
        <svg
          className="w-full h-[60px] lg:h-[90px]"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,100 L0,100 C480,0 960,0 1440,100 L1440,100 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};