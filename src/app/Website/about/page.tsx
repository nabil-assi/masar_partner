import { AboutIntro } from "@/components/Website/about/AboutIntro";
import { Hero } from "@/components/Website/about/Hero";
import { TeamSection } from "@/components/Website/about/TeamSection";
import { WhyMasar } from "@/components/Website/about/WhyMasar";
import { CTA } from "@/components/Website/about/CTA";
import { HowWeWork } from "@/components/Website/services/HowWeWork";
import { Stats } from "@/components/Website/about/Stats";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "من نحن",
  description: "تعرف على مسار ورؤيتنا في بناء حلول رقمية واضحة وقابلة للنمو.",
};

export default function Home() {
  return (
    <main className="website-subpage relative min-h-screen w-full overflow-x-hidden">
      <Hero />
      <Stats />
      <AboutIntro />
      <WhyMasar />
      <div className="py-20 sm:py-24 lg:py-28">
        <HowWeWork />
      </div>
      <TeamSection />
      <CTA />
    </main>
  );
}
