// app/about/page.tsx
import { CoreValues } from "@/components/Academy/about/CoreValues";
import { FinalCTA } from "@/components/Academy/about/FinalCTA";
import { PartnersSection } from "@/components/Academy/about/PartnersSection";
import { TeamSection } from "@/components/Academy/about/TeamSection";
import { VisionMission } from "@/components/Academy/about/VisionMission";
import { Hero } from "@/components/Academy/about/Hero";

export default function AboutPage() {
  return (
    <main className="bg-[#0F172A] w-full overflow-x-hidden ">
      <Hero />
      <div className="pt-24 md:pt-32">
        <VisionMission />
      </div>
      <CoreValues />
      <TeamSection />
      <PartnersSection />
      <FinalCTA />
     </main>
  );
}
