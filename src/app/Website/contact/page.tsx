 import { Hero } from "@/components/Website/contact/Hero";
 
import { ContactInfo } from "@/components/Website/contact/ContactInfo";
import { ContactForm } from "@/components/Website/contact/ContactForm";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <Hero />
      <ContactInfo />

      <ContactForm />
 
    </main>
  );
}
