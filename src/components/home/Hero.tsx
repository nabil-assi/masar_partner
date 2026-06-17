import Image from "next/image";
import { Search, BookOpen } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative w-full py-16 px-6 md:py-[84px] md:px-[84px] bg-gradient-to-br from-[#6D3B15] via-[#1C2134] to-[#0F172A] overflow-hidden rounded-b-[40px]">
      {" "}
      <div className="w-full max-w-7xl mx-auto  pt-25 flex flex-col lg:flex-row items-center gap-12">
        {/* الجزء الأيسر: الصورة (مخفية في الجوال، ظاهرة في الشاشات الكبيرة) */}
        <div className="hidden lg:flex flex-1 w-full max-w-[512px] relative">
          <div className="relative aspect-square w-full">
            <Image
              src="/images/hero.png"
              alt="Hero Illustration"
              fill
              className="object-contain"
              priority
              unoptimized
            />
          </div>
        </div>
        {/* الجزء الأيمن: النص والبحث */}
        <div className="flex-1 space-y-8 text-center lg:text-right z-10">
          <div className="inline-flex items-center justify-center rounded-full text-[14px] font-medium text-white px-6 py-2 shadow-lg bg-gradient-to-r from-blue-500/40 via-blue-600/30 to-orange-500/40 border border-white/10 backdrop-blur-sm">
            <span className="whitespace-nowrap">
              انضم إلى أكثر من 10,000 طالب 🚀
            </span>
          </div>

          <h1 className="text-4xl md:text-[60px] font-bold text-white leading-tight font-almarai">
            ابدأ رحلتك اليوم نحو{" "}
            <span className="text-[#C25101]">التميز الرقمي</span> مع أكاديمية
            مسار
          </h1>

          {/* حقل البحث */}
          <div className="relative w-full max-w-[512px] mx-auto lg:mx-0">
            <input
              type="text"
              placeholder="ابحث عن دورة أو مهارة..."
              className="w-full bg-[#1e293b] text-white py-4 pr-6 pl-12 rounded-[12px] border border-white/10 focus:outline-none focus:border-blue-500 transition-all"
            />
            <Search className="absolute left-4 top-4 text-gray-400" size={20} />
          </div>

          {/* الأزرار */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-[12px] font-bold transition-all shadow-lg shadow-blue-900/20">
              ابدأ التعلم
            </button>
            <button className="flex items-center justify-center gap-2 border border-white/10 hover:bg-white/5 text-white px-8 py-4 rounded-[12px] transition-all">
              <BookOpen size={20} />
              استعراض الدورات
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
