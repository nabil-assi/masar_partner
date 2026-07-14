"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

// أيقونة LinkedIn مخصصة (lucide-react شال أيقونات العلامات التجارية)
const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="2" />
    <line x1="7" y1="10" x2="7" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="7" cy="6.5" r="1.3" fill="currentColor" />
    <path
      d="M11 17V10M11 13C11 11 12.5 10 14 10C15.5 10 16 11 16 13V17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const team = [
  {
    name: "مصطفى الصواف",
    role: "المؤسس والمدير التنفيذي",
    avatar: "/Website/images/about/team/avatar4.svg",
    linkedin: "#",
    cv: "#",
  },
  {
    name: "كريم زيدان",
    role: "مهندس برمجيات",
    avatar: "/Website/images/about/team/avatar3.svg",
    linkedin: "#",
    cv: "#",
  },
  {
    name: "عبدالرحمن محمد",
    role: "مطور مواقع",
    avatar: "/Website/images/about/team/avatar2.svg",
    linkedin: "#",
    cv: "#",
  },
  {
    name: "عبدالرحمن ياسر",
    role: "مطور تطبيقات موبايل",
    avatar: "/Website/images/about/team/avatar1.svg",
    linkedin: "#",
    cv: "#",
  },
  {
    name: "محمد الجداوي",
    role: "مطور واجهات وعمليات تطوير",
    avatar: "/Website/images/about/team/avatar5.svg",
    linkedin: "#",
    cv: "#",
  },
  {
    name: "عبدالله الشرقاوي",
    role: "مصمم واجهة وتجربة مستخدم",
    avatar: "/Website/images/about/team/avatar6.svg",
    linkedin: "#",
    cv: "#",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
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
    <section id="team" className="py-16 lg:py-20 px-6 bg-white" dir="rtl">
      <div className="container mx-auto max-w-6xl">
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
            تعرّف على خبرائنا
          </span>
        </motion.div>

        {/* العنوان */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl lg:text-4xl font-extrabold text-[#011856] mb-4">
            فريق العمل
          </h2>
          <p className="text-gray-500 text-sm lg:text-base">
            خبرات تقنية وإبداعية متكاملة تجمعنا هدف واحد: نجاحك.
          </p>
        </motion.div>

        {/* الشبكة */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {team.map((member, i) => (
            <motion.article
              key={i}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group flex flex-col items-center text-center rounded-2xl border border-gray-100 bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-[#0047AB]/20 transition-all duration-300"
            >
              {/* الصورة بحلقة زخرفية */}
              <div className="relative h-24 w-24 lg:h-28 lg:w-28 mb-5">
                <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative h-full w-full overflow-hidden rounded-full bg-blue-50 ring-4 ring-white shadow-sm">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* الاسم والمنصب */}
              <h3 className="font-extrabold text-[#011856] text-base lg:text-lg mb-1.5">
                {member.name}
              </h3>
              <p className="text-gray-500 text-xs lg:text-sm mb-5 leading-relaxed max-w-[200px]">
                {member.role}
              </p>

              {/* خط فاصل صغير */}
              <div className="w-10 h-px bg-gray-100 mb-5" />

              {/* أزرار السوشيال */}
              <div className="flex gap-3">
                
                <a  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`لينكدإن ${member.name}`}
                  className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-[#0047AB] hover:border-[#0047AB] hover:text-white transition-colors duration-200"
                >
                  <LinkedinIcon size={15} />
                </a>
                
                  <a href={member.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`السيرة الذاتية لـ ${member.name}`}
                  className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-[#0047AB] hover:border-[#0047AB] hover:text-white transition-colors duration-200"
                >
                  <FileText size={15} />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};