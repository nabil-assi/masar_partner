import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/lib/services-data";
import { Hero } from "@/components/Website/services/service/Hero";
import { About } from "@/components/Website/services/service/About";
import { WhatItIncludes } from "@/components/Website/services/service/WhatItIncludes";
import { WhoIsItFor } from "@/components/Website/services/service/WhoIsItFor";
import { ValueYouGet } from "@/components/Website/services/service/ValueYouGet";
import { PortfolioExamples } from "@/components/Website/services/service/PortfolioExamples";
import { HowWeWork } from "@/components/Website/services/HowWeWork";
import { CTA } from "@/components/Website/home/CTA";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) return notFound();
  const isBusinessSystems = service.category === "أنظمة أعمال";

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <Hero
        breadcrumbLabel={service.title}
        heroTitle={service.heroTitle}
        heroDescription={service.heroDescription}
        stats={service.stats}
      />

      <About
        label={service.aboutSection.label}
        title={service.aboutSection.title}
        description={service.aboutSection.description}
      />

      <WhatItIncludes
        badge={service.whatItIncludes.badge}
        title={service.whatItIncludes.title}
        description={service.whatItIncludes.description}
        items={service.whatItIncludes.items}
      />

      <WhoIsItFor
        badge={service.whoIsItFor.badge}
        title={service.whoIsItFor.title}
        description={service.whoIsItFor.description}
        ctaLabel={service.whoIsItFor.ctaLabel}
        items={service.whoIsItFor.items}
      />

      <ValueYouGet
        badge={service.valueYouGet.badge}
        title={service.valueYouGet.title}
        description={service.valueYouGet.description}
        items={service.valueYouGet.items}
      />
      <div className="website-section-stack bg-white">
        <HowWeWork />
      </div>

      <PortfolioExamples
        badge={service.portfolioExamples.badge}
        title={service.portfolioExamples.title}
        description={service.portfolioExamples.description}
        items={service.portfolioExamples.items}
      />
      <div className="website-section-stack bg-white">
        <CTA
          badgeText={isBusinessSystems ? "راجع نظامك قبل قرار التطوير" : "ابدأ بتصور واضح قبل التنفيذ"}
          title={isBusinessSystems ? "نظامك الحالي يحتاج مراجعة؟" : `تفكر في ${service.title}؟`}
          highlightedTitle={isBusinessSystems ? "راجع نظامك الحالي معنا" : "احصل على تصور أولي للحل"}
          description={
            isBusinessSystems
              ? "نراجع سير العمل الحالي ونحدد أين يمكن تقليل العمل اليدوي وتحسين الربط والتقارير قبل أي تطوير جديد."
              : "نساعدك على تحويل الاحتياج إلى نطاق واضح، مراحل تنفيذ واقعية، وتجربة مناسبة لطبيعة عملك."
          }
          primaryLabel={isBusinessSystems ? "راجع نظامك الحالي معنا" : "احصل على تصور أولي للحل"}
          secondaryLabel="راسلنا عبر البريد"
        />
      </div>
    </main>
  );
}
