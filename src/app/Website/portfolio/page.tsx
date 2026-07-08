import { Hero } from "@/components/Website/portfolio/Hero";
import { Services } from "@/components/Website/portfolio/Services";
import { OutcomesSection } from "@/components/Website/portfolio/OutcomesSection";
import { PortfolioWithSectors } from "@/components/Website/portfolio/PortfolioWithSectors";

 import Image from "next/image";
import { CTA } from "@/components/Website/home/CTA";

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
 
      {/* المحتوى */}
      <div className="px-20 space-y-30">
        <Services />
         <OutcomesSection />
      <PortfolioWithSectors />
      <CTA />
       </div>
    </main>
  );
}
