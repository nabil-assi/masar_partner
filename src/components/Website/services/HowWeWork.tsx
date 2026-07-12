import { Search, ClipboardList, Code2, Rocket } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "نفهم احتياجك",
    desc: "نبدأ بفهم أهدافك، جمهورك، والتحديات التي تريد حلها.",
    icon: Search,
  },
  {
    id: "02",
    title: "نحلل ونخطط",
    desc: "نحدد نطاق المشروع، الحل الأنسب، وخطة تنفيذ واضحة.",
    icon: ClipboardList,
  },
  {
    id: "03",
    title: "نصمم ونطوّر",
    desc: "نحوّل الخطة إلى تجربة رقمية متكاملة وعملية.",
    icon: Code2,
  },
  {
    id: "04",
    title: "نطلق ونطوّر",
    desc: "نختبر، نطلق، ونواصل التحسين والدعم بعد الإطلاق.",
    icon: Rocket,
  },
];

export const HowWeWork = () => {
  const columnWidthPercent = 100 / steps.length;
  const inset = columnWidthPercent / 2;

  return (
    <section dir="rtl" className="px-4 py-5 sm:px-6">
      <div className="website-container">
        {/* العنوان */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="masar-eyebrow mb-5 gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#075dc7]" />
            كيف نعمل
          </span>
          <h2 className="text-3xl font-extrabold text-[#071b4e] sm:text-4xl">
            مسار واضح من الفكرة إلى الإطلاق
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-500 lg:text-base">
            منهجية واضحة تجعل كل مرحلة مفهومة وقابلة للمتابعة.
          </p>
        </div>

        {/* مسار العمل */}
        <div className="relative grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* الخط الأفقي - يمتد بين مراكز أول وآخر أيقونة فقط */}
          <div
            className="absolute top-10 -z-0 hidden h-px bg-blue-200 lg:block"
            style={{
              right: `${inset}%`,
              left: `${inset}%`,
            }}
          />

          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center rounded-3xl border border-slate-200/70 bg-white p-6 text-center shadow-[0_10px_32px_rgba(17,65,124,0.05)]"
            >
              {/* أيقونة المرحلة */}
              <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 shadow-sm transition group-hover:bg-[#075dc7]">
                <step.icon className="h-6 w-6 text-[#075dc7] transition group-hover:text-white" />
                <span className="absolute -bottom-2 rounded-full bg-white px-2 text-[10px] font-bold text-slate-400 shadow-sm">
                  {step.id}
                </span>
              </div>

              {/* النص */}
              <h3 className="mb-2 text-lg font-extrabold text-[#071b4e]">
                {step.title}
              </h3>
              <p className="max-w-[220px] text-sm leading-7 text-slate-500">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
