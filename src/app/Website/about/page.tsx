import { AboutIntro } from "@/components/Website/about/AboutIntro";
import { Hero } from "@/components/Website/about/Hero";
import { TeamSection } from "@/components/Website/about/TeamSection";
import { WhyMasar } from "@/components/Website/about/WhyMasar";
import { CTA } from "@/components/Website/about/CTA";
import { HowWeWork } from "@/components/Website/services/HowWeWork";
import { Stats } from "@/components/Website/about/Stats";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <Hero />
      <Stats />

      <AboutIntro />

      <WhyMasar />
      <div className=" bg-white py-16 lg:py-20 px-6">
        <HowWeWork />
      </div>

      <TeamSection />
      <div className=" bg-white py-16 lg:py-20 px-6">
        <CTA />
      </div>
    </main>
  );
}
