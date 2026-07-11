"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "تعاملنا مع Code & Key لإعادة بناء متجرنا وربط نظام أودو. النتيجة فاقت توقعاتنا والمتابعة بعد الإطلاق كانت نقطة قوة حقيقية.",
    name: "خالد المطيري",
    role: "مدير عام، متجر إلكتروني",
    avatarLetter: "خ",
  },
  {
    quote:
      "النظام الذي بنوه لنا غيّر طريقة عملنا بالكامل، من الحجز حتى المتابعة بعد الجلسة. فريق محترف يفهم احتياج العميل.",
    name: "سارة العتيبي",
    role: "مؤسسة، عيادة تجميل",
    avatarLetter: "س",
  },
  {
    quote:
      "وجدنا في مسار شريكًا تقنيًا يهتم بالتفاصيل. حلولهم منظمة وواقعية وقابلة للتطبيق فعليًا، لا مجرد أفكار نظرية.",
    name: "عبدالله الشمري",
    role: "رئيس تنفيذي، شركة عقارية",
    avatarLetter: "ع",
  },
  {
    quote:
      "ساعدونا في بناء حملات أكثر فاعلية ومحتوى يعكس هوية علامتنا. التواصل سلس والنتائج ملموسة.",
    name: "نورة القحطاني",
    role: "مديرة تسويق، سلسلة مطاعم",
    avatarLetter: "ن",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-16 lg:py-20 px-6 bg-[#F5F8FF]" dir="rtl">
      <div className="container mx-auto max-w-6xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-5"
        >
          <span className="inline-flex items-center gap-2 bg-white border border-blue-100 text-[#0047AB] px-4 py-1.5 rounded-full text-xs font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0047AB]" />
            ماذا يقولون
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
          كلمات من قلوب شركائنا
        </motion.h2>

        {/* الشبكة */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 text-right"
        >
          {testimonials.map((testimonial, i) => (
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
              whileHover={{ y: -4 }}
              className="relative bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow duration-300 p-6 lg:p-8"
            >
              {/* علامة الاقتباس الزخرفية */}
              <Quote className="absolute top-6 left-6 w-8 h-8 text-blue-50" />

              {/* التقييم بالنجوم */}
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    size={16}
                    className="text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              {/* الاقتباس */}
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </p>

              {/* خط فاصل */}
              <div className="h-px bg-gray-100 mb-5" />

              {/* معلومات العميل */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-extrabold text-[#011856] mb-0.5">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-400 text-xs">{testimonial.role}</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#0047AB] flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {testimonial.avatarLetter}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};