import { Hero } from "@/components/Website/clients/Hero";

import Image from "next/image";
import { Blog } from "@/components/Website/blog/Blog";
import { OurClients } from "@/components/Website/clients/OurClients";
import { SectorsWeServe } from "@/components/Website/clients/SectorsWeServe";
import { Testimonials } from "@/components/Website/clients/Testimonials";
import { HowWeWork } from "@/components/Website/services/HowWeWork";
import { CTA } from "@/components/Website/about/CTA";

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

      <OurClients />
      <SectorsWeServe />
      <Testimonials />
      <HowWeWork />
      <CTA />
    </main>
  );
}
