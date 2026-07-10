"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "أحمد عبيدالله",
    role: "المدير التنفيذي",
    company: "شركة نبض الطبية",
    text: "بفضل فريق مسار احترافيتهم العالية وفهمهم العميق لاحتياجاتنا، استطعنا تحقيق نمو بجودة تفوق توقعاتنا وفي الوقت المحدد.",
    image: "/Website/avatars/ahmed.png",
  },
  {
    name: "سارة الحميدي",
    role: "مديرة العمليات",
    company: "منصة آفاق التعليمية",
    text: "منصة متكاملة غيرت عملنا بالكامل. التكامل بين الجوانب التقنية والتصميم كانت تجربة سلسة وناجحة بكل المقاييس.",
    image: "/Website/avatars/sara.png",
    isFeatured: true,
  },
  {
    name: "محمد الزهراني",
    role: "مؤسس",
    company: "متجر النخبة الإلكتروني",
    text: "تعاون رائع من البداية للنهاية، استمعوا لنا جيداً وفهموا رؤيتنا، وكانت النتيجة أعلى للنمو وتحقيق نتائج مميزة.",
    image: "/Website/avatars/ahmed.png",
  },
];

export const Testimonials = () => {
  return (
    <section className="relative  overflow-hidden  ">
      <div className="website-container text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-6 py-2 mb-5 bg-[#f0f4ff] text-[#3b5998] rounded-full text-sm font-bold border border-[#e0e7ff]">
          <span>آراء العملاء</span>
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            <path d="M8 9h8"></path>
            <path d="M8 13h4"></path>
          </svg>
        </div>
        <h2 className="text-4xl font-bold text-[#00116e] mb-16">
          ثقة عملائنا تصنع فرقاً
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
        >
          
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.2, duration: 0.5 },
                },
              }}
              whileHover={{ y: -10 }}
              className={`p-10 rounded-3xl transition-shadow duration-300 ${
                t.isFeatured
                  ? "bg-[#002D72] text-white shadow-2xl md:scale-110 z-10"
                  : "bg-white text-gray-800 shadow-lg hover:shadow-xl"
              }`}
            >
              
              <div
                className={`text-4xl mb-8 ${t.isFeatured ? "text-blue-300" : "text-[#002D72]"}`}
              >
                ❝
              </div>
              <p className="text-lg leading-relaxed mb-10">{t.text}</p>
              <div
                className={`w-1/5 mx-auto mb-6 border-t ${t.isFeatured ? "border-white/25" : "border-gray-200"}`}
              ></div>

              <div className="flex items-center justify-center gap-4">
                <div className="text-right">
                  <h4 className="font-bold">{t.name}</h4>
                  <p
                    className={`text-sm ${t.isFeatured ? "text-blue-200" : "text-gray-500"}`}
                  >
                    {t.role}
                  </p>
                  <p className="text-xs opacity-70">{t.company}</p>
                </div>
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/10">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
