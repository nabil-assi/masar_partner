"use client";

import Image from "next/image";
import { motion ,Variants} from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { section } from "framer-motion/m";

const team = [
  {
    name: "عبدالرحمن ياسر",
    role: "مطور تطبيقات موبايل",
    avatar: "/Website/images/about/team/avatar1.svg",
  },
  {
    name: "عبدالرحمن محمد",
    role: "مطور مواقع",
    avatar: "/Website/images/about/team/avatar2.svg",
  },
  {
    name: "كريم زيدان",
    role: "مهندس برمجيات",
    avatar: "/Website/images/about/team/avatar3.svg",
  },
  {
    name: "مصطفى الصواف",
    role: "المؤسس والمدير التنفيذي",
    avatar: "/Website/images/about/team/avatar4.svg",
  },
  {
    name: "محمد الجداوي",
    role: "مطور الواجهة الأمامية وعمليات التطوير",
    avatar: "/Website/images/about/team/avatar5.svg",
  },
  {
    name: "عبدالله الشرقاوي",
    role: "مصمم واجهة وتجربة مستخدم",
    avatar: "/Website/images/about/team/avatar6.svg",
  },
];


const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const TeamSection = () => {
  return (
    <section className="py-16 lg:py-20 px-6  " dir="rtl">
      <div className="container mx-auto max-w-6xl text-center">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#0047AB] px-4 py-1.5 rounded-full text-xs font-bold mb-5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0047AB]" />
          تعرّف على خبرائنا
        </motion.span>

        {/* العنوان */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl lg:text-4xl font-extrabold text-[#011856] mb-14"
        >
          الأشخاص وراء نجاحنا
        </motion.h2>

        {/* الشبكة */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-6 lg:gap-8"
        >
          {team.map((member, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group flex flex-col items-center"
            >
              {/* الصورة بحلقة متحركة */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mb-5">
                {/* حلقة دوّارة زخرفية */}
                <motion.div
                  className="absolute -inset-2 rounded-full border-2 border-dashed border-blue-200"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* الصورة نفسها */}
                <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* الاسم والدور */}
              <h3 className="text-sm lg:text-base font-bold text-[#011856] mb-1 text-center">
                {member.name}
              </h3>
              <p className="text-gray-500 text-xs lg:text-sm text-center leading-snug">
                {member.role}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* رابط أسفل الشبكة */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-14"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0047AB] hover:text-[#003580] transition-colors"
          >
            <ArrowLeft size={16} />
            <span>فريقنا</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
