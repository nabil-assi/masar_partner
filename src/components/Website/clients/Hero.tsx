import { PageHero } from "@/components/Website/shared/PageHero";

export const Hero = () => {
  return (
    <PageHero
      eyebrow="عملاؤنا"
      breadcrumbs={[{ label: "عملاؤنا" }]}
      title={
        <>
          شركاء النجاح الذين
          <span className="text-[#075dc7]"> يثقون بنا</span>
        </>
      }
      description="نبني علاقات عمل طويلة المدى مع الشركات والمؤسسات، ونطوّر معها حلولاً تستمر في التحسن والنمو بمرور الوقت."
      actions={[
        { label: "ناقش مشروعك معنا", href: "/contact" },
        { label: "استكشف أعمالنا", href: "/portfolio", variant: "secondary" },
      ]}
    />
  );
};
