import { PageHero } from "@/components/Website/shared/PageHero";

export const Hero = () => {
  return (
    <PageHero
      eyebrow="حلولنا"
      breadcrumbs={[{ label: "الخدمات" }]}
      title={
        <>
          حلولنا <span className="text-[#6BB7FF]">الرقمية</span>
        </>
      }
      description="نبني حلولاً تساعد أعمالك على النمو بكفاءة ووضوح."
      actions={[
        { label: "احجز استشارة مجانية", href: "/contact" },
        { label: "شاهد أعمالنا", href: "/portfolio", variant: "secondary" },
      ]}
    />
  );
};
