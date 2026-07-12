import { PageHero } from "@/components/Website/shared/PageHero";

export const Hero = () => {
  return (
    <PageHero
      eyebrow="المدونة"
      breadcrumbs={[{ label: "المدونة" }]}
      title={
        <>
          مقالات تقنية <span className="text-[#075dc7]">ونصائح عملية</span>
        </>
      }
      description="أفكار عملية تساعدك على فهم المنتجات الرقمية، أتمتة الأعمال، وبناء حلول قابلة للنمو."
    />
  );
};
