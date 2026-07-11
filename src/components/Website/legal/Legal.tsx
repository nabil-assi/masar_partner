"use client";

import { motion } from "framer-motion";

export function Legal({ index, title, body, isLast }: { index: number, title: string, body: string, isLast?: boolean }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      dir="rtl" id={`section-${index}`} className={`scroll-mt-24 pb-10 mb-10 ${isLast ? "" : "border-b border-gray-100"}`}
    >
      <div className="flex items-center gap-4 mb-5">
        <span className="w-10 h-10 rounded-2xl bg-blue-50 text-[#0047AB] font-black text-lg flex items-center justify-center shrink-0 border border-blue-100">{index}</span>
        <h3 className="text-xl font-extrabold text-[#011856]">{title}</h3>
      </div>
      <p className="text-gray-600 text-[15px] leading-8 pr-14 text-justify">{body}</p>
    </motion.div>
  );
}