import { Users, Lightbulb, Star } from "lucide-react";

export const CoreValues = () => {
  const values = [
    {
      icon: Users,
      title: "مجتمع واحد",
      desc: "نؤمن بقوة التعاون وتبادل الخبرات بين الطلاب والموجهين كجزء من نجاحنا.",
    },
    {
      icon: Lightbulb,
      title: "الابتكار المستمر",
      desc: "نحدث مناهجنا باستمرار لنواكب أحدث المتغيرات في سوق العمل والتقنيات العالمية.",
    },
    {
      icon: Star,
      title: "الجودة والتميز",
      desc: "نلتزم بأعلى معايير الجودة في المناهج التعليمية والخدمات التي نقدمها.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#020617] text-white ">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-16 font-almarai">قيمنا الجوهرية</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {values.map((val, i) => (
            <div
              key={i}
              className="bg-[#111827] p-8 md:p-10 rounded-3xl border border-white/5 hover:border-[#FFB692]/30 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-[#FFB692]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <val.icon className="text-[#FFB692]" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 font-almarai">{val.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base font-almarai">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};