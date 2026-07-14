import Image from "next/image";
import Link from "next/link";
import {
  Clock3,
  Mail,
  MessageCircle,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

type CTAProps = {
  className?: string;
  badgeText?: string;
  title?: string;
  highlightedTitle?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

const benefits = [
  { icon: ShieldCheck, label: "حلول مخصصة لأعمالك" },
  { icon: Clock3, label: "استجابة سريعة وواضحة" },
  { icon: TrendingUp, label: "شراكة تدعم نموك" },
];

export const CTA = ({
  className = "",
  badgeText = "لنحوّل فكرتك إلى خطوة واضحة",
  title = "جاهز تبدأ",
  highlightedTitle = "خطوتك الرقمية القادمة؟",
  description = "احجز استشارة مجانية، ودعنا نساعدك في اختيار الحل الأنسب لأعمالك.",
  primaryLabel = "احجز استشارة مجانية",
  primaryHref = "https://wa.me/970567465929",
  secondaryLabel = "تواصل عبر البريد الإلكتروني",
  secondaryHref = "mailto:info@masar.com",
}: CTAProps) => {
  return (
    <section className={className} dir="rtl" aria-labelledby="website-cta-title">
      <div className="website-container">
        <div className="relative isolate overflow-hidden rounded-[1.75rem] border border-blue-100 bg-[linear-gradient(135deg,#ffffff_0%,#f3f8ff_48%,#e8f7ff_100%)] px-5 py-8 text-[#071b4e] shadow-[0_22px_60px_rgba(7,93,199,0.12)] sm:px-8 sm:py-10 lg:min-h-[430px] lg:rounded-[2rem] lg:px-12 lg:py-12">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#17a9c8,#075dc7,#74b7ff)]" />
          <div
            className="pointer-events-none absolute inset-0 hidden opacity-[0.45] sm:block"
            style={{
              backgroundImage: "radial-gradient(rgba(7,93,199,.16) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
              maskImage: "linear-gradient(90deg, black, transparent 72%)",
              WebkitMaskImage: "linear-gradient(90deg, black, transparent 72%)",
            }}
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-14">
            <div className="order-2 text-center lg:order-1 lg:text-right">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/75 px-4 py-2 text-xs font-bold text-[#075dc7] shadow-sm shadow-blue-900/5 sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-[#17a9c8] shadow-[0_0_14px_rgba(23,169,200,.45)]" />
                {badgeText}
              </span>

              <h2 id="website-cta-title" className="mt-5 text-3xl font-extrabold leading-[1.35] tracking-[-0.02em] sm:text-4xl lg:text-[2.8rem]">
                {title}
                <span className="mt-1 block bg-gradient-to-l from-[#075dc7] via-[#0a79d8] to-[#17a9c8] bg-clip-text text-transparent">{highlightedTitle}</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:mx-0">
                {description}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <Link href={primaryHref} target="_blank" rel="noreferrer" className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-[#075dc7] px-6 text-sm font-extrabold text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-0.5 hover:bg-[#064fa8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#075dc7]/30">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#25d366] text-white">
                    <MessageCircle className="h-4 w-4" fill="currentColor" />
                  </span>
                  {primaryLabel}
                </Link>
                <a href={secondaryHref} className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-blue-100 bg-white/80 px-6 text-sm font-extrabold text-[#071b4e] shadow-sm shadow-blue-900/5 transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#075dc7]/30">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-[#075dc7]">
                    <Mail className="h-4 w-4" />
                  </span>
                  {secondaryLabel}
                </a>
              </div>

              <div className="mt-8 grid grid-cols-3 border-t border-blue-100 pt-6">
                {benefits.map(({ icon: Icon, label }, index) => (
                  <div key={label} className={`flex flex-col items-center gap-2 px-2 text-center lg:items-start lg:text-right ${index > 0 ? "border-r border-blue-100" : ""}`}>
                    <Icon className="h-5 w-5 text-[#075dc7]" />
                    <span className="text-[10px] font-semibold leading-5 text-slate-600 sm:text-xs">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 mx-auto w-full max-w-[500px] lg:order-2 lg:max-w-none">
              <div className="relative aspect-[1.35/1]">
                <Image
                  src="/Website/images/cta-digital-ecosystem.png"
                  alt="منظومة رقمية مترابطة لتحليل الأعمال ودعم النمو"
                  fill
                  sizes="(min-width: 1280px) 510px, (min-width: 1024px) 42vw, (min-width: 640px) 500px, calc(100vw - 72px)"
                  className="object-contain drop-shadow-[0_24px_34px_rgba(7,27,78,.18)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
