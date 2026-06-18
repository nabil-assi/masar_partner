import { Search } from "lucide-react";

export const Hero = () => {
  const tags = ["البرمجة", "التصميم", "الذكاء الاصطناعي", "العمل الحر"];

  return (
    <section
      className="pt-24 w-full rounded-3xl h-[450px] md:h-[564px] flex items-center justify-center overflow-hidden relative"
      style={{
        background:
          "radial-gradient(circle at center, rgba(109, 59, 21, 0.4) 0%, rgba(28, 33, 52, 0.6) 50%, #0F172A 100%)",
      }}
    >
      {/* الحاوية الرئيسية - تم ضبط الـ Padding لضمان عدم التصاق العناصر بالحواف */}
      <div className="w-full px-4 md:px-6 max-w-[1437px] flex flex-col items-center text-center relative z-10">
        {/* العنوان الرئيسي - تم ضبط الـ Leading لضمان التباعد بين السطور */}
        <h1 className="text-3xl md:text-6xl font-bold text-white mb-8 md:mb-10 leading-tight">
          استثمر في <span className="text-[#FF6D00]">مستقبلك</span>
        </h1>

        {/* شريط البحث - استخدام flex-row-reverse لضمان بقاء زر البحث يميناً دائماً في التصميم العربي */}
        <div className="w-full max-w-2xl bg-[#222A3D]/70 backdrop-blur-md p-1.5 md:p-2 rounded-2xl flex flex-row-reverse items-center shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)]  transition-all focus-within:border-[#FF935B]/50 hover:bg-[#222A3D]/80 ">
          <div className="flex-1 flex items-center px-2 md:px-4">
            <input
              type="text"
              placeholder="ابحث عن دورتك القادمة..."
              className="flex-1 bg-transparent border-none outline-none text-white text-right placeholder-gray-500 text-sm md:text-base"
              dir="rtl"
            />
            <Search className="text-gray-400 mx-2 md:ml-3 shrink-0" size={20} />
          </div>
          <button className="bg-[#FF6D00] hover:bg-[#FF8533] text-white px-6 md:px-8 py-3 rounded-xl font-bold transition-all shadow-[0_4px_14px_0_rgba(255,109,0,0.39)] shrink-0 text-sm md:text-base">
            بحث
          </button>
        </div>

        {/* شريط الـ Tags - استخدام justify-center يضمن بقاءها متوازنة مهما كان عددها */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-6 md:mt-8">
          {tags.map((tag, index) => (
            <button
              key={index}
              className="px-4 md:px-6 py-2 bg-[#131B2E]/60  text-gray-300 hover:text-white rounded-full text-xs md:text-sm transition-all duration-300"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
