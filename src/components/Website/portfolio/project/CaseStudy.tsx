import {
  BarChart3,
  CheckCircle2,
  Clock3,
  Lightbulb,
  Target,
  TrendingUp,
  Wrench,
} from "lucide-react";

interface CaseStudyProps {
  title: string;
  description: string;
  overview: string;
  highlights?: string[];
  tags: string[];
  category: string;
  duration: string;
}

const impactCards = [
  {
    icon: Clock3,
    label: "وقت أقل",
    value: "تنفيذ أسرع",
    description: "تقليل الخطوات اليدوية وتوضيح مسار العمل اليومي.",
  },
  {
    icon: TrendingUp,
    label: "نمو أوضح",
    value: "قابلية توسع",
    description: "بنية وتجربة قابلة للتطوير مع احتياج الشركة القادم.",
  },
  {
    icon: BarChart3,
    label: "قرار أفضل",
    value: "رؤية عملية",
    description: "تنظيم البيانات والواجهات بطريقة تساعد الفريق على المتابعة.",
  },
];

export const CaseStudy = ({
  title,
  description,
  overview,
  highlights = [],
  tags,
  category,
  duration,
}: CaseStudyProps) => {
  const resultItems =
    highlights.length > 0
      ? highlights
      : ["تجربة أوضح للمستخدم", "إدارة أسهل للفريق", "حل قابل للتطوير"];

  return (
    <section className="bg-[#fbfdff] px-6 py-14 sm:py-16" dir="rtl">
      <div className="website-container-narrow">
        <div className="mb-8 max-w-3xl">
          <span className="masar-eyebrow">دراسة حالة</span>
          <h2 className="mt-5 text-2xl font-extrabold leading-[1.45] text-[#071b4e] sm:text-3xl lg:text-[2.35rem]">
            كيف حوّلنا {title} إلى حل رقمي قابل للقياس؟
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            نعرض المشروع كقصة عمل واضحة: ما التحدي، كيف تعاملنا معه، وما الأثر
            العملي الذي خرج به العميل.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <article className="rounded-[1.35rem] border border-blue-100 bg-white p-6 shadow-[0_14px_40px_rgba(31,78,132,0.06)]">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#075dc7]">
              <Target className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-lg font-extrabold text-[#071b4e]">
              المشكلة
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              احتاج المشروع إلى تحويل فكرة أو عملية قائمة إلى تجربة أوضح وأكثر
              قابلية للإدارة، مع الحفاظ على صورة احترافية تناسب {category}.
            </p>
            <p className="mt-4 rounded-xl bg-slate-50 px-4 py-3 text-xs font-bold leading-6 text-slate-500">
              {description}
            </p>
          </article>

          <article className="rounded-[1.35rem] border border-blue-100 bg-white p-6 shadow-[0_14px_40px_rgba(31,78,132,0.06)] lg:col-span-2">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-[#17a9c8]">
              <Lightbulb className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-lg font-extrabold text-[#071b4e]">الحل</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{overview}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5 text-xs font-extrabold text-[#075dc7]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[.9fr_1.1fr]">
          <article className="rounded-[1.35rem] border border-blue-100 bg-white p-6 shadow-[0_14px_40px_rgba(31,78,132,0.06)]">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#075dc7]">
              <Wrench className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-lg font-extrabold text-[#071b4e]">
              التقنيات والتنفيذ
            </h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs font-bold text-slate-400">مدة التنفيذ</p>
                <p className="mt-2 text-sm font-extrabold text-[#071b4e]">
                  {duration}
                </p>
              </div>
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs font-bold text-slate-400">نوع الحل</p>
                <p className="mt-2 text-sm font-extrabold text-[#071b4e]">
                  {category}
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-[1.35rem] border border-blue-100 bg-white p-6 shadow-[0_14px_40px_rgba(31,78,132,0.06)]">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <CheckCircle2 className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-lg font-extrabold text-[#071b4e]">
              النتيجة والأثر
            </h3>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {impactCards.map(({ icon: Icon, label, value, description }) => (
                <div key={label} className="rounded-xl bg-slate-50 p-4">
                  <Icon className="h-4 w-4 text-[#075dc7]" />
                  <p className="mt-3 text-xs font-bold text-slate-400">{label}</p>
                  <p className="mt-1 text-sm font-extrabold text-[#071b4e]">
                    {value}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {resultItems.slice(0, 3).map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-emerald-100 bg-emerald-50/60 px-4 py-3 text-xs font-extrabold leading-6 text-emerald-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
