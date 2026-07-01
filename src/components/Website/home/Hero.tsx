import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* زخرفة الخلفية */}
      <div
        className="absolute top-8 right-10 w-28 h-28 opacity-60 pointer-events-none hidden sm:block"
        style={{
          backgroundImage: "radial-gradient(#c7d9f0 1.6px, transparent 1.6px)",
          backgroundSize: "15px 15px",
        }}
      />
      <div className="absolute -top-24 -left-24 w-[340px] h-[340px] bg-blue-50 rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute -bottom-28 -right-20 w-[300px] h-[300px] bg-slate-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 py-20 px-6 lg:px-12 items-center relative z-10">
        {/* قسم النص - يأخذ 6 أعمدة في الشاشات الكبيرة */}
        <div className="lg:col-span-6 space-y-8" dir="rtl">
          <h1 className="text-4xl lg:text-6xl font-bold text-[#011856] leading-[1.2]">
            نبني حلولاً رقمية متكاملة تدفع أعمالك نحو النمو.
          </h1>

          <p className="text-gray-500 text-lg lg:text-xl leading-relaxed max-w-lg">
            نساعد الشركات والمؤسسات على تصميم وتطوير وتشغيل حلول رقمية حديثة،
            بأعلى معايير الجودة والكفاءة التقنية.
          </p>

          {/* الأزرار */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-[#0047AB] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#003580] transition-all shadow-lg shadow-blue-900/20">
              احجز استشارة مجانية
            </button>
            <button className="flex items-center gap-2 border border-gray-200 px-8 py-4 rounded-xl text-[#0F172A] font-bold hover:bg-gray-50 transition-all">
              استعرض أعمالنا
            </button>
          </div>

          {/* النقاط الثلاث - أكبر وموزعة بشكل أوضح */}
          <div className="flex flex-col sm:flex-row gap-6 pt-12">
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

        {/* قسم الصورة - يأخذ 6 أعمدة في الشاشات الكبيرة مع حيز أكبر */}
        <div className="hidden md:block lg:col-span-6 relative w-full h-[400px] sm:h-[500px] lg:h-[650px]">
          {" "}
          <Image
            src="/Website/images/hero-image.png"
            alt="لوحة تحكم منصة مسار"
            fill
            className="object-contain   scale-115"
            priority
          />
        </div>
      </div>
    </section>
  );
};
