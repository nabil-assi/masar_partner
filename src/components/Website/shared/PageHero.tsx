import Link from "next/link";
import type { ReactNode } from "react";

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
}

export const PageHero = ({
  eyebrow,
  title,
  description,
  breadcrumbs = [],
  actions = [],
  children,
}: PageHeroProps) => {
  const allBreadcrumbs = [{ label: "الرئيسية", href: "/" }, ...breadcrumbs];

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-[#0A1A5C] via-[#0B1F63] to-[#050F3D] pt-16 pb-32 text-right text-white"
      dir="rtl"
    >
      <div className="website-container relative z-10 pt-16">
        <nav
          aria-label="مسار الصفحة"
          className="mb-7 flex flex-wrap items-center gap-2 text-sm font-bold text-blue-100/70"
        >
          {allBreadcrumbs.map((item, index) => {
            const isLast = index === allBreadcrumbs.length - 1;

            return (
              <span key={`${item.label}-${index}`} className="flex items-center gap-2">
                {index > 0 && <span className="text-blue-200/35">/</span>}
                {item.href && !isLast ? (
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                ) : (
                  <span className={isLast ? "text-white" : undefined}>{item.label}</span>
                )}
              </span>
            );
          })}
        </nav>

        <div className="grid gap-9 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
          <div className="max-w-3xl">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-extrabold text-blue-50 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#6BB7FF]" />
              {eyebrow}
            </span>

            <h1 className="text-4xl font-extrabold leading-[1.25] text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            {description ? (
              <p className="mt-6 max-w-2xl text-base leading-8 text-blue-50/80 sm:text-lg">
                {description}
              </p>
            ) : null}

            {actions.length > 0 ? (
              <div className="mt-8 flex flex-wrap gap-3">
                {actions.map((action) => (
                  <Link
                    key={action.label}
                    href={action.href}
                    className={
                      action.variant === "secondary"
                        ? "inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 text-sm font-extrabold text-white transition hover:bg-white/16"
                        : "inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-6 text-sm font-extrabold text-[#0047AB] shadow-lg shadow-black/15 transition hover:bg-blue-50"
                    }
                  >
                    {action.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          {children ? (
            <div className="rounded-2xl border border-white/12 bg-white/[0.09] p-5 shadow-2xl shadow-black/10 backdrop-blur">
              {children}
            </div>
          ) : null}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-10 w-full leading-[0]">
        <svg
          className="h-[58px] w-full lg:h-[86px]"
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M0,90 L0,90 C480,-10 960,-10 1440,90 L1440,90 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
};
