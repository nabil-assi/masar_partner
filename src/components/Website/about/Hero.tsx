
import { PageHero } from "@/components/Website/shared/PageHero";

export const Hero = () => {
  return (
    <PageHero
      eyebrow="عن مسار"
      breadcrumbs={[{ label: "من نحن" }]}
      title={
        <>
          عن <span className="text-[#6BB7FF]">مسار</span>
        </>
      }
      description="نصنع حلولاً رقمية واضحة تساعد الأعمال على النمو بثقة."
    />
  );
};
