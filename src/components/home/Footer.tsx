import { Mail, Phone, MapPin, X } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa"; // استدعاء الأيقونات
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-[#1E293B] pt-20 pb-10 text-white" dir="rtl">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* العمود الأول (يسار): الشعار والوصف */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-almarai font-bold text-2xl mb-4">
              {/* استبدل المسار بصورة شعارك الحقيقية */}
              <div className="relative w-10 h-10 mb-4">
                <Image
                  src="/icons/logo.svg"
                  alt="أكاديمية مسار"
                  fill
                  className="object-contain"
                />
              </div>{" "}
              أكاديمية مسار
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-almarai">
              المنصة العربية الرائدة لتمكين المبدعين والمبرمجين في العالم الرقمي
              من خلال محتوى عالي الجودة وتجربة تعليمية فريدة.
            </p>
            <div className="flex gap-3 pt-4">
              <div className="w-8 h-8 rounded-full bg-[#162033] flex items-center justify-center hover:bg-orange-600 cursor-pointer">
                <FaFacebook size={16} />
              </div>
              <div className="w-8 h-8 rounded-full bg-[#162033] flex items-center justify-center hover:bg-orange-600 cursor-pointer">
                <FaInstagram size={16} />
              </div>
              <div className="w-8 h-8 rounded-full bg-[#162033] flex items-center justify-center hover:bg-orange-600 cursor-pointer">
                <X size={16} />
              </div>
            </div>
          </div>

          {/* العمود الثاني: عن الأكاديمية */}
          <div>
            <h4 className="font-bold mb-6 text-[#FF8C42] font-almarai">
              عن الأكاديمية
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition font-almarai">
                من نحن
              </li>
              <li className="hover:text-white cursor-pointer transition font-almarai">
                فريق العمل
              </li>
              <li className="hover:text-white cursor-pointer transition font-almarai">
                سياسة الخصوصية
              </li>
              <li className="hover:text-white cursor-pointer transition font-almarai">
                الأحكام والشروط
              </li>
            </ul>
          </div>

          {/* العمود الثالث: روابط سريعة */}
          <div>
            <h4 className="font-bold mb-6 text-[#FF8C42] font-almarai">
              روابط سريعة
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm  ">
              <li className="hover:text-white cursor-pointer transition font-almarai">
                تصفح الدورات
              </li>
              <li className="hover:text-white cursor-pointer transition font-almarai">
                الورش التدريبية
              </li>
              <li className="hover:text-white cursor-pointer transition font-almarai">
                الأسئلة الشائعة
              </li>
              <li className="hover:text-white cursor-pointer transition font-almarai">
                المدونة
              </li>
            </ul>
          </div>

          {/* العمود الرابع (في التصميم يظهر يميناً): تواصل معنا */}
          <div className="md:col-span-1 space-y-4">
            <h4 className="font-bold mb-6 text-[#FF8C42] font-almarai">
              تواصل معنا
            </h4>
            <div className="flex items-center gap-3 text-gray-400 text-sm font-almarai">
              <Mail size={16} /> info@masar.dev
            </div>
            <div className="flex items-center gap-3 text-gray-400 text-sm font-almarai">
              <Phone size={16} /> 0097 0567 465 929
            </div>
            <div className="flex items-center gap-3 text-gray-400 text-sm font-almarai">
              <MapPin size={16} /> غزة، فلسطين
            </div>

            <div className="pt-4">
              <p className="text-xs mb-2 text-gray-500 font-almarai">
                النشرة البريدية
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="bg-[#162033] border border-white/10 rounded-xl px-4 py-2 text-sm w-full text-right"
                />
                <button className="bg-[#FF8C42] px-6 py-2 rounded-xl text-sm font-almarai font-bold text-white hover:bg-orange-700 transition">
                  اشترك
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* الحقوق */}
        <div className="text-center text-gray-500 text-xs pt-8 border-t border-white/5 font-almarai">
          © 2026 Masar Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
