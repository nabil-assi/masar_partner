
import { PageHero } from "@/components/Website/shared/PageHero";

export const Hero = () => {
  return (
    <PageHero
      eyebrow="عن مسار"
      breadcrumbs={[{ label: "من نحن" }]}
      title={
        <>
          عن <span className="text-[#075dc7]">مسار</span>
        </>
      }
      description="نصنع حلولاً رقمية واضحة تساعد الأعمال على النمو بثقة."
      actions={[
        { label: "تعرّف على حلولنا", href: "/services" },
        { label: "ابدأ مشروعك", href: "/contact", variant: "secondary" },
      ]}
    />
  );
};
