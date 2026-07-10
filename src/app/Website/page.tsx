import { Hero } from "@/components/Website/home/Hero";
import { Services } from "@/components/Website/home/Services";
import { WhyUs } from "@/components/Website/home/WhyUs";
import { Stats } from "@/components/Website/home/Stats";
import { Portfolio } from "@/components/Website/home/Portfolio";
import { Testimonials } from "@/components/Website/home/Testimonials";
import { Blog } from "@/components/Website/home/Blog";
import { AcademySection } from "@/components/Website/home/AcademySection";
import { CTA } from "@/components/Website/home/CTA";
import Image from "next/image";
import { Partners } from "@/components/Website/home/Partners";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      {/* الخلفية */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-white via-[#F4F8FF] to-white" />
        <div
          className="absolute inset-0 -z-10 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,71,171,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,71,171,0.08) 1px, transparent 1px)",
            backgroundSize: "46px 46px",
          }}
        />
      </div>

      <Hero />
      <Partners />

      {/* المحتوى */}
      <div className="website-section-stack">
        <Services />
        <WhyUs />
        <Stats />
        <Portfolio />
        <Testimonials />
        <Blog />
        <AcademySection />
        <CTA />
      </div>
    </main>
  );
}
