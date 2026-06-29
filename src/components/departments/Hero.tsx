import { Search } from "lucide-react";

export const Hero = () => {
  const tags = ["البرمجة", "التصميم", "الذكاء الاصطناعي", "العمل الحر"];

  return (
    <section
      // min-h-screen تجعل الارتفاع يساوي ارتفاع الشاشة بالضبط مهما كان الجهاز
      className="w-full min-h-screen flex items-center justify-center overflow-hidden relative"
      style={{
        background:
          "radial-gradient(circle at center, rgba(109, 59, 21, 0.4) 0%, rgba(28, 33, 52, 0.6) 50%, #0F172A 100%)",
      }}
    >
      {/* الحاوية: w-full px-6 تضمن توزيع المحتوى دون التصاق بالحواف */}
      <div className="w-full px-6 flex flex-col items-center text-center relative z-10">
        
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-10 md:mb-12 leading-tight">
          استثمر في <span className="text-[#FF6D00]">مستقبلك</span>
        </h1>

        {/* شريط البحث: متجاوب بالكامل */}
        <div className="w-full max-w-2xl bg-[#222A3D]/70 backdrop-blur-md p-2 md:p-3 rounded-2xl flex flex-row-reverse items-center shadow-2xl border border-white/5 transition-all">
          <div className="flex-1 flex items-center px-4">
            <input
              type="text"
              placeholder="ابحث عن دورتك القادمة..."
              className="w-full bg-transparent border-none outline-none text-white text-right placeholder-gray-500 text-base py-2"
              dir="rtl"
            />
            <Search className="text-gray-400 mr-2 shrink-0" size={22} />
          </div>
          <button className="bg-[#FF6D00] hover:bg-[#FF8533] text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shrink-0">
            بحث
          </button>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {tags.map((tag, index) => (
            <button
              key={index}
              className="px-6 py-2 bg-[#131B2E]/60 text-gray-300 hover:text-white rounded-full text-sm transition-all duration-300 border border-white/5"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};