import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpLeft,
  Blocks,
  Bot,
  Check,
  Code2,
  Compass,
  GraduationCap,
  Layers3,
  MessageCircle,
  Palette,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Stethoscope,
  Workflow,
} from "lucide-react";

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
    description: "نبدأ بالأهداف والتحديات والمستخدمين، ثم نحدد نطاقاً واقعياً وواضحاً.",
  },
  {
    number: "02",
    title: "نصمم المسار",
    description: "نحوّل المتطلبات إلى تجربة ونموذج حل قابل للاختبار قبل بدء التطوير الكامل.",
  },
  {
    number: "03",
    title: "نبني ونختبر",
    description: "نطوّر على مراحل قصيرة مع مراجعات منتظمة واختبارات للجودة والأداء.",
  },
  {
    number: "04",
    title: "نطلق ونطوّر",
    description: "نضمن انتقالاً سلساً ثم نستمر بالدعم والقياس والتحسين بعد الإطلاق.",
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

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#fbfdff] text-slate-950">
      <section className="relative isolate min-h-[760px] overflow-hidden pb-20 pt-32 sm:pt-36 lg:flex lg:min-h-[820px] lg:items-center lg:pb-24 lg:pt-32">
        <div className="masar-grid absolute inset-0 -z-20 opacity-70" />
        <div className="absolute -right-32 top-12 -z-10 h-[440px] w-[440px] rounded-full bg-blue-100/55 blur-[100px]" />
        <div className="absolute -left-40 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-cyan-100/40 blur-[110px]" />

        <div className="website-container grid items-center gap-14 lg:grid-cols-[1.02fr_.98fr] lg:gap-16">
          <div className="order-1 text-right">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/80 px-4 py-2 text-sm font-bold text-[#0756b7] shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" />
              شريكك لبناء أعمال رقمية أقوى
            </div>

            <h1 className="max-w-3xl text-[2.45rem] font-extrabold leading-[1.35] tracking-[-0.035em] text-[#071b4e] sm:text-5xl lg:text-[3.6rem] lg:leading-[1.28]">
              نحوّل أفكارك وعملياتك إلى
              <span className="relative mx-2 inline-block text-[#075dc7]">
                حلول رقمية
                <svg className="absolute -bottom-2 right-0 h-3 w-full" viewBox="0 0 210 12" fill="none" aria-hidden="true">
                  <path d="M3 8.5C55 2.5 137 2.5 207 7" stroke="#65B7F3" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
              قابلة للنمو
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              نصمم ونطور المنصات وتطبيقات الأعمال وأنظمة الأتمتة للشركات، من فهم التحدي وبناء التجربة إلى الإطلاق والدعم المستمر.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="masar-button-primary group">
                ناقش مشروعك معنا
                <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              </Link>
              <Link href="/portfolio" className="masar-button-secondary group">
                شاهد نماذج الحلول
                <ArrowUpLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-200/80 pt-6 text-sm font-bold text-slate-700">
              {["حلول مخصصة", "تنفيذ مرحلي واضح", "دعم بعد الإطلاق"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-[#075dc7]">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="order-2 lg:order-none">
            <div className="relative mx-auto max-w-[650px]">
              <div className="absolute inset-10 rounded-full bg-[#0b5cbe]/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/70 p-3 shadow-[0_32px_80px_rgba(18,67,129,0.16)] backdrop-blur sm:p-5">
                <Image
                  src="/Website/images/hero.png"
                  alt="نموذج لوحة تحكم وحل رقمي من مسار"
                  width={760}
                  height={620}
                  priority
                  sizes="(min-width: 1024px) 48vw, 92vw"
                  className="h-auto w-full rounded-[1.35rem] object-contain"
                />
              </div>
              <div className="absolute -bottom-5 right-4 flex items-center gap-3 rounded-2xl border border-blue-100 bg-white px-4 py-3 shadow-[0_18px_45px_rgba(15,54,108,0.15)] sm:right-8">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <span>
                  <strong className="block text-sm text-[#071b4e]">حلول موثوقة وقابلة للتوسع</strong>
                  <small className="text-xs text-slate-500">من الفكرة إلى التشغيل</small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200/70 bg-white py-7">
        <div className="website-container grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            [Compass, "استراتيجية واضحة"],
            [Palette, "تجربة متقنة"],
            [Code2, "تطوير احترافي"],
            [Bot, "أتمتة ذكية"],
          ].map(([Icon, label]) => {
            const CapabilityIcon = Icon as typeof Compass;
            return (
              <div key={label as string} className="flex items-center justify-center gap-2.5 text-sm font-bold text-slate-600 sm:text-base">
                <CapabilityIcon className="h-5 w-5 text-[#075dc7]" />
                {label as string}
              </div>
            );
          })}
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
              <Link key={service.title} href={service.href} className="group rounded-[1.75rem] border border-slate-200/80 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_65px_rgba(18,69,132,0.10)] sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#edf6ff] text-[#075dc7] transition group-hover:bg-[#075dc7] group-hover:text-white">
                    <service.icon className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-bold text-slate-300">{service.number}</span>
                </div>
                <h3 className="mt-7 text-xl font-extrabold text-[#071b4e] sm:text-2xl">{service.title}</h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">{service.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-500">{tag}</span>
                  ))}
                </div>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-[#075dc7]">
                  تفاصيل الحل <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
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
                <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5 p-3">
                  <Image src="/Website/images/project-2.png" alt="نموذج نظام لإدارة الأعمال والعمليات" width={720} height={520} sizes="(min-width: 1024px) 44vw, 90vw" className="h-auto w-full rounded-2xl object-cover" />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-bold text-blue-200">نموذج حل متكامل</span>
                <h2 className="mt-6 text-3xl font-extrabold leading-[1.45] sm:text-4xl">منصة واحدة تمنح فريقك رؤية أوضح وعملاً أسرع</h2>
                <p className="mt-5 text-base leading-8 text-blue-100/75">نحوّل العمليات المتفرقة إلى تجربة مترابطة: إدارة الطلبات والعملاء والمهام والتقارير، مع صلاحيات واضحة وواجهات تناسب كل فريق.</p>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {["لوحات متابعة فورية", "أتمتة المهام المتكررة", "صلاحيات وسير موافقات", "تقارير تساعد على القرار"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm font-bold text-white/90">
                      <Check className="h-4 w-4 text-cyan-300" strokeWidth={3} /> {item}
                    </li>
                  ))}
                </ul>
                <Link href="/portfolio" className="mt-8 inline-flex items-center gap-2 font-extrabold text-white transition hover:text-cyan-200">استكشف نماذج حلولنا <ArrowLeft className="h-5 w-5" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-28">
        <div className="website-container">
          <SectionHeading eyebrow="كيف نعمل" title="مسار واضح من التحدي إلى النتيجة" description="نعمل بشفافية وعلى مراحل قصيرة، حتى تظل الرؤية والميزانية والتقدم واضحة طوال المشروع." />
          <div className="relative mt-16 grid gap-5 lg:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-gradient-to-l from-transparent via-blue-200 to-transparent lg:block" />
            {process.map((item) => (
              <article key={item.number} className="relative rounded-3xl border border-slate-200/70 bg-white p-6 text-center">
                <span className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-100 bg-[#f4f9ff] text-lg font-extrabold text-[#075dc7] shadow-sm">{item.number}</span>
                <h3 className="mt-6 text-lg font-extrabold text-[#071b4e]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f2f7fc] py-24 sm:py-28">
        <div className="website-container grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <span className="masar-eyebrow">قطاعات نفهمها</span>
            <h2 className="mt-5 text-3xl font-extrabold leading-[1.45] text-[#071b4e] sm:text-4xl">نبدأ من طبيعة عملك، ثم نبني التقنية المناسبة</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">لا نفرض قالباً جاهزاً. نفهم المستخدمين والعمليات والسوق، ثم نصمم حلاً يناسب مرحلة الشركة ويستطيع التوسع معها.</p>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-[#075dc7]">أخبرنا عن قطاعك <ArrowLeft className="h-4 w-4" /></Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {sectors.map((sector) => (
              <div key={sector.label} className="rounded-2xl border border-white bg-white/85 p-5 text-center shadow-[0_12px_35px_rgba(31,78,132,0.06)]">
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#075dc7]"><sector.icon className="h-5 w-5" /></span>
                <h3 className="mt-4 text-sm font-extrabold leading-6 text-[#071b4e]">{sector.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-28">
        <div className="website-container">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-blue-100 bg-gradient-to-br from-white to-[#edf6ff] px-6 py-12 text-center sm:px-12 sm:py-16">
            <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-cyan-100/60 blur-3xl" />
            <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-blue-100/70 blur-3xl" />
            <div className="relative mx-auto max-w-3xl">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#075dc7] text-white shadow-lg shadow-blue-700/20"><MessageCircle className="h-6 w-6" /></span>
              <h2 className="mt-6 text-3xl font-extrabold leading-[1.45] text-[#071b4e] sm:text-4xl">لديك فكرة أو عملية تحتاج أن تعمل بشكل أفضل؟</h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">شاركنا التحدي، وسنساعدك في تحديد الحل الأنسب والخطوة الأولى بوضوح ومن دون تعقيد.</p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/contact" className="masar-button-primary">ابدأ محادثة مع الفريق <ArrowLeft className="h-5 w-5" /></Link>
                <a href="https://wa.me/970567465929" target="_blank" rel="noreferrer" className="masar-button-secondary">تحدث عبر واتساب <MessageCircle className="h-5 w-5" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="masar-eyebrow">{eyebrow}</span>
      <h2 className="mt-5 text-3xl font-extrabold leading-[1.45] tracking-[-0.02em] text-[#071b4e] sm:text-4xl lg:text-[2.65rem]">{title}</h2>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">{description}</p>
    </div>
  );
}
