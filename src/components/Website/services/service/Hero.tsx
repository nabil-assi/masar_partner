import { PageHero } from "@/components/Website/shared/PageHero";

interface HeroTitle {
  line1: string;
  line2Normal: string;
  line2Highlight: string;
}

interface HeroProps {
  breadcrumbLabel: string;
  heroTitle: HeroTitle;
  heroDescription: string;
  stats: { value: string; label: string }[];
}

export const Hero = ({
  breadcrumbLabel,
  heroTitle,
  heroDescription,
  stats,
}: HeroProps) => {
  return (
    <PageHero
      eyebrow="خدمات مسار"
      breadcrumbs={[
        { label: "الخدمات", href: "/services" },
        { label: breadcrumbLabel },
      ]}
      title={
        <>
          {heroTitle.line1} <br />
          {heroTitle.line2Normal}{" "}
          <span className="text-[#6BB7FF]">{heroTitle.line2Highlight}</span>
        </>
      }
      description={heroDescription}
      actions={[
        { label: "احجز استشارة مجانية", href: "/contact" },
        { label: "اطلب عرض سعر", href: "/contact", variant: "secondary" },
      ]}
    >
      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
        {stats.map((stat) => (
          <div key={stat.label} className="border-b border-white/12 pb-4 last:border-b-0 last:pb-0">
            <div className="text-3xl font-extrabold text-white">{stat.value}</div>
            <div className="mt-1 text-sm font-bold text-blue-50/70">{stat.label}</div>
          </div>
        ))}
      </div>
    </PageHero>
  );
};
