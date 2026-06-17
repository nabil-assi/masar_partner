import Image from "next/image";
import { Star, Users, Clock, ShoppingCart } from "lucide-react";

// تم الاحتفاظ بنفس البيانات لضمان عدم حدوث أي تغيير في المحتوى
const courses = [
  {
    title: "علم البيانات والتحليلات المتقدمة",
    desc: "دورة شاملة في تحليل البيانات والذكاء الاصطناعي باستخدام Python",
    level: "متقدم",
    levelColor: "bg-red-500/20 text-red-500 border border-red-500/20",
    category: "علم بيانات",
    categoryColor: "bg-cyan-500/20 text-cyan-400 border border-cyan-500/20",
    img: "/images/data.png",
    instructor: "يوسف عبدالله",
    rating: "5.0",
    students: "1500",
    hours: "50 ساعة",
    price: "499 ريال",
  },
  {
    title: "تصميم تطبيقات الجوال باستخدام UX/UI",
    desc: "أساسيات ومبادئ تصميم واجهات المستخدم للتطبيقات المحمولة",
    level: "مبتدئ",
    levelColor: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/20",
    category: "التصميم",
    categoryColor: "bg-cyan-500/20 text-cyan-400 border border-cyan-500/20",
    img: "/images/uxui.png",
    instructor: "فاطمة حسن",
    rating: "4.9",
    students: "2400",
    hours: "60 ساعة",
    price: "399 ريال",
  },
  {
    title: "تطوير تطبيقات الويب باستخدام React",
    desc: "تعلم بناء تطبيقات ويب تفاعلية وسريعة باستخدام React وأحدث التقنيات",
    level: "متوسط",
    levelColor: "bg-amber-500/20 text-amber-400 border border-amber-500/20",
    category: "تطوير الويب",
    categoryColor: "bg-cyan-500/20 text-cyan-400 border border-cyan-500/20",
    img: "/images/react.png",
    instructor: "أحمد محمد",
    rating: "4.8",
    students: "2500",
    hours: "40 ساعة",
    price: "499 ريال",
  },
];

export const FeaturedCourses = () => (
  <section className="py-16 bg-[#0F172A]" dir="rtl">
    <div className="container mx-auto px-4">
      {/* رأس القسم */}
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-10 gap-4">
        <div className="text-center sm:text-right">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">الدورات المتميزة</h2>
          <p className="text-gray-400 text-sm">اختيارنا لأفضل الدورات الأكثر طلباً</p>
        </div>
        <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm font-bold whitespace-nowrap">
          عرض الكل ←
        </a>
      </div>

      {/* Grid متجاوب */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, i) => (
          <div key={i} className="flex flex-col bg-[#1E293B] rounded-2xl overflow-hidden border border-white/5 hover:border-[#C25101]/30 transition-all duration-300">
            {/* الصورة */}
            <div className="relative h-48 w-full">
              <Image src={course.img} alt={course.title} fill className="object-cover" />
              <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold ${course.categoryColor}`}>
                {course.category}
              </span>
              <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-bold ${course.levelColor}`}>
                {course.level}
              </span>
            </div>

            {/* المحتوى */}
            <div className="p-5 flex flex-col flex-grow text-right">
              <h3 className="text-lg font-bold text-white mb-2 leading-snug">{course.title}</h3>
              <p className="text-gray-400 text-xs mb-6 flex-grow">{course.desc}</p>

              {/* المدرب */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-gray-700 relative overflow-hidden">
                  <Image src={`/images/instructor-${i}.jpg`} alt={course.instructor} fill className="object-cover" />
                </div>
                <span className="text-sm text-gray-300">{course.instructor}</span>
              </div>

              {/* البيانات */}
              <div className="flex justify-between items-center text-gray-400 text-[11px] mb-6 border-b border-white/5 pb-4">
                <span className="flex items-center gap-1"><Clock size={12} /> {course.hours}</span>
                <span className="flex items-center gap-1"><Users size={12} /> {course.students}</span>
                <span className="flex items-center gap-1 text-amber-500 font-bold"><Star size={12} className="fill-amber-500" /> {course.rating}</span>
              </div>

              {/* السعر والزر */}
              <div className="flex items-center justify-between mt-auto">
                <span className="text-white font-bold text-lg">{course.price}</span>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-all flex items-center gap-2">
                  <ShoppingCart size={14} /> حجز مقعد
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);