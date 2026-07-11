import { PageHero } from "@/components/Website/shared/PageHero";

export const Hero = () => {
  return (
    <PageHero
      eyebrow="عملاؤنا"
      breadcrumbs={[{ label: "عملاؤنا" }]}
      title={
        <>
          شركاء النجاح الذين
          <span className="text-[#6BB7FF]">  يثقون بنا </span>
        </>
      }
      description="نفخر بشراكاتنا الممتدة مع نخبة من الشركات والأنشطة السعودية، نبني معهم حلولاً تكبر بمرور الوقت."
    />
  );
};
