import Link from "next/link";
import { ArrowLeft, Check, MessageCircle, Sparkles } from "lucide-react";

export const CTA = () => {
  return (
    <section className="px-4 pb-24 sm:px-6 sm:pb-28" dir="rtl">
      <div className="website-container">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#071b4e] px-6 py-12 text-white shadow-[0_28px_75px_rgba(7,27,78,0.20)] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="absolute -left-24 -top-32 h-80 w-80 rounded-full bg-blue-500/20 blur-[95px]" />
          <div className="absolute -bottom-36 right-16 h-80 w-80 rounded-full bg-cyan-400/10 blur-[95px]" />
          <div className="masar-grid absolute inset-0 opacity-[0.08]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_.8fr] lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-sm font-bold text-blue-100"><Sparkles className="h-4 w-4 text-cyan-300" /> لنبدأ من الفكرة</span>
              <h2 className="mt-6 text-3xl font-extrabold leading-[1.45] sm:text-4xl lg:text-[2.7rem]">جاهز لبناء شيء <span className="text-cyan-300">يعمل وينمو؟</span></h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-blue-100/75">شاركنا التحدي أو الفكرة، وسنساعدك في تحديد الخطوة الأولى والحل التقني الأنسب بوضوح.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-white px-7 text-sm font-extrabold text-[#075dc7] transition hover:-translate-y-0.5 hover:bg-blue-50">ناقش مشروعك معنا <ArrowLeft className="h-4 w-4" /></Link>
                <a href="https://wa.me/970567465929" target="_blank" rel="noreferrer" className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-7 text-sm font-extrabold text-white transition hover:bg-white/10"><MessageCircle className="h-5 w-5 text-cyan-300" /> تحدث عبر واتساب</a>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {["جلسة فهم أولية", "تصور واضح للحل", "خطوات تنفيذ عملية"].map((item, index) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3.5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-300/15 text-cyan-200"><Check className="h-4 w-4" strokeWidth={3} /></span>
                  <span className="text-sm font-bold text-white/90">{item}</span>
                  <span className="mr-auto text-xs font-bold text-blue-200/50">0{index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
