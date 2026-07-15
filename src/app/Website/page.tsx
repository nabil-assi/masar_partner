import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/Website/home/CTA";
import { Testimonials } from "@/components/Website/home/Testimonials";
import {
  ArrowLeft,
  ArrowUpLeft,
  BarChart3,
  Blocks,
  Bot,
  Check,
  Code2,
  Zap,
  GraduationCap,
  Layers3,
  Palette,
  Rocket,
  ShoppingBag,
  Smartphone,
  Stethoscope,
  Workflow,
} from "lucide-react";

const trustStats = [
  { value: "+50", label: "مشروع وحل رقمي" },
  { value: "+12", label: "قطاع أعمال" },
  { value: "متكامل", label: "من الفكرة إلى الإطلاق" },
  { value: "مستمر", label: "دعم وتطوير" },
];

const capabilities = [
  { icon: Code2, label: "المنصات الرقمية", href: "/services/websites" },
  { icon: Bot, label: "أتمتة الأعمال", href: "/services/automation-systems" },
  { icon: Smartphone, label: "تطبيقات الجوال", href: "/services/mobile-apps" },
  { icon: Palette, label: "التصميم وتجربة المستخدم", href: "/services/design" },
];

const services = [
  {
    icon: Code2,
    number: "01",
    title: "المنصات والمنتجات الرقمية",
    description:
      "نصمم ونطور مواقع ومنصات سريعة وقابلة للتوسع، مبنية حول أهداف عمل واضحة وتجربة استخدام دقيقة.",
    tags: ["مواقع الشركات", "منصات SaaS", "متاجر إلكترونية"],
    href: "/services/websites",
  },
  {
    icon: Workflow,
    number: "02",
    title: "الأنظمة وأتمتة الأعمال",
    description:
      "نربط العمليات والبيانات في منظومة واحدة تقلل العمل اليدوي وتمنح الإدارة رؤية أوضح للقرار.",
    tags: ["ERPNext", "تكامل الأنظمة", "سير العمل"],
    href: "/services/automation-systems",
  },
  {
    icon: Smartphone,
    number: "03",
    title: "تطبيقات الجوال",
    description:
      "نبني تطبيقات عملية بتجربة سلسة، من الفكرة والنموذج الأولي إلى الإطلاق والتحسين المستمر.",
    tags: ["iOS وAndroid", "واجهات API", "تجربة المستخدم"],
    href: "/services/mobile-apps",
  },
  {
    icon: Palette,
    number: "04",
    title: "التصميم والهوية الرقمية",
    description:
      "نصنع حضوراً بصرياً متسقاً يعكس قيمة علامتك ويجعل كل نقطة تواصل أكثر وضوحاً وثقة.",
    tags: ["هوية بصرية", "UI/UX", "أنظمة تصميم"],
    href: "/services/design",
  },
];

const process = [
  {
    number: "01",
    title: "نفهم العمل",
    description:
      "نبدأ بالأهداف والتحديات والمستخدمين، ثم نحدد نطاقاً واقعياً وواضحاً.",
  },
  {
    number: "02",
    title: "نصمم المسار",
    description:
      "نحوّل المتطلبات إلى تجربة ونموذج حل قابل للاختبار قبل بدء التطوير الكامل.",
  },
  {
    number: "03",
    title: "نبني ونختبر",
    description:
      "نطوّر على مراحل قصيرة مع مراجعات منتظمة واختبارات للجودة والأداء.",
  },
  {
    number: "04",
    title: "نطلق ونطوّر",
    description:
      "نضمن انتقالاً سلساً ثم نستمر بالدعم والقياس والتحسين بعد الإطلاق.",
  },
];

const sectors = [
  { icon: ShoppingBag, label: "التجارة والتوزيع" },
  { icon: Layers3, label: "الخدمات والأعمال" },
  { icon: GraduationCap, label: "التعليم والتدريب" },
  { icon: Stethoscope, label: "الصحة والخدمات الطبية" },
  { icon: Rocket, label: "الشركات الناشئة" },
  { icon: Blocks, label: "المنتجات الرقمية" },
];

