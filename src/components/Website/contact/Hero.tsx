import { PageHero } from "@/components/Website/shared/PageHero";

export const Hero = () => {
  return (
    <PageHero
      eyebrow="تواصل معنا"
      breadcrumbs={[{ label: "تواصل معنا" }]}
      title={
        <>
          تواصل <span className="text-[#6BB7FF]">معنا</span>
        </>
      }
      description="جاهز لتحويل أفكارك إلى واقع؟ دعنا نناقش مشروعك ونقترح المسار التقني الأنسب."
    />
  );
};
