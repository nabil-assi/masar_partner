import Link from "next/link";
import {
  Palette,
  Smartphone,
  Globe,
  Compass,
  Cpu,
  Megaphone,
  ArrowLeft,
} from "lucide-react";

const services = [
  {
    title: "العناية البصرية والتصميم",
    description: "فريق خبرة يمتلك مهارة تصميم مميزة وإبداع فائق",
    icon: Palette,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
    tags: ["نشر", "تصميم عام", "مود تسويقية"],
    link: "/services/design",
  },
  {
    title: "تطبيقات الجوال",
    description: "تطبيقات أندرويد و iOS بأحدث تقنيات البرمجة الحديثة",
    icon: Smartphone,
    iconBg: "bg-pink-50",
    iconColor: "text-pink-400",
    tags: ["Android", "React Native", "Flutter"],
    link: "/services/mobile-apps",
  },
  {
    title: "تطوير المواقع والمنصات",
    description:
      "مواقع ومنصات إلكترونية متكاملة مصممة لخدمة أهداف أعمالك برؤية واضحة",
    icon: Globe,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    tags: ["مواقع الشركات", "متاجر إلكترونية", "لوحات إدارية"],
    link: "/services/websites",
  },
  {
    title: "استشارات الرقمية",
    description: "نرسم خارطة طريقك الرقمية ونحدد أفضل الحلول التقنية لأعمالك",
    icon: Compass,
    iconBg: "bg-sky-50",
    iconColor: "text-sky-500",
    tags: ["تحول رقمي", "استشارات", "CRO"],
    link: "/services/consulting",
  },
  {
    title: "الأنظمة والأتمتة",
    description:
      "أنظمة ذكية تربط عمليات أعمالك وتساعدك على اتخاذ القرار الصحيح وبسرعة",
    icon: Cpu,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-500",
    tags: ["ERP", "CRM", "أتمتة"],
    link: "/services/automation-systems",
  },
  {
    title: "التسويق الرقمي",
    description: "خطط تسويقية مدروسة توصلك إلى جمهورك المستهدف وتنمي مبيعاتك",
    icon: Megaphone,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
    tags: ["سوشيال ميديا", "إعلانات", "SEO"],
    link: "/services/marketing",
  },
];

export const Services = () => {
  return (
    <section className="relative px-6 py-20 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10" dir="rtl">
        {/* العنوان */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#0047AB] text-sm font-semibold mb-4">
            حلولنا
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#011856] mb-4">
            حلول متكاملة لأعمالك
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            خدمات رقمية تجمع بين التقنية والتصميم والتشغيل ضمن رؤية واحدة
          </p>
        </div>

        {/* الشبكة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-white border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-[#0F172A] pt-2">
                    {service.title}
                  </h3>
                  <div
                    className={`w-14 h-14 shrink-0 rounded-xl flex items-center justify-center ${service.iconBg}`}
                  >
                    <Icon className={`w-6 h-6 ${service.iconColor}`} />
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium text-gray-500 bg-gray-50 border border-gray-100 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={service.link}
                  className="flex items-center gap-1.5 text-sm font-semibold text-[#0047AB] pt-4 border-t border-dashed border-gray-200"
                >
                  <span>استكشف المزيد</span>
                  <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
