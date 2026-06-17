import { Footer } from "@/components/home/Footer";
import { CoursesSection } from "@components/departments/CoursesSection";
import { Hero } from "@components/departments/Hero";
 
export default function DepartmentsPage() {
  return (
    <main>
      <Hero />
      <CoursesSection />   
      <Footer />  
    </main>
  );
}