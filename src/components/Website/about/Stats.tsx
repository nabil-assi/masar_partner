"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { statsData } from "@/lib/stats-data";
import { AnimatedCounter } from "./AnimatedCounter";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const Stats = () => {
  return (
    <section className="py-16 lg:py-20 px-6" dir="rtl">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center"
        >
          {statsData.map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="flex flex-col items-center"
            >
              <div className="text-3xl lg:text-5xl font-extrabold text-[#0047AB] mb-2 flex items-center justify-center gap-1">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.isRating ? 1 : 0}
                />
              </div>

              <p className="text-gray-500 text-xs lg:text-sm leading-snug max-w-[160px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
