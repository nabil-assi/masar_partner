import { PageHero } from "@/components/Website/shared/PageHero";

export const Hero = () => {
  return (
    <PageHero
      eyebrow="أعمالنا"
      breadcrumbs={[{ label: "أعمالنا" }]}
      title={
        <>
          أعمالنا <span className="text-[#075dc7]">ومشاريعنا</span>
        </>
      }
      description="نماذج من حلول رقمية صممناها لتدعم أعمالًا أكثر كفاءة ونموًا."
      actions={[
        { label: "ابدأ مشروعك", href: "/contact" },
        { label: "استعرض الخدمات", href: "/services", variant: "secondary" },
      ]}
    />
  );
};
