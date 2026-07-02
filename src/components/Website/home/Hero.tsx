import { Star } from "lucide-react";
import Image from "next/image";
import { Calendar } from "lucide-react"; // تأكد من تثبيت مكتبة lucide-react
export const Hero = () => {
  return (
    <section className="relative overflow-hidden ">
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
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10  lg:px-12 items-center relative z-10">
        {/* قسم النص - يأخذ 6 أعمدة في الشاشات الكبيرة */}
        <div className="lg:col-span-6 space-y-8  " dir="rtl">
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#0047AB] px-4 py-1.5 rounded-full text-sm font-extrabold mb-4">
            <Star size={18} className=" text-[#0047AB]" />
            شريكك الرقمي
          </span>
          <h1 className="text-3xl lg:text-5xl font-bold text-[#011856] leading-[1.2]">
            نبني حلولاً رقمية متكاملة تدفع أعمالك نحو النمو.
          </h1>

          <p className="text-gray-500 text-lg lg:text-xl leading-relaxed max-w-lg">
            نساعد الشركات والمؤسسات على تصميم وتطوير وتشغيل حلول رقمية حديثة，
            بأعلى معايير الجودة والكفاءة التقنية.
          </p>

          {/* الأزرار */}
          <div className="flex flex-wrap gap-4 pt-4">
            {/* الزر الأول: تدرج لوني أزرق */}
            <button className="bg-gradient-to-r from-[#0047AB] to-[#0055FF] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:opacity-90 transition-all shadow-lg">
              احجز استشارة مجانية
              <Calendar className="w-5 h-5" />
            </button>

            {/* الزر الثاني: إطار أزرق فاتح */}
            <button className="flex items-center gap-3 border-1 border-[#0047AB] px-8 py-4 rounded-xl text-[#0047AB] font-bold hover:bg-blue-50 transition-all hover:shadow-lg cursor-pointer hover:-translate-y-1">
              استعرض أعمالنا
              <Calendar className="w-5 h-5" />
            </button>
          </div>

          {/* النقاط الثلاث - أكبر وموزعة بشكل أوضح */}
          <div className="flex flex-col sm:flex-row gap-6 pt-3">
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
            src="/Website/images/hero-image-2.png"
            alt="لوحة تحكم منصة مسار"
            fill
            className="object-contain   scale-130"
            priority
          />
        </div>
      </div>
    </section>
  );
};
