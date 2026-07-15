import Image from "next/image";
import { Check, Quote, Sparkles } from "lucide-react";

const checklistItems = [
  "نفهم أهداف العمل قبل اختيار التقنية",
  "نجمع التصميم والتطوير في تجربة واحدة",
  "نبني حلولاً قابلة للتطوير والتحسين",
];

export const AboutIntro = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-28" dir="rtl">
      <div className="website-container grid items-center gap-12 lg:grid-cols-[.95fr_1.05fr] lg:gap-20">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-5 -z-10 rounded-[2.5rem] bg-blue-100/50 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white bg-[#0b234f] p-2.5 shadow-[0_28px_75px_rgba(15,55,108,0.18)] sm:p-3.5">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[1.45rem]">
              <Image
                src="/images/about/about-hero.webp"
                alt="فريق يعمل على تطوير حلول رقمية"
                fill
                sizes="(min-width: 1024px) 48vw, 92vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071b4e]/45 via-transparent to-transparent" />
            </div>
          </div>

          <div className="absolute -bottom-6 right-4 max-w-[280px] rounded-2xl border border-white/20 bg-[#071b4e]/95 p-5 text-white shadow-2xl backdrop-blur sm:right-8 sm:max-w-[310px]">
            <Quote className="h-5 w-5 rotate-180 text-cyan-300" />
            <p className="mt-3 text-sm font-bold leading-7">كل فكرة جيدة تستحق مساراً واضحاً يحولها إلى قيمة حقيقية.</p>
            <span className="mt-3 block text-xs font-bold text-blue-200">فلسفة مسار</span>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="masar-eyebrow gap-2"><Sparkles className="h-4 w-4" /> قصتنا</span>
          <h2 className="mt-6 text-3xl font-extrabold leading-[1.45] tracking-[-0.02em] text-[#071b4e] sm:text-4xl lg:text-[2.7rem]">
            نبني التقنية حول <span className="text-[#075dc7]">الإنسان والعمل</span>
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            مسار شركة حلول رقمية تجمع بين الفهم التجاري والتصميم والتطوير. نساعد الشركات على تحويل الأفكار والعمليات المعقدة إلى تجارب واضحة وسهلة الاستخدام.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            لا نبدأ بالكود، بل بالسؤال الصحيح: ما المشكلة التي نحلها؟ ثم نبني مع العميل حلاً عملياً يمكن إطلاقه وتطويره بثقة.
          </p>

          <div className="mt-8 space-y-3">
            {checklistItems.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white px-4 py-3 shadow-sm">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#075dc7]"><Check className="h-4 w-4" strokeWidth={3} /></span>
                <span className="text-sm font-bold text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
