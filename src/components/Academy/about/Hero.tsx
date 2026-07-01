import Image from "next/image";
import { Users, BookOpen, Briefcase, Star } from "lucide-react";

export const Hero = () => {
  const stats = [
    { icon: Users, label: "متدرب", value: "5000+" },
    { icon: BookOpen, label: "ورشة عمل", value: "150+" },
    { icon: Briefcase, label: "مدرب محترف", value: "50+" },
    { icon: Star, label: "نسبة الرضا", value: "95%" },
  ];

  return (
    <div className="relative w-full">
      {/* القسم الملون - الجزء العلوي */}
      <div className="bg-gradient-to-br from-[#6D3B15] via-[#1C2134] to-[#0F172A] text-white pt-32 pb-48 rounded-b-[40px]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-right space-y-6">
              <span className="text-orange-500 font-medium block font-almarai">منارة المعرفة الرقمية</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-almarai">
                نصنع مستقبل الكفاءات العربية
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-almarai">
                في مسار أكاديمي، نؤمن أن التعليم هو المحرك الأساسي للتغيير. نحن لا نقدم مجرد دورات، بل نصمم رحلات تعليمية متكاملة تهدف إلى تمكين المبدعين والمحترفين في العالم العربي.
              </p>
            </div>
            
            <div className="flex-1 w-full relative h-[300px] md:h-[400px] lg:h-[450px]">
              <Image
                src="/images/about/about-hero.png"
                alt="Team working"
                fill
                className="object-cover rounded-[24px]"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* منطقة الكاردز - هنا السر في التداخل */}
      <div className="container mx-auto px-6">
        {/* التعديل: استخدمت translate-y للمساعدة في رفع الكاردز بشكل دقيق فوق الحدود */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-32 lg:-mt-32 relative z-20">
          {stats.map((stat, i) => (
            <div key={i} className="bg-[#1e293b] p-6 md:p-8 rounded-[24px] flex flex-col items-center justify-center gap-2 border border-white/5 shadow-2xl">
              <stat.icon className="text-orange-500 mb-2" size={32} />
              <div className="text-xl md:text-2xl font-bold font-almarai text-white">
                {stat.value}
              </div>
              <div className="text-gray-400 text-xs md:text-sm font-almarai">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* مساحة فارغة في الأسفل لتعويض الـ margin السالب لكي لا يغطي الكاردز على محتوى الصفحة القادم */}
      <div className="pt-24"></div>
    </div>
  );
};