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
        <CTA />
      </div>
    </main>
  );
}