const outcomes = [
  {
    title: "تقليل العمل اليدوي",
    description:
      "نحوّل الخطوات المتكررة إلى مسارات واضحة تقلل الأخطاء وتمنح الفريق وقتًا أكبر للتركيز على القيمة.",
    metric: "أتمتة",
    metricLabel: "تحسين العمليات",
    icon: Workflow,
    highlights: ["تسريع التنفيذ", "تقليل الخطأ البشري"],
  },
  {
    title: "رؤية تشغيلية أوضح",
    description:
      "نوفر لوحات وتقارير تساعد الإدارة على متابعة الأداء والقرارات بدقة أكبر عبر بيانات موثوقة.",
    metric: "قياس",
    metricLabel: "اتخاذ قرار أفضل",
    icon: BarChart3,
    highlights: ["مؤشرات واضحة", "تتبع مستمر"],
  },
  {
    title: "تجربة مستخدم أهدأ",
    description:
      "نصمم واجهات منظمة وسلسة تجعل التفاعل اليومي أسهل، سواء للعميل أو لفريق العمل الداخلي.",
    metric: "UX",
    metricLabel: "أثر مباشر على المستخدم",
    icon: Zap,
    highlights: ["تفاعل أسهل", "استمرار أعلى"],
  },
];

const caseStudies = [
  {
    title: "منصة إدارة أعمال",
    category: "أتمتة وERPNext",
    image: "/Website/images/project-2.webp",
    challenge: "عمليات متفرقة بين المبيعات والمخزون والمهام.",
    result: "منصة تربط الفرق وتعرض مؤشرات التشغيل في مكان واحد.",
  },
  {
    title: "تطبيق خدمات ذكي",
    category: "Mobile App وUI/UX",
    image: "/Website/images/project-1.webp",
    challenge: "خدمة يومية تحتاج تجربة أسرع وأسهل على الجوال.",
    result: "تدفق استخدام واضح مع واجهة مناسبة للحجز والمتابعة.",
  },
  {
    title: "منصة تعليمية رقمية",
    category: "Web Platform",
    image: "/Website/images/academy-laptop.png",
    challenge: "إدارة محتوى ودورات ومستخدمين ضمن تجربة موحدة.",
    result: "منصة قابلة للتوسع تجمع التعلم والإدارة والاشتراكات.",
  },
];

