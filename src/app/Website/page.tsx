// src/app/Website/page.tsx
import { Hero } from "@/components/Website/home/Hero";
import { Services } from "@/components/Website/home/Services";
import { WhyUs } from "@/components/Website/home/WhyUs";
import { Stats } from "@/components/Website/home/Stats";
import { Portfolio } from "@/components/Website/home/Portfolio";
import { Testimonials } from "@/components/Website/home/Testimonials";
import { Blog } from "@/components/Website/home/Blog";
import { AcademySection } from "@/components/Website/home/AcademySection";
import { CTA } from "@/components/Website/home/CTA";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <Hero />
      <Services />
      <WhyUs />
      <Stats />
      <Portfolio />
      <Testimonials />
      <Blog />
      <AcademySection />
      <CTA />
    </main>
  );
}
