import { GraduationCap, Rocket, RefreshCw, Headset, CheckCircle2 } from "lucide-react";

const benefits = [
  {
    icon: GraduationCap,
    title: "مدربون خبراء",
    desc: "تعلم من أشخاص يمارسون المهنة فعلياً في شركات تقنية كبرى.",
  },
  {
    icon: Rocket,
    title: "منهجية عملية",
    desc: "نركز على التطبيق العملي وبناء مشاريع حقيقية من اليوم الأول.",
  },
  {
    icon: RefreshCw,
    title: "تحديثات دورية",
    desc: "مناهجنا يتم تحديثها أسبوعياً لتواكب سرعة التطور التقني.",
  },
  {
    icon: Headset,
    title: "دعم فني مستمر",
    desc: "فريقنا معك في كل خطوة للإجابة على تساؤلاتك البرمجية والمهنية.",
  },
];

export const WhyUs = () => (
  <section className="py-20 bg-[#0F172A] text-white overflow-hidden" dir="rtl">
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        
        {/* الجزء النصي (يمين) */}
        <div className="flex-1 space-y-6 text-center lg:text-right">
          <span className="text-[#FF8C42] text-sm font-bold tracking-widest uppercase">لماذا يختارنا الطلاب؟</span>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            أكثر من مجرد دورات، نحن نبني <br />
            <span className="text-[#FF8C42]">مسارك المهني</span>
          </h2>
          <p className="text-gray-400 leading-relaxed max-w-lg mx-auto lg:mx-0">
            في أكاديمية مسار، نؤمن أن التعليم هو البداية فقط. هدفنا النهائي هو رؤيتك تبني مشروعك الخاص أو تحصل على وظيفة أحلامك.
          </p>

          <ul className="space-y-4 pt-4 inline-block text-right">
            {[
              "الوصول إلى مجتمع خريجين حصري",
              "جلسات توجيه مهني One-to-One",
              "أولوية التوظيف في الشركات الشريكة",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-[#FF8C42] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* المربعات الأربعة */}
        <div className="flex-1 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="p-8 bg-[#162033] rounded-3xl flex flex-col items-start text-right transition-all duration-300 hover:bg-[#1E293B] border border-white/5 hover:border-[#FF8C42]/30 shadow-lg"
              >
                <b.icon className="w-10 h-10 text-[#FF8C42] mb-6" strokeWidth={1.5} />
                <h3 className="text-lg font-bold mb-3">{b.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);