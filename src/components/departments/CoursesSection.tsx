"use client";
import { useState, useMemo } from "react";
import { Pagination } from "./Pagination";
import { FiltersBar } from "./FiltersBar";
import { CourseCard } from "../shared/CourseCard";

const coursesData = [
  {
    id: 1,
    image: "/images/Design.png",
    level: "متوسط",
    category: "تطوير الويب",
    title: "تطوير تطبيقات الويب الحديثة باستخدام React",
    description:
      "تعلم بناء تطبيقات ويب تفاعلية وسريعة باستخدام React وأحدث التقنيات",
    instructorName: "أحمد محمد",
    instructorImg: "/images/instructors/ahmed.png",
    duration: "40 ساعة",
    students: "2500",
    rating: 4.8,
    price: 499,
  },
  {
    id: 2,
    image: "/images/Programming.png",
    level: "مبتدئ",
    category: "الذكاء الاصطناعي",
    title: "برمجة Python للمبتدئين",
    description:
      "ابدأ رحلتك في تعلم البرمجة من خلال لغة بايثون القوية والمطلوبة",
    instructorName: "ليلى حسن",
    instructorImg: "/images/instructors/leila.png",
    duration: "30 ساعة",
    students: "1800",
    rating: 4.9,
    price: 399,
  },
  {
    id: 3,
    image: "/images/uxui.png",
    level: "متقدم",
    category: "التصميم",
    title: "مبادئ تجربة المستخدم (UX)",
    description: "تعلم كيف تصمم واجهات احترافية تركز على احتياجات المستخدم",
    instructorName: "سارة العلمي",
    instructorImg: "/images/instructors/sara.png",
    duration: "25 ساعة",
    students: "1200",
    rating: 4.7,
    price: 299,
  },
  {
    id: 4,
    image: "/images/uxui.png",
    level: "متقدم",
    category: "التصميم",
    title: "مبادئ تجربة المستخدم (UX)",
    description: "تعلم كيف تصمم واجهات احترافية تركز على احتياجات المستخدم",
    instructorName: "سارة العلمي",
    instructorImg: "/images/instructors/sara.png",
    duration: "25 ساعة",
    students: "1200",
    rating: 4.7,
    price: 299,
  },
  {
    id: 5,
    image: "/images/uxui.png",
    level: "متقدم",
    category: "التصميم",
    title: "مبادئ تجربة المستخدم (UX)",
    description: "تعلم كيف تصمم واجهات احترافية تركز على احتياجات المستخدم",
    instructorName: "سارة العلمي",
    instructorImg: "/images/instructors/sara.png",
    duration: "25 ساعة",
    students: "1200",
    rating: 4.7,
    price: 299,
  },
  {
    id: 6,
    image: "/images/uxui.png",
    level: "متقدم",
    category: "التصميم",
    title: "مبادئ تجربة المستخدم (UX)",
    description: "تعلم كيف تصمم واجهات احترافية تركز على احتياجات المستخدم",
    instructorName: "سارة العلمي",
    instructorImg: "/images/instructors/sara.png",
    duration: "25 ساعة",
    students: "1200",
    rating: 4.7,
    price: 299,
  },
  {
    id: 7,
    image: "/images/uxui.png",
    level: "متقدم",
    category: "التصميم",
    title: "مبادئ تجربة المستخدم (UX)",
    description: "تعلم كيف تصمم واجهات احترافية تركز على احتياجات المستخدم",
    instructorName: "سارة العلمي",
    instructorImg: "/images/instructors/sara.png",
    duration: "25 ساعة",
    students: "1200",
    rating: 4.7,
    price: 299,
  },
  {
    id: 8,
    image: "/images/uxui.png",
    level: "متقدم",
    category: "التصميم",
    title: "مبادئ تجربة المستخدم (UX)",
    description: "تعلم كيف تصمم واجهات احترافية تركز على احتياجات المستخدم",
    instructorName: "سارة العلمي",
    instructorImg: "/images/instructors/sara.png",
    duration: "25 ساعة",
    students: "1200",
    rating: 4.7,
    price: 299,
  },
  {
    id: 9,
    image: "/images/uxui.png",
    level: "متقدم",
    category: "التصميم",
    title: "مبادئ تجربة المستخدم (UX)",
    description: "تعلم كيف تصمم واجهات احترافية تركز على احتياجات المستخدم",
    instructorName: "سارة العلمي",
    instructorImg: "/images/instructors/sara.png",
    duration: "25 ساعة",
    students: "1200",
    rating: 4.7,
    price: 299,
  },
  {
    id: 10,
    image: "/images/uxui.png",
    level: "متقدم",
    category: "التصميم",
    title: "مبادئ تجربة المستخدم (UX)",
    description: "تعلم كيف تصمم واجهات احترافية تركز على احتياجات المستخدم",
    instructorName: "سارة العلمي",
    instructorImg: "/images/instructors/sara.png",
    duration: "25 ساعة",
    students: "1200",
    rating: 4.7,
    price: 299,
  },
];

export const CoursesSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    category: "",
    level: "",
    price: "",
  });
  const itemsPerPage = 6; // تم تعديله ليكون متناسباً مع الشاشات المتجاوبة

  const filteredCourses = useMemo(() => {
    return coursesData.filter((course) => {
      return (
        (filters.category === "" || course.category === filters.category) &&
        (filters.level === "" || course.level === filters.level)
      );
    });
  }, [filters, coursesData]); // تمت إضافة coursesData للـ dependencies

  const totalCoursesCount = filteredCourses.length;
  const totalPages = Math.ceil(totalCoursesCount / itemsPerPage);
  const displayedCourses = filteredCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <section className="py-16 md:py-24 bg-[#060E20]">
      <div className="container mx-auto px-6" dir="rtl">
        {/* تحسين الـ FiltersBar ليكون متجاوباً في مكونه الخاص */}
        <FiltersBar
          onFilterChange={(f) => {
            setFilters((prev) => ({ ...prev, ...f }));
            setCurrentPage(1);
          }}
        />

        {/* عنوان ديناميكي متجاوب */}
        <h1 className="text-white text-lg md:text-xl font-bold mb-8 text-right">
          عرض {displayedCourses.length} من أصل {totalCoursesCount} دورة
        </h1>

        {/* تعديل الـ Grid ليحتوي على كاردات متساوية الحجم ومتجاوبة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
          {displayedCourses.map((course) => (
            <div key={course.id} className="w-full max-w-[400px]">
              <CourseCard {...course} />
            </div>
          ))}
        </div>

        {/* عرض رسالة عند عدم وجود نتائج */}
        {totalCoursesCount === 0 && (
          <div className="text-center text-gray-400 py-20">
            لا توجد دورات مطابقة لهذه التصنيفات.
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-12">
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>
    </section>
  );
};
