import { CoursesSection } from "@/components/Academy/departments/CoursesSection";
import { Hero } from "@/components/Academy/departments/Hero";

export default function DepartmentsPage() {
  return (
    <main>
      <Hero />
      <div id="target-component">
        <CoursesSection />
      </div>
     </main>
  );
}
