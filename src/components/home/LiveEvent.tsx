import Image from "next/image";

export const LiveEvent = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div 
          className="rounded-[2rem] p-6 md:p-16 flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16"
          style={{
            background: "linear-gradient(135deg, #FF6D00 0%, #222A3D 100%)"
          }}
        >
          {/* Left Column (Image) - تحسين التجاوب */}
          <div className="w-full lg:flex-1 max-w-lg">
            <div className="relative aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/event.png"
                alt="ورشة بناء وتطوير الأنظمة"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column (Content) */}
          <div className="w-full lg:flex-1 text-center lg:text-right text-white space-y-6">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm">
                فعالية مباشرة
              </span>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                ورشة بناء و تطوير الأنظمة<br />البرمجية المتكاملة
              </h2>
              <p className="text-gray-100 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                انضم إلينا في ورشة عمل مكثفة لمدة 3 أيام لتعلم كيفية بناء هندسة برمجية قابلة للتوسع بمشاريع حقيقية.
              </p>
            </div>

            {/* Countdown - توسيط ذكي */}
            <div className="flex justify-center lg:justify-start gap-3">
              {[
                { val: "02", label: "Days" },
                { val: "14", label: "Hours" },
                { val: "45", label: "Mins" },
              ].map((item, i) => (
                <div key={i} className="bg-black/20 backdrop-blur-md rounded-2xl py-3 px-4 w-[75px] md:w-[80px] text-center border border-white/10">
                  <div className="text-2xl md:text-3xl font-bold">{item.val}</div>
                  <div className="text-[9px] uppercase text-gray-300">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="pt-2">
              <button className="bg-white text-[#FF6D00] font-bold px-8 py-3.5 rounded-xl transition-all hover:scale-105 shadow-xl">
                احجز مقعدك الان
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};