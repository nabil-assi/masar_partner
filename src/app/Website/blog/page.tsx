import { Hero } from "@/components/Website/blog/Hero";
 
 import { Blog } from "@/components/Website/blog/Blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "المدونة",
  description: "مقالات عملية حول المنتجات الرقمية وأتمتة الأعمال وتطوير البرمجيات.",
};

export default function Home() {
  return (
    <main className="website-subpage relative min-h-screen w-full overflow-x-hidden">
      <Hero />
 
      <div className="pt-12 sm:pt-16">
        <Blog />
      </div>
 
    </main>
  );
}
