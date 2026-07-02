"use client";

import { Target, Layers, Headset, TrendingUp } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "حلول مخصصة",
    desc: "تصمم حلولاً تناسب طبيعة عملك وأهدافه",
    icon: Target,
  },
  {
    title: "دعم مستمر",
    desc: "نرافقك بعد الإطلاق بالتحسين والتطوير",
    icon: Headset,
  },
  {
    title: "رؤية متكاملة",
    desc: "تطوير وتصميم وتسويق ضمن منظومة واحدة",
    icon: Layers,
  },
  {
    title: "جودة قابلة للنمو",
    desc: "تنفيذ احترافي يوازن بين الأداء والمرونة",
    icon: TrendingUp,
  },
];

// ترتيب الأيقونات حول المركز يطابق ترتيب الكروت تماماً
// (أعلى-يمين / أعلى-يسار / أسفل-يمين / أسفل-يسار)
// ترتيب الأيقونات حول المركز يطابق ترتيب الكروت تماماً
const centerNodes = [
  { icon: Target, pos: "left-[24%] top-[27%]" },
  { icon: Layers, pos: "left-[76%] top-[27%]" },
  { icon: Headset, pos: "left-[24%] top-[74%]" },
  { icon: TrendingUp, pos: "left-[76%] top-[74%]" },
];
export const WhyUs = () => {
  return (
    <section className="  relative overflow-hidden" dir="ltr">
      {/* زخرفة الخلفية */}
      <div
        className="absolute top-10 right-10 w-28 h-28 opacity-60 pointer-events-none hidden sm:block"
        style={{
          backgroundImage: "radial-gradient(#c7d9f0 1.6px, transparent 1.6px)",
          backgroundSize: "15px 15px",
        }}
      />
      <div className="absolute -top-24 -left-24 w-[340px] h-[340px] bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute -bottom-28 -right-20 w-[300px] h-[300px] bg-slate-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">
          لماذا مسار؟
        </h2>
        <p className="text-gray-500 mb-20 text-lg">
          لأن مشروعك يحتاج شريكاً رقمياً يفهم أهدافك.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-x-0 items-center">
          {" "}
          {/* الكروت اليمنى (لأن RTL، أول عنصر بالمصفوفة يظهر يمين) */}
          <div className="space-y-32   lg:ml-[-50px] z-20">
            {features.slice(0, 2).map((f, i) => (
              <div
                key={i}
                className="p-8  bg-white rounded-[2rem] border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.04)] flex flex-col items-center text-center hover:shadow-xl transition-all"
              >
                {/* الأيقونة في دائرة */}
                <div className="mb-4 p-4 bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center">
                  <f.icon className="text-[#0047AB]" size={32} />
                </div>

                {/* العنوان */}
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">
                  {f.title}
                </h3>

                {/* الخط الفاصل */}
                <div className="w-10 h-[2px] bg-[#0047AB] mb-4"></div>

                {/* الوصف */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="hidden lg:flex relative w-full items-center justify-center">
            {/* هنا جعلنا الدائرة الخارجية تشغل مساحة أكبر */}
            <div className="relative w-[500px] h-[500px] rounded-full    flex items-center justify-center">
              {/* هنا جعلنا الصورة تملأ 90% من مساحة الدائرة */}
              <div className="relative w-[90%] h-[90%] rounded-full overflow-hidden  ">
                <Image
                  src="/Website/images/why-us-image.png"
                  alt="مسار"
                  fill
                  className="object-cover" // استخدم object-cover إذا كنت تريد ملء الدائرة بالكامل
                />
              </div>
            </div>
          </div>
          <div className="space-y-32 lg:mr-[-50px] z-20">
            {features.slice(2, 4).map((f, i) => (
              <div
                key={i}
                className="p-8 bg-white rounded-[2rem] border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.04)] flex flex-col items-center text-center hover:shadow-xl transition-all"
              >
                {/* الأيقونة في دائرة */}
                <div className="mb-4 p-4 bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center">
                  <f.icon className="text-[#0047AB]" size={32} />
                </div>

                {/* العنوان */}
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">
                  {f.title}
                </h3>

                {/* الخط الفاصل */}
                <div className="w-10 h-[2px] bg-[#0047AB] mb-4"></div>

                {/* الوصف */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <button className="mt-20 px-8 py-4 border border-[#0047AB] text-[#0047AB] rounded-xl font-bold hover:bg-[#0047AB] hover:text-white transition-all flex items-center gap-2 mx-auto">
          ← اكتشف كيف نعمل
        </button>
      </div>
    </section>
  );
};
