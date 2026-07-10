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

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      {/* الخلفية */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/Website/images/background.png"
          alt="Background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      <Hero />

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
