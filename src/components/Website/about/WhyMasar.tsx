import { Headphones, Lightbulb, LineChart, Rocket, Settings, Users } from "lucide-react";

const features = [
  { icon: LineChart, title: "نفكر في النتيجة", description: "نربط كل قرار في التصميم والتطوير بهدف واضح يمكن ملاحظته وقياسه." },
  { icon: Users, title: "نعمل كشريك", description: "نشاركك الرؤية والتقدم والتحديات، ونبني الحل معك لا بعيداً عنك." },
  { icon: Lightbulb, title: "نبسّط التعقيد", description: "نحوّل العمليات والأفكار المعقدة إلى تجارب مفهومة وسهلة الاستخدام." },
  { icon: Headphones, title: "نبقى بعد الإطلاق", description: "نرافق المنتج بالدعم والتحسين حتى يستمر في خدمة العمل بكفاءة." },
  { icon: Rocket, title: "ننفذ على مراحل", description: "نقسّم المشروع إلى خطوات واضحة تقلل المخاطر وتسرّع الوصول إلى القيمة." },
  { icon: Settings, title: "نبني منظومة متكاملة", description: "استراتيجية وتصميم وتطوير وتكاملات ضمن فريق ومسار عمل واحد." },
];

export const WhyMasar = () => {
  return (
    <section className="bg-[#f2f7fc] py-20 sm:py-24 lg:py-28" dir="rtl">
      <div className="website-container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="masar-eyebrow">لماذا مسار؟</span>
          <h2 className="mt-5 text-3xl font-extrabold text-[#071b4e] sm:text-4xl">طريقة عمل تجعل المشروع أوضح</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">الاحتراف بالنسبة لنا ليس شكلاً فقط؛ بل وضوح في التواصل، عناية في التنفيذ، واستمرار في تحسين النتيجة.</p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <article key={feature.title} className="group rounded-[1.6rem] border border-white bg-white/85 p-6 shadow-[0_12px_40px_rgba(17,65,124,0.06)] transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_20px_50px_rgba(17,65,124,0.10)] sm:p-7">
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#075dc7] transition group-hover:bg-[#075dc7] group-hover:text-white"><feature.icon className="h-5 w-5" /></span>
                <span className="text-xs font-extrabold text-slate-300">0{index + 1}</span>
              </div>
              <h3 className="mt-6 text-lg font-extrabold text-[#071b4e]">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
