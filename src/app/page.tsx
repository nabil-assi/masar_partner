import { Hero } from "@components/home/Hero";
import { Features } from "@components/home/Features";
import { Testimonials } from "@components/home/Testimonials";
import { Container } from "@/components/ui/Container";
import { FeaturedCourses } from "@/components/home/FeaturedCourses";
import { LearningPaths } from "@/components/home/LearningPaths";
import { LiveEvent } from "@/components/home/LiveEvent";
import { Stats } from "@/components/home/Stats";
import { WhyUs } from "@/components/home/WhyUs";
import { Partners } from "@/components/home/Partners";
import { BlogSection } from "@/components/home/BlogSection";
import { JoinCTA } from "@/components/home/JoinCTA";
import { Footer } from "@/components/home/Footer";

export default function Home() {
  return (
    <main className="bg-[#0F172A]  w-full overflow-x-hidden">
      <Hero />
      <Features />
      <FeaturedCourses />
      <LearningPaths />
      <LiveEvent />
      <Stats />
      <WhyUs />
      <Testimonials />
      <Partners />
      <BlogSection />
      <JoinCTA />
    
      <Footer />
    </main>
  );
}
