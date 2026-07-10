"use client";

import { motion } from "framer-motion";
import { MessageCircle, CalendarDays, Sparkles } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-16 px-6" dir="rtl">
      <div className="website-container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden bg-gradient-to-br from-[#0A1A5C] via-[#0B1F63] to-[#050F3D] rounded-[2.5rem] px-8 py-14 lg:py-20 text-center"
        >
          {/* تأثير الإضاءة الخلفية */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.12] pointer-events-none hidden sm:block"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.5) 1.4px, transparent 1.4px)",
              backgroundSize: "22px 22px",
              maskImage:
                "radial-gradient(circle at 50% 30%, black, transparent 60%)",
              WebkitMaskImage:
                "radial-gradient(circle at 50% 30%, black, transparent 60%)",
            }}
          />

          {/* المحتوى */}
          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-blue-100 px-4 py-1.5 rounded-full text-xs font-bold mb-6"
            >
              <Sparkles size={14} className="text-[#5CA8F1]" />
              لنبدأ رحلتك معنا
            </motion.span>

            {/* العنوان */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl lg:text-5xl font-extrabold leading-tight text-white mb-5"
            >
              فريقنا جاهز يحوّل
              <br />
              <span className="text-[#5CA8F1]">فكرتك إلى واقع</span>
            </motion.h2>

            {/* الوصف */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-blue-100/80 text-base lg:text-lg mb-10 max-w-xl mx-auto"
            >
              تعرّفت على قصتنا وفريقنا، الآن حان وقت نبني شيئًا معًا. احجز
              استشارة مجانية ودعنا نسمع فكرتك.
            </motion.p>

            {/* الأزرار */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 bg-[#0047AB] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#003580] transition-colors shadow-lg whitespace-nowrap"
              >
                <span className="bg-white/15 p-1 rounded-md flex items-center justify-center">
                  <CalendarDays size={18} />
                </span>
                احجز استشارة مجانية
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                <span className="bg-white p-1 rounded-full flex items-center justify-center">
                  <MessageCircle
                    size={16}
                    className="text-green-500"
                    fill="currentColor"
                  />
                </span>
                تحدث معنا عبر واتساب
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
