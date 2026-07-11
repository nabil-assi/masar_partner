"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

export const OurClients = () => {
  return (
    <section className="py-16 lg:py-20 px-6 bg-white overflow-hidden" dir="rtl">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* الصورة + بطاقة الإحصائية العائمة */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            className="order-1 relative"
          >
            <div className="relative w-full h-72 sm:h-80 lg:h-[420px] rounded-3xl overflow-hidden bg-blue-50">
              <Image
                src="/Website/images/clients/ourClients.png"
                alt="عملاؤنا وشركاء نجاحنا"
                fill
                className="object-cover"
              />
            </div>

            {/* بطاقة الإحصائية العائمة */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 right-4 sm:right-8 bg-white border border-gray-100 rounded-2xl shadow-xl px-6 py-5 flex items-center gap-4"
            >
              <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-[#0047AB]" />
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">بعض من شركائنا</p>
                <p className="text-2xl font-extrabold text-[#011856]">50+</p>
              </div>
            </motion.div>
          </motion.div>

          {/* المحتوى النصي */}
          <div className="order-2 text-right pb-6 lg:pb-0">
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#0047AB] px-4 py-1.5 rounded-full text-xs font-bold mb-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#0047AB]" />
              ثقة متبادلة
            </motion.span>

            {/* العنوان */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl lg:text-4xl font-extrabold text-[#011856] leading-[1.5] mb-6"
            >
              أكثر من{" "}
              <span className="text-[#0047AB]">مجرد قائمة عملاء</span>
            </motion.h2>

            {/* الوصف */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-500 text-sm lg:text-base leading-relaxed"
            >
              كل علاقة بدأت كمشروع وتحوّلت إلى شراكة. نتابع العمل بعد
              التسليم، نطوّر المنصة بنمو النشاط، ونقدم المشورة عند كل قرار
              رقمي.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};