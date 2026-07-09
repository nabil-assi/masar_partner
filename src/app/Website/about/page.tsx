import { AboutIntro } from "@/components/Website/about/AboutIntro";
import { Hero } from "@/components/Website/about/Hero";
import { TeamSection } from "@/components/Website/about/TeamSection";
import { WhyMasar } from "@/components/Website/about/WhyMasar";
import { CTA } from "@/components/Website/about/CTA";
import { HowWeWork } from "@/components/Website/services/HowWeWork";
import { Stats } from "@/components/Website/about/Stats";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      {/* الخلفية */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/Website/images/background.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <Hero />
      <Stats />

      <AboutIntro />

      <WhyMasar />
      <div className="   py-16 lg:py-20 px-6">
        <HowWeWork />
      </div>

      <TeamSection />
      <div className="   py-16 lg:py-20 px-6">
        <CTA />
      </div>
    </main>
  );
}
