import { Hero } from "@/components/Website/services/Hero";
import { Services } from "@/components/Website/services/Services";
import { HowWeWork } from "@/components/Website/services/HowWeWork";
import { CTA } from "@/components/Website/home/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "حلولنا الرقمية",
  description: "تطوير المنصات وتطبيقات الجوال وأنظمة الأتمتة والتصميم الرقمي للشركات.",
};

export default function Home() {
  return (
    <main className="website-subpage relative min-h-screen w-full overflow-x-hidden">
      <Hero />
      {/* المحتوى */}
      <div className="website-section-stack pt-12 sm:pt-16">
        <Services />
        <HowWeWork />
        <CTA
          badgeText="ابدأ من احتياج عملك"
          title="غير متأكد من الحل المناسب؟"
          highlightedTitle="احصل على تصور أولي للحل"
          description="أخبرنا عن طبيعة عملك والتحديات الحالية، وسنساعدك في تحديد الحل الرقمي الأنسب قبل بدء التنفيذ."
          primaryLabel="احصل على تصور أولي للحل"
          secondaryLabel="راسلنا عبر البريد"
        />
      </div>
    </main>
  );
}
