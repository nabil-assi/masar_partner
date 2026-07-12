import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  Clock3,
  MessageCircle,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

type CTAProps = {
  className?: string;
  title?: string;
  highlightedTitle?: string;
  description?: string;
};

const benefits = [
  { icon: ShieldCheck, label: "حلول مخصصة لأعمالك" },
  { icon: Clock3, label: "استجابة سريعة وواضحة" },
  { icon: TrendingUp, label: "شراكة تدعم نموك" },
];

export const CTA = ({
  className = "",
  title = "جاهز تبدأ",
  highlightedTitle = "خطوتك الرقمية القادمة؟",
  description = "احجز استشارة مجانية، ودعنا نساعدك في اختيار الحل الأنسب لأعمالك.",
}: CTAProps) => {
  return (
    <section className={className} dir="rtl" aria-labelledby="website-cta-title">
      <div className="website-container">
        <div className="relative isolate overflow-hidden rounded-[1.75rem] bg-[#080d38] px-5 py-8 text-white shadow-[0_24px_70px_rgba(8,13,56,0.18)] sm:px-8 sm:py-10 lg:min-h-[430px] lg:rounded-[2rem] lg:px-12 lg:py-12">
          <div className="pointer-events-none absolute -left-28 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-[110px]" />
          <div className="pointer-events-none absolute -bottom-40 right-1/3 h-80 w-80 rounded-full bg-indigo-500/15 blur-[100px]" />
          <div
            className="pointer-events-none absolute inset-0 hidden opacity-[0.12] sm:block"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,.45) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
              maskImage: "linear-gradient(90deg, black, transparent 75%)",
              WebkitMaskImage: "linear-gradient(90deg, black, transparent 75%)",
            }}
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-14">
            <div className="order-2 text-center lg:order-1 lg:text-right">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-bold text-blue-100 sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,.9)]" />
                لنحوّل فكرتك إلى خطوة واضحة
              </span>

              <h2 id="website-cta-title" className="mt-5 text-3xl font-extrabold leading-[1.35] tracking-[-0.02em] sm:text-4xl lg:text-[2.8rem]">
                {title}
                <span className="mt-1 block text-[#5b7cff]">{highlightedTitle}</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-blue-100/75 sm:text-base sm:leading-8 lg:mx-0">
                {description}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <Link href="/contact" className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-[#1748d4] px-6 text-sm font-extrabold text-white shadow-lg shadow-blue-950/25 transition hover:-translate-y-0.5 hover:bg-[#2457e8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80">
                  <CalendarDays className="h-5 w-5" />
                  احجز استشارة مجانية
                </Link>
                <a href="https://wa.me/970567465929" target="_blank" rel="noreferrer" className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-6 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#25d366] text-white">
                    <MessageCircle className="h-4 w-4" fill="currentColor" />
                  </span>
                  تحدث معنا عبر واتساب
                </a>
              </div>

              <div className="mt-8 grid grid-cols-3 border-t border-white/10 pt-6">
                {benefits.map(({ icon: Icon, label }, index) => (
                  <div key={label} className={`flex flex-col items-center gap-2 px-2 text-center lg:items-start lg:text-right ${index > 0 ? "border-r border-white/10" : ""}`}>
                    <Icon className="h-5 w-5 text-[#6c8cff]" />
                    <span className="text-[10px] font-semibold leading-5 text-blue-50/75 sm:text-xs">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 mx-auto w-full max-w-[500px] lg:order-2 lg:max-w-none">
              <div className="relative aspect-[1.35/1]">
                <div className="absolute inset-x-[12%] bottom-[3%] h-[18%] rounded-full bg-blue-600/30 blur-3xl" />
                <Image
                  src="/Website/images/cta-digital-ecosystem.png"
                  alt="منظومة رقمية مترابطة لتحليل الأعمال ودعم النمو"
                  fill
                  sizes="(min-width: 1280px) 510px, (min-width: 1024px) 42vw, (min-width: 640px) 500px, calc(100vw - 72px)"
                  className="object-contain drop-shadow-[0_28px_35px_rgba(0,0,0,.28)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
