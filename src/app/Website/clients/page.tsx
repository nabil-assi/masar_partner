import { Hero } from "@/components/Website/clients/Hero";

import Image from "next/image";
import { Blog } from "@/components/Website/blog/Blog";
import { OurClients } from "@/components/Website/clients/OurClients";
import { SectorsWeServe } from "@/components/Website/clients/SectorsWeServe";
import { Testimonials } from "@/components/Website/clients/Testimonials";
import { HowWeWork } from "@/components/Website/services/HowWeWork";
import { CTA } from "@/components/Website/about/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "عملاؤنا وشراكاتنا",
  description:
    "شراكات رقمية طويلة المدى نبني من خلالها حلولاً تنمو مع أعمال عملائنا.",
};

export default function Home() {
  return (
    <main className="website-subpage relative min-h-screen w-full overflow-x-hidden">
      <Hero />
      <div className="website-section-stack pt-12 sm:pt-16">
        <OurClients />
        <SectorsWeServe />
        <Testimonials />
        <HowWeWork />
        <CTA />
      </div>
    </main>
  );
}
