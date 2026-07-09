"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";

const contactItems = [
  {
    icon: MessageCircle,
    title: "واتساب",
    value: "+201505294544",
    href: "https://wa.me/201505294544",
  },
  {
    icon: Mail,
    title: "راسلنا",
    value: "info@masar.com",
    href: "mailto:info@masar.com",
  },
  {
    icon: Phone,
    title: "اتصل بنا",
    value: "01505294544",
    href: "tel:01505294544",
  },
  {
    icon: MapPin,
    title: "العنوان",
    value: "طنطا، مصر",
    href: "#",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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

export const ContactInfo = () => {
  return (
    <section className="py-16 lg:py-20 px-6  " dir="rtl">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6"
        >
          {contactItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="flex flex-col items-center text-center rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow duration-300 p-6 lg:p-8"
              >
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-[#0047AB]" />
                </div>

                <h3 className="text-sm lg:text-base font-bold text-[#011856] mb-2">
                  {item.title}
                </h3>

                <p
                  className="text-gray-500 text-xs lg:text-sm break-all"
                  dir="ltr"
                >
                  {item.value}
                </p>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};