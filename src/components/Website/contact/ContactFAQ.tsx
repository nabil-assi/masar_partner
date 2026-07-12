import { ArrowLeft, CalendarDays, Check, HelpCircle, MessageCircle } from "lucide-react";

const questions = [
  {
    question: "كم تستغرق مراجعة طلب المشروع؟",
    answer: "نراجع الطلبات عادة خلال يوم عمل، ثم نتواصل لتحديد الأسئلة والخطوة التالية المناسبة.",
  },
  {
    question: "هل تعملون مع شركات خارج فلسطين؟",
    answer: "نعم. نعمل عن بُعد مع الشركات والفرق في الخليج والوطن العربي، ويمكن تنظيم الاجتماعات حسب المنطقة الزمنية للعميل.",
  },
  {
    question: "هل يمكن البدء بمرحلة تحليل واستشارة فقط؟",
    answer: "نعم. يمكن أن نبدأ بجلسة اكتشاف وتحليل للاحتياج، ثم نقدم تصوراً واضحاً قبل اتخاذ قرار التطوير الكامل.",
  },
  {
    question: "هل تقدمون الدعم بعد إطلاق المشروع؟",
    answer: "نعم. نحدد خطة الدعم والتحسين المناسبة لطبيعة الحل وحجم التشغيل ضمن اتفاق واضح.",
  },
];

export const ContactFAQ = () => {
  const bookingMessage = encodeURIComponent("مرحباً فريق مسار، أرغب بحجز جلسة اكتشاف لمناقشة مشروعي.");

  return (
    <section className="px-4 pb-24 sm:px-6 sm:pb-28" dir="rtl">
      <div className="website-container grid items-start gap-8 lg:grid-cols-[.82fr_1.18fr] lg:gap-12">
        <aside className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#075dc7] to-[#071b4e] p-7 text-white shadow-[0_22px_65px_rgba(7,27,78,0.16)] sm:p-9 lg:sticky lg:top-28">
          <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-cyan-300/15 blur-[75px]" />
          <div className="relative">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-200"><CalendarDays className="h-5 w-5" /></span>
            <h2 className="mt-6 text-2xl font-extrabold leading-[1.5] sm:text-3xl">تفضّل اجتماعاً مباشراً؟</h2>
            <p className="mt-4 text-sm leading-7 text-blue-100/75">احجز طلب جلسة اكتشاف قصيرة عبر واتساب، وسنتفق معك على الموعد المناسب حسب منطقتك الزمنية.</p>
            <ul className="mt-6 space-y-3">
              {["فهم أولي للتحدي", "مناقشة الخيارات المناسبة", "تحديد الخطوة التالية"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-bold text-white/90"><Check className="h-4 w-4 text-cyan-300" strokeWidth={3} /> {item}</li>
              ))}
            </ul>
            <a href={`https://wa.me/970567465929?text=${bookingMessage}`} target="_blank" rel="noreferrer" className="mt-8 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-extrabold text-[#075dc7] transition hover:-translate-y-0.5 hover:bg-blue-50">
              اطلب حجز جلسة اكتشاف <ArrowLeft className="h-4 w-4" />
            </a>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-blue-100/60"><MessageCircle className="h-3.5 w-3.5" /> يتم تنسيق الموعد عبر واتساب</p>
          </div>
        </aside>

        <div>
          <span className="masar-eyebrow gap-2"><HelpCircle className="h-4 w-4" /> أسئلة شائعة</span>
          <h2 className="mt-5 text-3xl font-extrabold text-[#071b4e] sm:text-4xl">قبل أن تبدأ المحادثة</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">إجابات سريعة عن طريقة بدء المشروع والعمل مع فريق مسار.</p>

          <div className="mt-8 space-y-3">
            {questions.map((item, index) => (
              <details key={item.question} className="group rounded-2xl border border-slate-200/70 bg-white px-5 py-1 shadow-[0_8px_28px_rgba(17,65,124,0.04)] open:border-blue-200 open:shadow-[0_14px_36px_rgba(17,65,124,0.07)] sm:px-6">
                <summary className="flex cursor-pointer list-none items-center gap-4 py-5 text-sm font-extrabold text-[#071b4e] sm:text-base">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-xs font-extrabold text-[#075dc7]">0{index + 1}</span>
                  {item.question}
                  <span className="mr-auto text-xl font-normal text-[#075dc7] transition group-open:rotate-45">+</span>
                </summary>
                <p className="pb-5 pr-12 text-sm leading-7 text-slate-500 sm:pr-12">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
