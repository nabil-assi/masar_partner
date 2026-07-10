 import { Hero } from "@/components/Website/contact/Hero";
 
import { ContactInfo } from "@/components/Website/contact/ContactInfo";
import { ContactForm } from "@/components/Website/contact/ContactForm";
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
      <ContactInfo />

      <ContactForm />
 
    </main>
  );
}
