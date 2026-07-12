 import { Hero } from "@/components/Website/contact/Hero";
 
import { ContactInfo } from "@/components/Website/contact/ContactInfo";
import { ContactForm } from "@/components/Website/contact/ContactForm";
import { ContactMap } from "@/components/Website/contact/ContactMap";
import { ContactFAQ } from "@/components/Website/contact/ContactFAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description: "تواصل مع فريق مسار لمناقشة مشروعك واختيار الحل الرقمي الأنسب لأعمالك.",
};

export default function Home() {
  return (
    <main className="website-subpage relative min-h-screen w-full overflow-x-hidden">
      <Hero />
      <ContactInfo />
      <ContactMap />
      <ContactForm />
      <ContactFAQ />
 
    </main>
  );
}
