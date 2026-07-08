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

import { services } from "@/lib/services-data";

export const Services = () => {
  return (
    <section className="relative px-6 py-10 md:px-12 lg:px-24 bg-gray-50/30">
      <div className="max-w-6xl mx-auto relative z-10" dir="rtl">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#011856] mb-4">
            حلولنا الرئيسية
          </h2>
          <p className="text-[#011856] text-base">
            خدمات رقمية تجمع بين التقنية والتصميم والتشغيل
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.iconBg}`}
                >
                  <Icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>

                <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-[10px] font-bold rounded-full ${service.tagBg} ${service.tagText}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/services/${service.slug}`}
                  className="flex items-center gap-2 text-sm font-bold text-[#0047AB] mt-auto"
                >
                  <span>استكشف الخدمة</span>
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
