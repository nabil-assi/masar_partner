import {
  LineChart,
  Users,
  Lightbulb,
  Headphones,
  Rocket,
  Settings,
} from "lucide-react";

const features = [
  {
    icon: LineChart,
    title: "نتائج ملموسة",
    description:
      "تركيزنا منصب على تحقيق نتائج حقيقية تؤثر في أرباحك ونمو شركتك.",
  },
  {
    icon: Users,
    title: "العميل أولًا",
    description:
      "نجاحك هو أولويتنا. نعمل معك خطوة بخطوة لفهم أهدافك وتحقيقها.",
  },
  {
    icon: Lightbulb,
    title: "حلول مبتكرة",
    description:
      "نساير دائمًا بخطوة في العالم الرقمي المتطور لنقدم حلولًا منظورة تنمي أعمالك.",
  },
  {
    icon: Headphones,
    title: "دعم 24/7",
    description:
      "نحن بجانبك دائمًا. فريق الدعم الفني متاح على مدار الساعة لمساعدتك.",
  },
  {
    icon: Rocket,
    title: "سرعة في التنفيذ",
    description:
      "ندرك أن الوقت ثمين. عملياتنا المنظمة تضمن تسليم مشاريعك في المواعيد وبأعلى جودة.",
  },
  {
    icon: Settings,
    title: "خدمات متكاملة",
    description:
      "من تصميم الهوية والبرمجة حتى التسويق، نقدم لك كافة الحلول الرقمية في مكان واحد.",
  },
];

export const WhyMasar = () => {
  return (
    <section className="py-16 lg:py-20 px-6  " dir="rtl">
      <div className="container mx-auto max-w-6xl text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#0047AB] px-4 py-1.5 rounded-full text-xs font-bold mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0047AB]" />
          لماذا تختارنا
        </span>

        {/* العنوان */}
        <h2 className="text-2xl lg:text-4xl font-extrabold text-[#011856] mb-4">
          ما الذي يميزنا؟
        </h2>

        {/* الوصف */}
        <p className="text-gray-500 text-sm lg:text-base max-w-2xl mx-auto mb-12">
          نجمع بين الخبرة والاهتمام باحتياجاتك لنحقق نتائج استثنائية.
        </p>

        {/* الشبكة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-right">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-6 lg:p-8"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5 text-[#0047AB]" />
                </div>

                <h3 className="text-base lg:text-lg font-bold text-[#011856] mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};