// app/about/page.tsx
import { CoreValues } from "@/components/about/CoreValues";
import { FinalCTA } from "@/components/about/FinalCTA";
import { PartnersSection } from "@/components/about/PartnersSection";
import { TeamSection } from "@/components/about/TeamSection";
import { VisionMission } from "@/components/about/VisionMission";
import { Footer } from "@/components/home/Footer";
import { Hero } from "@components/about/Hero";

export default function AboutPage() {
  return (
    <main className="bg-[#0F172A] w-full overflow-x-hidden ">
      <Hero />
      <VisionMission />
      <CoreValues />
      <TeamSection />
      <PartnersSection />
      <FinalCTA /> 
      <Footer />  
    </main>
  );
}