import Image from "next/image";
import { Search, BookOpen } from "lucide-react";

export const Hero = () => {
  return (
    // أضفنا pt-24 لتفادي التداخل مع الـ Navbar
    <section className="relative w-full min-h-screen flex items-center bg-gradient-to-br from-[#6D3B15] via-[#1C2134] to-[#0F172A] overflow-hidden pt-24">
      <div className="w-full h-full flex flex-col lg:flex-row items-center gap-12 px-6 md:px-16">
      

        {/* الجزء الأيمن: النص، البحث، والأزرار */}
        <div className="flex-1 space-y-8 text-center lg:text-right z-10">
          <div
            className="inline-flex items-center justify-center rounded-2xl text-[14px] font-medium text-white px-6 py-2 shadow-lg backdrop-blur-sm border border-white/10"
            style={{
              background:
                "linear-gradient(90deg, #1E3151 0%, #618CB5 52%, #E87241 100%)",
            }}
          >
            <span className="whitespace-nowrap font-almarai">
              انضم إلى أكثر من 10,000 طالب 🚀
            </span>
          </div>

          <h1 className="text-4xl md:text-[60px] font-bold text-white leading-tight font-almarai">
            ابدأ رحلتك اليوم نحو{" "}
            <span className="text-[#C25101]">التميز الرقمي</span> مع أكاديمية
            مسار
          </h1>

          {/* حقل البحث */}
          <div className="relative w-full max-w-[512px] mx-auto lg:mr-0">
            {" "}
            {/* تم تعديل mx-auto لـ lg:mr-0 ليصبح جهة اليمين */}
            <Search
              className="absolute right-4 top-4 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="ابحث عن دورة أو مهارة"
              className="w-full bg-[#1e293b] font-almarai text-right text-white py-4 pr-12 pl-4 rounded-[12px] border border-white/10 focus:outline-none focus:border-blue-500 transition-all"
            />
          </div>

          {/* الأزرار */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {" "}
            {/* تم التأكد من justify-end هنا */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-[12px] font-bold transition-all font-almarai shadow-lg shadow-blue-900/20">
              ابدأ التعلم
            </button>
            <a
              href="/departments#target-component"
              className="flex font-almarai items-center justify-center gap-2 border border-white/10 hover:bg-white/5 text-white px-8 py-4 rounded-[12px] transition-all"
            >
              <BookOpen size={20} />
              استعراض الدورات
            </a>
          </div>
        </div>


          {/* الجزء الأيسر: الصورة */}
        <div className="hidden lg:flex flex-1 w-full justify-center">
          <div className="relative aspect-square w-full max-w-[480px]">
            <Image
              src="/images/hero.webp"
              alt="Hero Illustration"
              fill
              className="object-contain"
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
};
