import { PageHero } from "@/components/Website/shared/PageHero";

export const Hero = () => {
  return (
    <PageHero
      eyebrow="المدونة"
      breadcrumbs={[{ label: "المدونة" }]}
      title={
        <>
          مقالات تقنية <span className="text-[#6BB7FF]">ونصائح برمجية</span>
        </>
      }
      description="أفكار عملية تساعدك على فهم المنتجات الرقمية، أتمتة الأعمال، وبناء حلول قابلة للنمو."
    />
  );
};