const engagementModels = [
  {
    title: "بناء حل جديد",
    description:
      "نحوّل الفكرة أو الحاجة التشغيلية إلى منصة أو تطبيق جاهز للإطلاق مع خارطة مراحل واضحة.",
    points: [
      "تحليل نطاق العمل",
      "تصميم تجربة المستخدم",
      "تطوير واختبار وإطلاق",
    ],
  },
  {
    title: "تطوير نظام قائم",
    description:
      "نراجع النظام الحالي ونحسن الأداء والتجربة والتكاملات بدون تعطيل سير العمل.",
    points: [
      "تقييم تقني وتجربة",
      "تحسين الواجهات والأداء",
      "ربط الأنظمة والبيانات",
    ],
  },
  {
    title: "شراكة تشغيل ودعم",
    description:
      "نرافق الفريق بعد الإطلاق بالقياس، التحسين، الدعم الفني، وتطوير الإصدارات القادمة.",
    points: ["متابعة مؤشرات الأداء", "دعم وتحسين مستمر", "تطوير مزايا جديدة"],
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#fbfdff] text-slate-950">
      <section className="relative isolate flex min-h-[680px] items-center overflow-hidden bg-white pb-20 pt-28 sm:pt-32 lg:min-h-[720px] lg:pb-24">
        <div className="masar-grid absolute inset-0 -z-10 opacity-45" />
        <div className="absolute -left-32 top-24 -z-10 h-[420px] w-[420px] rounded-full bg-cyan-100/40 blur-[110px]" />
        <div className="absolute -right-32 bottom-10 -z-10 h-[420px] w-[420px] rounded-full bg-blue-100/55 blur-[110px]" />

        <div className="website-container grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div className="order-1 text-right lg:col-start-1 lg:row-start-1">
            <p className="mb-5 text-sm font-extrabold text-[#075dc7]">
              مسار للحلول الرقمية
            </p>

            <h1 className="max-w-3xl text-balance text-4xl font-extrabold leading-tight tracking-tight text-[#071b4e] sm:text-5xl lg:text-6xl lg:leading-[1.2÷]">
              <span className="block">حلول رقمية تنظّم أعمالك</span>
              <span className="mt-2 block bg-gradient-to-r from-[#075dc7] to-[#17a9c8] bg-clip-text text-transparent sm:mt-4">
                وتدعم نموّك
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              نصمم ونطور المنصات والتطبيقات وأنظمة الأتمتة التي تربط العمليات
              وتحسن تجربة العملاء، من الفكرة إلى الإطلاق والتطوير المستمر.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="masar-button-primary group">
                ابدأ مشروعك
                <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              </Link>
              <Link href="/portfolio" className="masar-button-secondary group">
                استعرض أعمالنا
                <ArrowUpLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          <div className="relative order-2 lg:col-start-2 lg:row-start-1">
            <div className="absolute inset-[18%] -z-10 rounded-full bg-blue-100/35 blur-[70px]" />
            <Image
              src="/Website/images/hero-dashboard-v2.webp"
              alt="منصة أعمال رقمية متكاملة تعمل على الحاسوب والجوال"
              width={1448}
              height={1086}
              priority
              sizes="(min-width: 1024px) 50vw, 92vw"
              className="mx-auto h-auto hidden w-full max-w-[700px] object-contain saturate-[0.72] contrast-[0.96] brightness-[1.02] drop-shadow-[0_26px_30px_rgba(18,67,129,0.12)]"
            />
          </div>
        </div>
      </section>

      {/* stats moved below outcomes to be a standalone premium section */}

      <section className="border-b border-slate-200/70 bg-white">
        <div className="website-container grid grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability) => (
            <Link
              key={capability.label}
              href={capability.href}
              className="group flex min-h-20 items-center gap-3 border-b border-slate-200/70 px-3 py-5 text-sm font-extrabold text-[#071b4e] transition-colors hover:text-[#075dc7] even:border-r sm:px-5 lg:border-b-0 lg:border-r lg:first:border-r-0"
            >
              <capability.icon className="h-5 w-5 shrink-0 text-[#075dc7]" />
              <span>{capability.label}</span>
              <ArrowLeft className="mr-auto h-4 w-4 text-slate-300 transition-transform group-hover:-translate-x-1 group-hover:text-[#075dc7]" />
            </Link>
          ))}
        </div>
      </section>

      <section className="py-24 sm:py-28" id="services">
        <div className="website-container">
          <SectionHeading
            eyebrow="ما الذي نبنيه"
            title="حلول رقمية تخدم العمل، لا التقنية فقط"
            description="نجمع بين الفهم التجاري والتصميم والتطوير لنقدم حلولاً متكاملة تعالج المشكلة وتدعم النمو."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-[1.75rem] border border-slate-200/80 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_65px_rgba(18,69,132,0.10)] sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#edf6ff] text-[#075dc7] transition group-hover:bg-[#075dc7] group-hover:text-white">
                    <service.icon className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-bold text-slate-300">
                    {service.number}
                  </span>
                </div>
                <h3 className="mt-7 text-xl font-extrabold text-[#071b4e] sm:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                  {service.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-[#075dc7]">
                  تفاصيل الحل{" "}
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12">
        <div className="website-container">
          <div className="relative overflow-hidden rounded-[2.25rem] bg-[#071b4e] px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-14">
            <div className="absolute -left-20 -top-32 h-80 w-80 rounded-full bg-blue-500/20 blur-[90px]" />
            <div className="absolute -bottom-36 right-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-[90px]" />
            <div className="relative grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
              <div className="order-2 lg:order-1">
                <div className="relative hidden overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5 p-3">
                  <Image
                    src="/Website/images/project-2.webp"
                    alt="نموذج نظام لإدارة الأعمال والعمليات"
                    width={720}
                    height={520}
                    sizes="(min-width: 1024px) 44vw, 90vw"
                    className="h-auto w-full rounded-2xl object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-bold text-blue-200">
                  نموذج حل متكامل
                </span>
                <h2 className="mt-6 text-3xl font-extrabold leading-[1.45] sm:text-4xl">
                  منصة واحدة تمنح فريقك رؤية أوضح وعملاً أسرع
                </h2>
                <p className="mt-5 text-base leading-8 text-blue-100/75">
                  نحوّل العمليات المتفرقة إلى تجربة مترابطة: إدارة الطلبات
                  والعملاء والمهام والتقارير، مع صلاحيات واضحة وواجهات تناسب كل
                  فريق.
                </p>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {[
                    "لوحات متابعة فورية",
                    "أتمتة المهام المتكررة",
                    "صلاحيات وسير موافقات",
                    "تقارير تساعد على القرار",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm font-bold text-white/90"
                    >
                      <Check
                        className="h-4 w-4 text-cyan-300"
                        strokeWidth={3}
                      />{" "}
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/portfolio"
                  className="mt-8 inline-flex items-center gap-2 font-extrabold text-white transition hover:text-cyan-200"
                >
                  استكشف نماذج حلولنا <ArrowLeft className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-28">
        <div className="website-container">
          <SectionHeading
            eyebrow="الأثر على العمل"
            title="لا نكتفي بتسليم واجهة جميلة، نركز على نتيجة قابلة للقياس"
            description="الهدف من كل حل نبنيه أن يجعل العمل أوضح، أسرع، وأسهل في الإدارة والتوسع."
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {outcomes.map((outcome) => {
              const Icon = outcome.icon;

              return (
                <article
                  key={outcome.title}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-gradient-to-br from-white via-slate-50 to-blue-50/70 p-7 text-right shadow-[0_14px_40px_rgba(18,69,132,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(18,69,132,0.10)]"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#075dc7] via-cyan-400 to-[#1e90ff]" />
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf6ff] text-[#075dc7]">
                      <Icon className="h-6 w-6" strokeWidth={2.5} />
                    </span>
                    <span className="rounded-full border border-blue-100 bg-white/90 px-3 py-1 text-sm font-extrabold text-[#075dc7] shadow-sm">
                      {outcome.metric}
                    </span>
                  </div>
                  <p className="mt-6 text-xs font-bold tracking-[0.26em] text-slate-400">
                    {outcome.metricLabel}
                  </p>
                  <h3 className="mt-3 text-xl font-extrabold text-[#071b4e]">
                    {outcome.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {outcome.description}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {outcome.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm font-bold text-slate-700"
                      >
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#edf6ff] text-[#075dc7]">
                          <Check className="h-3.5 w-3.5" strokeWidth={3} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Standalone trust stats — premium presentation */}
      <section className="bg-white py-12 sm:py-16">
        <div className="website-container">
          <div className="mx-auto w-full max-w-6xl rounded-[1.75rem] border border-slate-200/70 bg-white p-6 sm:p-8 lg:p-10">
            <div className="text-center">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#075dc7]">
                أرقام تعكس أثر الحلول
              </p>
              <h3 className="mt-2 text-2xl font-extrabold text-[#071b4e] sm:text-[1.8rem]">
                نتائج واضحة، وسمعة قوية
              </h3>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                نحوّل الأعمال إلى حلول رقمية مدروسة، تقدم نتائج ملموسة مع كل
                مرحلة.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-5 xl:grid-cols-4">
              {trustStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.25rem] bg-slate-50/80 px-4 py-5 text-center"
                >
                  <div className="text-3xl font-extrabold tracking-[-0.03em] text-[#075dc7] sm:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-slate-700">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbff] py-24 sm:py-28">
        <div className="website-container">
          <SectionHeading
            eyebrow="نماذج حلول"
            title="أمثلة أقرب لطريقة تفكير شركات حلول الأعمال"
            description="كل مشروع نعرضه كقصة عمل: تحدي واضح، حل مناسب، ونتيجة تساعد الفريق أو العميل."
          />

          <div className="mt-14 grid gap-5   lg:grid-cols-3">
            {caseStudies.map((item) => (
              <Link
                key={item.title}
                href="/portfolio"
                className="group overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-[0_18px_50px_rgba(18,69,132,0.07)] transition hover:-translate-y-1 hover:shadow-[0_28px_75px_rgba(18,69,132,0.12)]"
              >
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 92vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-right">
                  <span className="text-xs font-extrabold text-[#075dc7]">
                    {item.category}
                  </span>
                  <h3 className="mt-3 text-xl font-extrabold text-[#071b4e]">
                    {item.title}
                  </h3>
                  <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
                    <p>
                      <strong className="text-slate-800">التحدي: </strong>
                      {item.challenge}
                    </p>
                    <p>
                      <strong className="text-slate-800">النتيجة: </strong>
                      {item.result}
                    </p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#075dc7]">
                    مشاهدة الأعمال{" "}
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-28">
        <div className="website-container">
          <SectionHeading
            eyebrow="كيف نعمل"
            title="مسار واضح من التحدي إلى النتيجة"
            description="نعمل بشفافية وعلى مراحل قصيرة، حتى تظل الرؤية والميزانية والتقدم واضحة طوال المشروع."
          />
          <div className="relative mt-16   gap-5 lg:grid-cols-4 grid grid-cols-2">
            <div className="absolute left-[12%] right-[12%]   top-8 hidden h-px bg-gradient-to-l from-transparent via-blue-200 to-transparent sm-col-2 lg:block" />
            {process.map((item) => (
              <article
                key={item.number}
                className="relative rounded-3xl border border-slate-200/70 bg-white p-6 text-center"
              >
                <span className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-100 bg-[#f4f9ff] text-lg font-extrabold text-[#075dc7] shadow-sm">
                  {item.number}
                </span>
                <h3 className="mt-6 text-lg font-extrabold text-[#071b4e]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 sm:py-28">
        <div className="website-container">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="text-right">
              <span className="masar-eyebrow">طريقة التعاون</span>
              <h2 className="mt-5 text-3xl font-extrabold leading-[1.45] text-[#071b4e] sm:text-4xl">
                نختار شكل التنفيذ حسب احتياج العمل، لا حسب قالب جاهز
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                سواء كنت تبدأ من فكرة، تملك نظاماً يحتاج تطويراً، أو تبحث عن
                شريك تقني طويل الأمد، نبني طريقة تعاون واضحة تناسب المرحلة
                والميزانية.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-[#075dc7]"
              >
                حدد نموذج التعاون المناسب <ArrowLeft className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4">
              {engagementModels.map((model, index) => (
                <article
                  key={model.title}
                  className="rounded-3xl border border-slate-200/80 bg-white p-6 text-right shadow-[0_14px_40px_rgba(18,69,132,0.05)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-sm font-black text-blue-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-2 text-xl font-extrabold text-[#071b4e]">
                        {model.title}
                      </h3>
                    </div>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#edf6ff] text-[#075dc7]">
                      <Workflow className="h-5 w-5" />
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {model.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {model.points.map((point) => (
                      <span
                        key={point}
                        className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-600"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eef6ff] py-24 sm:py-28">
        <div className="website-container grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <span className="masar-eyebrow">قطاعات نفهمها</span>
            <h2 className="mt-5 text-3xl font-extrabold leading-[1.45] text-[#071b4e] sm:text-4xl">
              نبدأ من طبيعة عملك، ثم نبني التقنية المناسبة
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              لا نفرض قالباً جاهزاً. نفهم المستخدمين والعمليات والسوق، ثم نصمم
              حلاً يناسب مرحلة الشركة ويستطيع التوسع معها.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-[#075dc7]"
            >
              أخبرنا عن قطاعك <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {sectors.map((sector) => (
              <div
                key={sector.label}
                className="rounded-2xl border border-white bg-white/85 p-5 text-center shadow-[0_12px_35px_rgba(31,78,132,0.06)]"
              >
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#075dc7]">
                  <sector.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-sm font-extrabold leading-6 text-[#071b4e]">
                  {sector.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTA className="py-24 sm:py-28" />
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="masar-eyebrow">{eyebrow}</span>
      <h2 className="mt-5 text-3xl font-extrabold leading-[1.45] tracking-[-0.02em] text-[#071b4e] sm:text-4xl lg:text-[2.65rem]">
        {title}
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
