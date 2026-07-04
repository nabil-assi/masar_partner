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
      className="relative overflow-hidden bg-gradient-to-br from-[#0A1A5C] via-[#0B1F63] to-[#050F3D] pt-8 pb-32"
      dir="rtl"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Breadcrumb */}
        <div className="flex justify-end items-center gap-2 text-sm text-blue-200/70 mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            الرئيسية
          </Link>
          <span className="text-blue-300/40">•</span>
          <Link
            href="/services"
            className="hover:text-white transition-colors"
          >
            الخدمات
          </Link>
          <span className="text-blue-300/40">•</span>
          <span className="text-white font-medium">{breadcrumbLabel}</span>
        </div>

        <div className="max-w-3xl mr-auto">
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
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#0047AB] hover:bg-[#003a8c] transition-colors text-white font-bold px-6 py-3 rounded-xl text-sm">
              احجز استشارة مجانية
            </button>
            <button className="bg-white/10 hover:bg-white/20 border border-white/20 transition-colors text-white font-bold px-6 py-3 rounded-xl text-sm">
              اطلب عرض سعر
            </button>
          </div>
        </div>
      </div>

      {/* شريط الإحصائيات */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl grid grid-cols-3 divide-x divide-x-reverse divide-gray-100 py-8 translate-y-1/2">
            {stats.map((stat, i) => (
              <div key={i} className="text-center px-4">
                <div className="text-2xl lg:text-3xl font-extrabold text-[#011856] mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-xs lg:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};