import { Search, ClipboardList, Code2, Rocket } from "lucide-react";

const steps = [
  { id: "04", title: "نطلق ونطوّر", desc: "نختبر، نطلق، ونواصل التحسين والدعم بعد الإطلاق.", icon: Rocket },
  { id: "03", title: "نصمم ونطوّر", desc: "نحوّل الخطة إلى تجربة رقمية متكاملة وعملية.", icon: Code2 },
  { id: "02", title: "نحلل ونخطط", desc: "نحدد نطاق المشروع، الحل الأنسب، وخطة تنفيذ واضحة.", icon: ClipboardList },
  { id: "01", title: "نفهم احتياجك", desc: "نبدأ بفهم أهدافك، جمهورك، والتحديات التي تريد حلها.", icon: Search },
];

export const HowWeWork = () => {
  return (
    <section dir="ltr" className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        {/* العنوان */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-[#0047AB] text-xs font-bold mb-4">
            • كيف نعمل
          </span>
          <h2 className="text-4xl font-extrabold text-[#011856] mb-4">من الفكرة إلى الإطلاق</h2>
          <p className="text-gray-500">منهجية واضحة تجعل كل مرحلة مفهومة وقابلة للمتابعة.</p>
        </div>

        {/* مسار العمل */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* الخط الأفقي (يظهر في الشاشات الكبيرة فقط) */}
          <div className="hidden lg:block absolute top-16 right-0 left-0 h-[1px] bg-blue-200 -z-0" />

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              {/* أيقونة المرحلة */}
              <div className="w-20 h-20 bg-white rounded-3xl border border-blue-100 flex items-center justify-center shadow-sm mb-6 z-10 relative">
                <step.icon className="w-8 h-8 text-[#0047AB]" />
                <span className="absolute -bottom-3 text-[10px] font-bold text-gray-400 bg-gray-50 px-2 rounded-full">
                  {step.id}
                </span>
              </div>
              
              {/* النص */}
              <h3 className="text-lg font-bold text-[#011856] mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};