"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const services = [
  { value: "design", label: "العناية البصرية والتصميم" },
  { value: "mobile-apps", label: "تطبيقات الجوال" },
  { value: "websites", label: "تطوير المواقع والمنصات" },
  { value: "consulting", label: "استشارات الرقمية" },
  { value: "automation-systems", label: "الأنظمة والأتمتة" },
  { value: "marketing", label: "التسويق الرقمي" },
];

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isNotRobot, setIsNotRobot] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleChange = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "الاسم الكامل مطلوب";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "رقم الهاتف مطلوب";
    }
    if (!formData.service) {
      newErrors.service = "الرجاء اختيار خدمة";
    }
    if (
      formData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "البريد الإلكتروني غير صحيح";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate() || !isNotRobot) return;

    // هون مكان استدعاء الـ API الفعلي لإرسال الفورم
    console.log("Form submitted:", formData);

    setStatus("success");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
    setIsNotRobot(false);

    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section className="py-16 lg:py-20 px-6  " dir="rtl">
      <div className="website-container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* الفورم - يمين بالـ RTL */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="order-1 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-6 lg:p-8"
          >
            <h2 className="text-xl lg:text-2xl font-extrabold text-[#011856] mb-6">
              أرسل لنا رسالة
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* الاسم الكامل */}
              <div>
                <label className="block text-sm font-bold text-[#011856] mb-2">
                  الاسم الكامل <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  placeholder="أدخل اسمك الكامل"
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-[#011856] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0047AB]/20 transition-all ${
                    errors.fullName
                      ? "border-red-300"
                      : "border-gray-200 focus:border-[#0047AB]"
                  }`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1.5">
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* البريد الإلكتروني */}
              <div>
                <label className="block text-sm font-bold text-[#011856] mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="أدخل بريدك الإلكتروني"
                  dir="ltr"
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-[#011856] placeholder:text-gray-400 text-right focus:outline-none focus:ring-2 focus:ring-[#0047AB]/20 transition-all ${
                    errors.email
                      ? "border-red-300"
                      : "border-gray-200 focus:border-[#0047AB]"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1.5">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* رقم الهاتف */}
              <div>
                <label className="block text-sm font-bold text-[#011856] mb-2">
                  رقم الهاتف <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="أدخل رقم هاتفك"
                  dir="ltr"
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-[#011856] placeholder:text-gray-400 text-right focus:outline-none focus:ring-2 focus:ring-[#0047AB]/20 transition-all ${
                    errors.phone
                      ? "border-red-300"
                      : "border-gray-200 focus:border-[#0047AB]"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1.5">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* الخدمة المطلوبة */}
              <div>
                <label className="block text-sm font-bold text-[#011856] mb-2">
                  الخدمة المطلوبة <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => handleChange("service", e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0047AB]/20 transition-all ${
                    formData.service ? "text-[#011856]" : "text-gray-400"
                  } ${
                    errors.service
                      ? "border-red-300"
                      : "border-gray-200 focus:border-[#0047AB]"
                  }`}
                >
                  <option value="" disabled>
                    اختر خدمة
                  </option>
                  {services.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="text-red-500 text-xs mt-1.5">
                    {errors.service}
                  </p>
                )}
              </div>

              {/* الرسالة */}
              <div>
                <label className="block text-sm font-bold text-[#011856] mb-2">
                  رسالتك
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="اكتب رسالتك هنا..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#011856] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0047AB]/20 focus:border-[#0047AB] transition-all resize-none"
                />
              </div>

              {/* أنا لست روبوت */}
              <label className="flex items-center justify-between gap-3 border border-gray-200 rounded-xl px-4 py-3 cursor-pointer">
                <span className="text-sm text-gray-500">
                  أنا لست برنامج روبوت
                </span>
                <input
                  type="checkbox"
                  checked={isNotRobot}
                  onChange={(e) => setIsNotRobot(e.target.checked)}
                  className="w-5 h-5 rounded border-gray-300 text-[#0047AB] focus:ring-[#0047AB]/30"
                />
              </label>

              {/* زر الإرسال */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                disabled={!isNotRobot}
                className="w-full flex items-center justify-center gap-2 bg-[#0047AB] hover:bg-[#003580] disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl transition-colors"
              >
                <Send size={16} />
                <span>إرسال الرسالة</span>
              </motion.button>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm font-bold text-green-600 bg-green-50 rounded-xl py-3"
                >
                  تم إرسال رسالتك بنجاح، سنتواصل معك قريبًا.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* الخريطة - شمال بالـ RTL */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="order-2 rounded-3xl overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] min-h-[400px] lg:min-h-full"
          >
            <iframe
              src="https://www.google.com/maps?q=Tanta,Egypt&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقعنا على الخريطة"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
