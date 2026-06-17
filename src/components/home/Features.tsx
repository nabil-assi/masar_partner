  import Image from "next/image";

  const features = [
    {
      title: "تطوير البرمجيات",
      desc: "من الويب إلى تطبيقات الجوال، تعلم كيف تبني أنظمتك الخاصة.",
      img: "/images/Programming.png",
    },
    { title: "الذكاء الاصطناعي", desc: "تعلم الآلة وتحليل البيانات", img: "/images/AI.png" },
    { title: "التصميم الإبداعي", desc: "تصميم تجربة المستخدم والهوية البصرية", img: "/images/Design.png" },
    { title: "احتراف العمل الحر", desc: "أسرار النجاح في Fiverr و Upwork", img: "/images/Freelance.png" },
  ];

  export const Features = () => (
    <section className="py-16 bg-[#0F172A] text-white">
      <div className="container mx-auto px-4">
        {/* العنوان */}
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">استكشف مجالات المستقبل</h2>
          <div className="w-20 h-1 bg-[#C25101] rounded-full"></div>
        </div>

        {/* Grid معدل للموبايل */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <div
              key={i}
              className={`relative rounded-3xl overflow-hidden border border-white/10 ${
                i === 0 ? "md:row-span-2 min-h-[350px]" : "min-h-[250px]"
              } ${i === 3 ? "md:col-span-2" : ""}`}
            >
              <Image
                src={f.img}
                alt={f.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/95 via-[#0F172A]/50 to-transparent" />
              
              <div className="absolute bottom-0 right-0 p-6 flex flex-col items-start text-right">
                <h3 className="text-xl font-bold mb-1">{f.title}</h3>
                <p className="text-gray-300 text-xs leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );