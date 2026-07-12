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
    <section className="bg-[#f8fbff] py-20 sm:py-24">
      <div className="website-container relative z-10 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#dfe8ff] bg-white px-5 py-2 text-sm font-bold text-[#3b5998] shadow-sm">
          <span>آراء العملاء</span>
          <svg
            className="h-5 w-5"
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

        <h2 className="mt-6 text-3xl font-extrabold tracking-[-0.02em] text-[#071b4e] sm:text-4xl">
          ثقة عملائنا تصنع فرقاً
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
          نتائج حقيقية، تعاون واضح، وتقدير من فرق عمل اختارتنا كمspartner طويل الأمد.
        </p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {testimonials.map((t, index) => (
            <motion.article
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.12, duration: 0.45 },
                },
              }}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`flex h-full flex-col rounded-[1.5rem] border p-7 text-right shadow-sm transition-all duration-300 sm:p-8 ${
                t.isFeatured
                  ? "border-[#0b4bbd] bg-[#071b4e] text-white shadow-[0_20px_60px_rgba(7,27,78,0.16)]"
                  : "border-slate-200/80 bg-white text-slate-800 shadow-[0_15px_35px_rgba(15,23,42,0.04)]"
              }`}
            >
              <div className={`text-4xl ${t.isFeatured ? "text-blue-200" : "text-[#075dc7]"}`}>❝</div>
              <p className="mt-5 flex-1 text-[15px] leading-8">{t.text}</p>

              <div className={`mt-7 h-px w-16 ${t.isFeatured ? "bg-white/20" : "bg-slate-200"}`} />

              <div className="mt-6 flex items-center justify-between gap-4">
                <div className="text-right">
                  <h4 className="text-base font-extrabold">{t.name}</h4>
                  <p className={`mt-1 text-sm ${t.isFeatured ? "text-blue-100" : "text-slate-500"}`}>{t.role}</p>
                  <p className={`mt-1 text-xs ${t.isFeatured ? "text-blue-100/80" : "text-slate-400"}`}>{t.company}</p>
                </div>
                <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/10">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={56}
                    height={56}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
