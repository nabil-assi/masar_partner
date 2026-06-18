import { CourseCard } from "../shared/CourseCard"; // تأكد من استيراد المسار الصحيح

const courses = [
  {
    title: "علم البيانات والتحليلات المتقدمة",
    description:
      "دورة شاملة في تحليل البيانات والذكاء الاصطناعي باستخدام Python",
    level: "متقدم",
    category: "علم بيانات",
    img: "/images/data.png",
    instructorName: "يوسف عبدالله",
    instructorImg: "/images/instructor-0.jpg",
    rating: 5.0,
    students: "1500",
    duration: "50 ساعة",
    price: 499,
  },
  {
    title: "تصميم تطبيقات الجوال باستخدام UX/UI",
    description: "أساسيات ومبادئ تصميم واجهات المستخدم للتطبيقات المحمولة",
    level: "مبتدئ",
    category: "التصميم",
    img: "/images/uxui.png",
    instructorName: "فاطمة حسن",
    instructorImg: "/images/instructor-1.jpg",
    rating: 4.9,
    students: "2400",
    duration: "60 ساعة",
    price: 399,
  },
  {
    title: "تطوير تطبيقات الويب باستخدام React",
    description:
      "تعلم بناء تطبيقات ويب تفاعلية وسريعة باستخدام React وأحدث التقنيات",
    level: "متوسط",
    category: "تطوير الويب",
    img: "/images/react.png",
    instructorName: "أحمد محمد",
    instructorImg: "/images/instructor-2.jpg",
    rating: 4.8,
    students: "2500",
    duration: "40 ساعة",
    price: 499,
  },
];

export const FeaturedCourses = () => (
  <section className="py-16 bg-[#0F172A]" dir="rtl">
    <div className="container mx-auto px-4">
      {/* رأس القسم */}
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-10 gap-4">
        <div className="text-center sm:text-right">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            الدورات المتميزة
          </h2>
          <p className="text-gray-400 text-sm">
            اختيارنا لأفضل الدورات الأكثر طلباً
          </p>
        </div>
        <a
          href="#"
          className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm font-bold whitespace-nowrap"
        >
          عرض الكل ←
        </a>
      </div>

      {/* Grid متجاوب يستدعي الكارد الديناميكي */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, i) => (
          <CourseCard
            key={i}
            image={course.img}
            title={course.title}
            description={course.description}
            category={course.category}
            level={course.level}
            instructorName={course.instructorName}
            instructorImg={course.instructorImg}
            duration={course.duration}
            students={course.students}
            rating={course.rating}
            price={course.price}
          />
        ))}
      </div>
    </div>
  </section>
);
