"use client";
import Image from "next/image";
import { CheckCircle2, Quote } from "lucide-react";
import { motion } from "framer-motion";

const checklistItems = [
  "حلول رقمية مبتكرة",
  "فريق محترف وذو خبرة",
  "تركيزنا على العميل",
];

export const AboutIntro = () => {
  return (
    <section className="py-16 lg:py-20 px-6 bg-white" dir="rtl">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          {/* المحتوى النصي */}
          <div className="order-2 text-right pb-8 lg:pb-0">
            {/* Badge */}
            <span className="text-xs font-bold text-blue-600 block mb-3">
              من نحن
            </span>

            {/* العنوان */}
            <h2 className="text-2xl lg:text-4xl font-extrabold leading-[1.5] mb-6">
              <span className="text-gray-900">عن </span>
              <span className="text-blue-600">مسار</span>
            </h2>

            {/* الفقرات */}
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-5">
              مسار هي شركة حلول رقمية وتسويقية ذات رؤية مستقبلية، مبنية على
              إيمان بسيط: كل فكرة تستحق الفرصة لتكبر.
            </p>

            <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-8">
              نجمع بين الخبرة والإبداع لنحقق نتائج استثنائية، سواء كان تصميم
              هوية جديدة، تطبيق ويب متطور، أو حملة تسويقية. نحن شركاء نجاحك.
            </p>

            {/* قائمة التشيك مارك */}
            <div className="space-y-4">
              {checklistItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 max-w-[260px]" // أضفنا gap-3 للمسافة
                >
                  {/* الأيقونة أصبحت هنا في البداية (جهة اليمين في rtl) */}
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  </div>

                  {/* النص أصبح هنا بعد الأيقونة */}
                  <span className="text-gray-800 text-sm font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* الصورة + بطاقة الاقتباس */}
          <div className="order-1 relative">
            <div className="relative w-full h-72 sm:h-96 lg:h-[420px] rounded-3xl overflow-hidden bg-gray-100">
              <Image
                src="/Website/images/about/about_intro.svg"
                alt="شبكة تعاون مسار"
                fill
                className="object-cover"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute -bottom-8 right-4 sm:right-8 max-w-[260px] sm:max-w-[280px] 
             bg-[#0A1A5C]/80 backdrop-blur-md border border-white/20 
             rounded-2xl p-5 shadow-2xl"
            >
              <Quote className="w-4 h-4 text-blue-300 mb-2 rotate-180" />
              <p className="text-white text-sm font-bold leading-relaxed mb-3">
                "كل فكرة تستحق الفرصة لتكبر دون خوف أو قلق."
              </p>
              <span className="text-blue-300 text-xs font-bold">فلسفتنا</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
