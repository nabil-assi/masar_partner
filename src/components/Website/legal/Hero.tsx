import { PageHero } from "@/components/Website/shared/PageHero";

export const Hero = () => {
  return (
    <PageHero
      eyebrow="الشروط والأحكام"
      breadcrumbs={[{ label: "الشروط والأحكام" }]}
      title={
        <>
          الشروط <span className="text-[#6BB7FF]">والأحكام</span>
        </>
      }
      description="باستخدامك لموقع أو خدمات مسار، فإنك توافق على الالتزام بهذه الشروط والأحكام بالكامل.  
"
    />
  );
};
