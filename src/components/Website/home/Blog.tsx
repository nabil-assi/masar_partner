"use client";

import Image from "next/image";
import { PenLine, Clock, ArrowLeft, FileText } from "lucide-react";

const posts = [
  {
    category: "ERPNext",
    title: "متى تحتاج شركتك إلى نظام ERP بدل ملفات Excel؟",
    desc: "دليلك لاتخاذ القرار الصحيح في الوقت المناسب.",
    readTime: "4 دقائق قراءة",
    image: "/Website/images/project-1.png",
  },
  {
    category: "أتمتة الأعمال",
    title: "كيف تساعد أتمتة الأعمال في تقليل الوقت والأخطاء؟",
    desc: "حلول ذكية ترفع الكفاءة وتقلل التكاليف التشغيلية.",
    readTime: "5 دقائق قراءة",
    image: "/Website/images/automation.png",
  },
  {
    category: "تطوير المنتجات الرقمية",
    title: "كيف تختار بين موقع تعريفي ومنصة رقمية مخصصة؟",
    desc: "أهم الفروقات لمساعدتك في اختيار الأنسب.",
    readTime: "6 دقائق قراءة",
    image: "/Website/images/project-2.png",
  },
];

export const Blog = () => {
  return (
    <section className="relative overflow-hidden" dir="ltr">
      {/* زخرفة الخلفية */}
      <div
        className="absolute top-10 right-10 w-28 h-28 opacity-70 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#c7d9f0 1.6px, transparent 1.6px)",
          backgroundSize: "15px 15px",
        }}
      />
      <div className="absolute -top-24 -left-28 w-[420px] h-[420px] bg-blue-50 rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute -bottom-32 -right-24 w-[380px] h-[380px] bg-slate-50 rounded-full blur-3xl opacity-70 pointer-events-none" />

      

      <div className="website-container relative z-10">
        {/* البادج العلوي */}
        <div className="flex justify-center mb-5">
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#0047AB] px-4 py-2 rounded-full text-sm font-extrabold">
            <PenLine size={14} />
            المدونة والمعرفة الرقمية
          </span>
        </div>

        {/* العنوان */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            <span className="block text-[#0F172A]">رؤى رقمية تساعدك</span>
            <span className="block text-[#0047AB]">على اتخاذ قرارات أفضل</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            مقالات عملية ونصائح من خبرائنا حول التقنية، إدارة الأعمال والنمو
            الرقمي.
          </p>
        </div>

         <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
          {posts.map((post, i) => (
            <div
              key={i}
              className="bg-white rounded-[1.75rem] border border-gray-100   overflow-hidden   transition-all duration-300"
            >
              <div className="h-[190px] w-full relative bg-gradient-to-br from-slate-50 to-blue-50">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 768px) 33vw, calc(100vw - 32px)"
                  className="object-cover"
                />
              </div>
              <div className="p-7 text-right">
                <span className="inline-block text-xs font-bold text-[#0047AB] bg-blue-50 px-3.5 py-1.5 rounded-full mb-4">
                  {post.category}
                </span>
                <h3 className="text-lg font-bold text-[#0F172A] mb-3 leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm mb-6">{post.desc}</p>
                <div className="flex justify-between items-center text-gray-400 text-sm border-t border-gray-100 pt-4">
                 
                 <button className="w-30 h-9 rounded-full bg-blue-50 flex items-center justify-center text-[#0047AB] hover:bg-[#0047AB] hover:text-white transition-all">
                    <ArrowLeft size={16} />
                    عرض المزيد
                  </button>
                  <div className="flex items-center gap-1.5" dir="rtl">
                    <Clock size={15} /> {post.readTime}
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="inline-flex items-center gap-3 px-10 py-3.5 bg-[#0A1A4A] text-white rounded-full font-medium hover:bg-[#0F2566] transition-all shadow-md shadow-blue-900/20">
            استكشف المدونة
            <FileText size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};
