import { Hero } from "@/components/Website/blog/Hero";
 
import Image from "next/image";
 import { Blog } from "@/components/Website/blog/Blog";

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
 
        <Blog />
 
    </main>
  );
}
