import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft, Check, Layers3, Sparkles } from "lucide-react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type HeroAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  actions?: HeroAction[];
  children?: ReactNode;
  compact?: boolean;
}

export const PageHero = ({
  eyebrow,
  title,
  description,
  breadcrumbs = [],
  actions = [],
  children,
  compact = false,
}: PageHeroProps) => {
  const allBreadcrumbs = [{ label: "الرئيسية", href: "/" }, ...breadcrumbs];

  return (
    <section className={`relative isolate overflow-hidden bg-[#f8fbff] text-right ${compact ? "pb-14 pt-28 sm:pb-16 sm:pt-32" : "pb-20 pt-32 sm:pb-24 sm:pt-36"}`} dir="rtl">
      <div className="masar-grid absolute inset-0 -z-20 opacity-60" />
      <div className="absolute -right-36 top-10 -z-10 h-96 w-96 rounded-full bg-blue-100/60 blur-[100px]" />
      <div className="absolute -left-36 bottom-0 -z-10 h-80 w-80 rounded-full bg-cyan-100/50 blur-[100px]" />

      <div className="website-container relative z-10">
        <nav aria-label="مسار الصفحة" className={`${compact ? "mb-6" : "mb-8"} flex flex-wrap items-center gap-2 text-xs font-bold text-slate-400 sm:text-sm`}>
          {allBreadcrumbs.map((item, index) => {
            const isLast = index === allBreadcrumbs.length - 1;
            return (
              <span key={`${item.label}-${index}`} className="flex items-center gap-2">
                {index > 0 && <span className="text-slate-300">/</span>}
                {item.href && !isLast ? (
                  <Link href={item.href} className="transition-colors hover:text-[#075dc7]">{item.label}</Link>
                ) : (
                  <span className={isLast ? "text-[#075dc7]" : undefined}>{item.label}</span>
                )}
              </span>
            );
          })}
        </nav>

        <div className={`grid items-center ${compact ? "gap-8 lg:grid-cols-[1.05fr_.8fr] lg:gap-14" : "gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-20"}`}>
          <div className="max-w-3xl">
            <span className="masar-eyebrow gap-2">
              <Sparkles className="h-4 w-4" />
              {eyebrow}
            </span>

            <h1 className={`${compact ? "mt-5 text-[2.15rem] leading-[1.28] sm:text-[2.8rem] lg:text-[3.05rem] lg:leading-[1.2]" : "mt-6 text-[2.35rem] leading-[1.35] sm:text-5xl lg:text-[3.35rem]"} font-extrabold tracking-normal text-[#071b4e] [&_.text-\[\#6BB7FF\]]:text-[#075dc7]`}>
              {title}
            </h1>

            {description ? (
              <p className={`${compact ? "mt-5" : "mt-6"} max-w-2xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9`}>{description}</p>
            ) : null}

            {actions.length > 0 ? (
              <div className={`${compact ? "mt-7" : "mt-8"} flex flex-col gap-3 sm:flex-row`}>
                {actions.map((action) => (
                  <Link key={action.label} href={action.href} className={action.variant === "secondary" ? "masar-button-secondary" : "masar-button-primary"}>
                    {action.label}
                    <ArrowLeft className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          {children ? (
            <div className="rounded-[1.75rem] border border-blue-100 bg-white/80 p-6 shadow-[0_25px_70px_rgba(19,69,128,0.12)] backdrop-blur">{children}</div>
          ) : (
            <div className="relative mx-auto hidden w-full max-w-md lg:block" aria-hidden="true">
              <div className="absolute inset-8 rounded-full bg-blue-200/40 blur-3xl" />
              <div className="relative rounded-[1.75rem] border border-white bg-white/75 p-4 shadow-[0_22px_60px_rgba(17,65,124,0.11)] backdrop-blur">
                <div className="rounded-[1.4rem] bg-gradient-to-br from-[#0a2b67] to-[#075dc7] p-6 text-white">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/12"><Layers3 className="h-5 w-5" /></span>
                    <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-blue-100">مسار للحلول الرقمية</span>
                  </div>
                  <div className="mt-8 space-y-3">
                    {["فهم واضح للاحتياج", "تصميم وتجربة متكاملة", "تنفيذ قابل للنمو"].map((item, index) => (
                      <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.07] px-4 py-3">
                        <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-cyan-300/15 text-cyan-200"><Check className="h-3.5 w-3.5" strokeWidth={3} /></span>
                        <span className="text-sm font-bold">{item}</span>
                        <span className="mr-auto text-xs font-bold text-blue-200/70">0{index + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
