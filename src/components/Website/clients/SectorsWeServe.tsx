"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  ShieldPlus,
  Store,
  Truck,
  UtensilsCrossed,
  Home,
} from "lucide-react";

const sectors = [
  {
    icon: GraduationCap,
    title: "التعليم والتدريب",
    description: "منصات تعليمية، أنظمة إدارة دورات، ومحتوى تفاعلي.",
  },
  {
    icon: ShieldPlus,
    title: "الصحة والعيادات",
    description: "أنظمة حجز إدارة مرضى، وحلول CRM طبية.",
  },
  {
    icon: Store,
    title: "التجارة والتجزئة",
    description: "متاجر إلكترونية، أنظمة نقاط بيع، وحلول تشغيل متكاملة.",
  },
  {
    icon: Truck,
    title: "اللوجستيات والتوصيل",
    description: "أنظمة تتبع، ربط مع شركات الشحن، ولوحات تحكم.",
  },
  {
    icon: UtensilsCrossed,
    title: "المطاعم والضيافة",
    description: "تطبيقات طلبات، إدارة فروع، وحلول ولاء.",
  },
  {
    icon: Home,
    title: "العقارات",
    description: "مواقع عرض، أنظمة عملاء محتملين، وإدارة وحدات.",
  },
];

export const SectorsWeServe = () => {
  return (
    <section className="py-16 lg:py-20 px-6 bg-white" dir="rtl">
      <div className="container mx-auto max-w-6xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-5"
        >
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#0047AB] px-4 py-1.5 rounded-full text-xs font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0047AB]" />
            قطاعات نخدمها
          </span>
        </motion.div>

        {/* العنوان */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl lg:text-4xl font-extrabold text-[#011856] mb-14"
        >
          خبرة عميقة في قطاعات متعددة
        </motion.h2>

        {/* الشبكة */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-right"
        >
          {sectors.map((sector, i) => {
            const Icon = sector.icon;
            const isHighlighted = i === 1; // نفس ترتيب البطاقة المميزة بالصورة

            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1] as const,
                    },
                  },
                }}
                whileHover={{ y: -6 }}
                className={`rounded-2xl p-6 lg:p-8 transition-shadow duration-300 ${
                  isHighlighted
                    ? "bg-blue-50/60 border-2 border-[#0047AB] shadow-lg shadow-blue-900/10"
                    : "bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                    isHighlighted ? "bg-[#0047AB]" : "bg-blue-50"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      isHighlighted ? "text-white" : "text-[#0047AB]"
                    }`}
                  />
                </div>

                <h3 className="text-base lg:text-lg font-extrabold text-[#011856] mb-2">
                  {sector.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {sector.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};