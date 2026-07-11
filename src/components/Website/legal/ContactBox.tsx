"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

interface LegalContactBoxProps {
  heading: string;
  subtext: string;
  email: string;
  buttonLabel?: string;
}

export function ContactBox({
  heading,
  subtext,
  email,
  buttonLabel = "راسلنا مباشرة",
}: LegalContactBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      dir="rtl"
      className="mt-2 bg-gradient-to-br from-[#0047AB] to-[#0a5fd6] rounded-3xl px-8 py-7 flex flex-wrap items-center justify-between gap-4"
    >
      <div className="text-right text-white">
        <p className="font-extrabold text-[15px] mb-1">{heading}</p>
        <p className="text-sm text-white/80">{subtext}</p>
      </div>

      <motion.a
        href={`mailto:${email}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center gap-2 bg-white text-[#0047AB] font-extrabold text-sm px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors"
      >
        <Mail size={16} />
        {buttonLabel}
      </motion.a>
    </motion.div>
  );
}