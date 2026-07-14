import { Hero } from "@/components/Website/portfolio/Hero";
import { Services } from "@/components/Website/portfolio/Services";
import { OutcomesSection } from "@/components/Website/portfolio/OutcomesSection";
import { PortfolioWithSectors } from "@/components/Website/portfolio/PortfolioWithSectors";

import { CTA } from "@/components/Website/home/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "أعمالنا ومشاريعنا",
  description: "نماذج من المنصات والأنظمة والتجارب الرقمية التي تطورها مسار.",
};

export default function Home() {
  return (
    <main className="website-subpage relative min-h-screen w-full overflow-x-hidden">
         <Hero />
 
      {/* المحتوى */}
      <div className="website-section-stack pt-12 sm:pt-16">
        <Services />
         <OutcomesSection />
      <PortfolioWithSectors />
      <CTA
        badgeText="من مشاهدة الأعمال إلى تنفيذ مشروعك"
        title="أعجبك أسلوب تنفيذنا؟"
        highlightedTitle="نفّذ مشروع مشابه"
        description="شاركنا طبيعة مشروعك، وسنقترح لك تصوراً أولياً يساعدك على تحويل الفكرة إلى حل عملي واضح."
        primaryLabel="نفّذ مشروع مشابه"
        secondaryLabel="تواصل عبر البريد الإلكتروني"
      />
       </div>
    </main>
  );
}
