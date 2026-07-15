import { Hero } from "@/components/Academy/home/Hero";
import { Features } from "@/components/Academy/home/Features";
import { Testimonials } from "@/components/Academy/home/Testimonials";
import { FeaturedCourses } from "@/components/Academy/home/FeaturedCourses";
import { LearningPaths } from "@/components/Academy/home/LearningPaths";
import { LiveEvent } from "@/components/Academy/home/LiveEvent";
import { Stats } from "@/components/Academy/home/Stats";
import { WhyUs } from "@/components/Academy/home/WhyUs";
import { Partners } from "@/components/Academy/home/Partners";
import { BlogSection } from "@/components/Academy/home/BlogSection";
import { JoinCTA } from "@/components/Academy/home/JoinCTA";

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

     </main>
  );
}
