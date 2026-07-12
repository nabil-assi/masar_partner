import { PageHero } from "@/components/Website/shared/PageHero";

export const Hero = () => {
  return (
    <PageHero
      eyebrow="تواصل معنا"
      breadcrumbs={[{ label: "تواصل معنا" }]}
      title={
        <>
          تواصل <span className="text-[#075dc7]">معنا</span>
        </>
      }
      description="شاركنا فكرتك أو التحدي الذي تواجهه، وسنساعدك في تحديد الحل الرقمي والخطوة الأولى بوضوح."
      actions={[
        { label: "تحدث عبر واتساب", href: "https://wa.me/970567465929" },
      ]}
    />
  );
};
