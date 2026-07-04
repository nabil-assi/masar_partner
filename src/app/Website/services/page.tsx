import { Hero } from "@/components/Website/services/Hero";
import { Services } from "@/components/Website/services/Services";
import { HowWeWork } from "@/components/Website/services/HowWeWork";
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
          className="object-cover"
          priority
        />
      </div>
         <Hero />
 
      {/* المحتوى */}
      <div className="px-20 space-y-30">
        <Services />
        <HowWeWork />
        <CTA />
      </div>
    </main>
  );
}
