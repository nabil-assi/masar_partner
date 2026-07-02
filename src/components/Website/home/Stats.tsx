import { Folder, Users, Code, Trophy } from "lucide-react";

const stats = [
  {
    number: "+50",
    title: "مشروعاً رقمياً",
    desc: "نفذناها باحترافية في مختلف القطاعات.",
    icon: Folder,
  },
  {
    number: "+30",
    title: "عميلاً",
    desc: "من شركات ومؤسسات محلية وإقليمية.",
    icon: Users,
  },
  {
    number: "+15",
    title: "خدمة وحلاً تقنياً",
    desc: "نقدمها لتلبية احتياجات الأعمال المتنوعة.",
    icon: Code,
  },
  {
    number: "+98%",
    title: "فريق متخصص",
    desc: "من الخبراء في مجالات متعددة لتقديم أفضل النتائج.",
    icon: Trophy,
  },
];

export const  Stats = () => {
  return (
    <section className="relative    overflow-hidden" dir="ltr">
      {/* زخرفة الخلفية */}
      <div
        className="absolute top-8 right-8 w-28 h-28 opacity-60 pointer-events-none hidden sm:block"
        style={{
          backgroundImage: "radial-gradient(#c7d9f0 1.6px, transparent 1.6px)",
          backgroundSize: "15px 15px",
        }}
      />
      <div className="absolute -top-24 -left-20 w-[360px] h-[360px] bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute -bottom-28 -right-16 w-[320px] h-[320px] bg-slate-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* العنوان العلوي */}
        <div className="flex justify-center items-center gap-2 mb-6 text-[#00116e] font-bold">
          <span className="w-2 h-2 rounded-full bg-[#0047AB]"></span>
          <span className="text-sm tracking-wide">
            نتائج ملموسة وثقة مستمرة
          </span>
          <span className="w-2 h-2 rounded-full bg-[#0047AB]"></span>
        </div>

        <h2 className="text-4xl lg:text-5xl pb-5 font-bold text-[#00116e] mb-4">
          نحو تأثير رقمي متجدد
        </h2>
        <p className="text-gray-500 mb-16 max-w-xl mx-auto leading-relaxed">
          نفخر بما حققناه مع عملائنا وشركائنا، ونسعى دائماً لتقديم الأفضل وبناء
          شركات طويلة الأمد.
        </p>

        {/* شبكة الإحصائيات - مطابقة للصورة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-[2rem] border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* الأيقونة في دائرة خفيفة */}
              <div className="mb-6 p-4 bg-blue-50/50 rounded-2xl">
                <stat.icon
                  className="text-[#0047AB]"
                  size={32}
                  strokeWidth={1.5}
                />
              </div>

              <div className="text-5xl font-bold text-[#00116e] mb-2">
                {stat.number}
              </div>
              <h3 className="text-xl font-bold text-[#00116e] mb-4">
                {stat.title}
              </h3>

              {/* الخط الصغير الفاصل */}
              <div className="w-10 h-1 bg-blue-500 rounded-full mb-6"></div>

              <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
