import Image from "next/image";

const features = [
  { title: "تطوير البرمجيات", desc: "من الويب إلى تطبيقات الجوال، تعلم كيف تبني أنظمتك الخاصة.", img: "/images/Programming.png" },
  { title: "الذكاء الاصطناعي", desc: "تعلم الآلة وتحليل البيانات", img: "/images/AI.png" },
  { title: "التصميم الإبداعي", desc: "تصميم تجربة المستخدم والهوية البصرية", img: "/images/Design.png" },
  { title: "احتراف العمل الحر", desc: "أسرار النجاح في Fiverr و Upwork", img: "/images/Freelance.png" },
];

export const Features = () => (
  // 1. استخدام min-h-screen ليغطي ارتفاع الشاشة
  // 2. إزالة container و mx-auto للسماح بالتمدد الكامل
  <section className="relative w-full min-h-screen flex flex-col justify-center py-20 bg-[#0F172A] text-white overflow-hidden">
    
    {/* مساحة المحتوى مع px للتحكم في الحواف */}
    <div className="w-full h-full px-6 md:px-16 flex flex-col justify-center">
      
      {/* العنوان */}
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-4xl font-bold mb-3">استكشف مجالات المستقبل</h2>
        <div className="w-20 h-1 bg-[#C25101] rounded-full"></div>
      </div>

      {/* Grid المعدل - التزمنا بنفس الهيكلية التي صممتها */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto">
        {features.map((f, i) => (
          <div
            key={i}
            className={`relative rounded-3xl overflow-hidden border border-white/10 group ${
              i === 0 ? "md:row-span-2 min-h-[400px]" : "min-h-[250px]"
            } ${i === 3 ? "md:col-span-2" : ""}`}
          >
            <Image
              src={f.img}
              alt={f.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/40 to-transparent" />
            
            <div className="absolute bottom-0 right-0 p-8 flex flex-col items-start text-right">
              <h3 className="text-2xl font-bold mb-2">{f.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed max-w-[80%]">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);