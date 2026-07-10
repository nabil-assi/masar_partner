import { Layers, TrendingUp, Zap, Users } from "lucide-react";

const outcomes = [
  {
    icon: Layers,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
    title: "قابلية للنمو",
    description: "حلول تستوعب التوسع والتطوير لاحقًا.",
  },
  {
    icon: TrendingUp,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
    title: "بيانات أفضل",
    description: "لوحات وتقارير تساعد على اتخاذ قرارات أوضح.",
  },
  {
    icon: Zap,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-500",
    title: "عمليات أسرع",
    description: "تقليل الخطوات اليدوية وتحسين وقت الإنجاز.",
  },
  {
    icon: Users,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    title: "تجربة أوضح",
    description: "رحلة أسهل للعميل من أول زيارة حتى الإجراء.",
  },
];

export const OutcomesSection = () => {
  return (
    <section className="py-20 px-6  " dir="rtl">
      <div className="website-container-narrow text-center">
        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 bg-white border border-blue-100 text-[#0047AB] px-4 py-1.5 rounded-full text-xs font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0047AB]" />
            أثر قابل للقياس
          </span>
        </div>

        {/* العنوان */}
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#011856] mb-4">
          لا نكتفي بالتنفيذ
        </h2>

        {/* الوصف */}
        <p className="text-gray-500 text-base max-w-2xl mx-auto mb-14">
          كل حل نبنيه مقاس بنتائج واضحة، لا بعدد الميزات أو الأسطر البرمجية.
        </p>

        {/* الشبكة - سطرين بدل سطر واحد */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 text-right">
          {outcomes.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="p-6 lg:p-8 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${item.iconBg}`}
                >
                  <Icon className={`w-5 h-5 ${item.iconColor}`} />
                </div>
                <h3 className="text-base lg:text-lg font-bold text-[#011856] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs lg:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
