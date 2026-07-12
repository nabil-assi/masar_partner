import { Blocks, Headphones, Layers3, Workflow } from "lucide-react";

const pillars = [
  {
    icon: Blocks,
    title: "حلول مخصصة",
    description: "نبني وفق احتياج العمل الحقيقي",
  },
  {
    icon: Layers3,
    title: "فريق متكامل",
    description: "استراتيجية وتصميم وتطوير",
  },
  {
    icon: Workflow,
    title: "تنفيذ مرحلي",
    description: "خطوات واضحة وقابلة للمتابعة",
  },
  {
    icon: Headphones,
    title: "شراكة مستمرة",
    description: "دعم وتحسين بعد الإطلاق",
  },
];

export const Stats = () => {
  return (
    <section className="relative -mt-8 px-4 pb-12 sm:-mt-10 sm:px-6 lg:pb-16" dir="rtl">
      <div className="website-container">
        <div className="grid grid-cols-2 gap-3 rounded-[1.75rem] border border-slate-200/70 bg-white p-3 shadow-[0_18px_55px_rgba(17,65,124,0.08)] md:grid-cols-4 md:gap-0 md:p-5">
          {pillars.map((pillar, index) => (
            <div key={pillar.title} className={`flex flex-col items-center px-3 py-5 text-center sm:px-5 ${index > 0 ? "md:border-r md:border-slate-100" : ""}`}>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#075dc7]">
                <pillar.icon className="h-5 w-5" />
              </span>
              <h2 className="mt-4 text-sm font-extrabold text-[#071b4e] sm:text-base">{pillar.title}</h2>
              <p className="mt-1.5 text-xs leading-5 text-slate-500 sm:text-sm">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
