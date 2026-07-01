import { Mail, Phone, MapPin, X } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-[#0F172A] pt-20 pb-10 text-white font-almarai" dir="rtl">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* العمود الأول: الشعار */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-2xl mb-4">
              <div className="relative w-10 h-10">
                <Image src="/icons/logo.svg" alt="أكاديمية مسار" fill className="object-contain" />
              </div> 
              أكاديمية مسار
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              المنصة العربية الرائدة لتمكين المبدعين والمبرمجين في العالم الرقمي.
            </p>
            <div className="flex gap-3 pt-4">
              {[FaFacebook, FaInstagram, X].map((Icon, i) => (
                <div key={i} className="w-10 h-10 rounded-xl bg-[#1E293B] flex items-center justify-center hover:bg-[#0047AB] transition-colors cursor-pointer">
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>

          {/* أعمدة الروابط */}
          {[
            { title: "عن الأكاديمية", links: ["من نحن", "فريق العمل", "سياسة الخصوصية", "الأحكام والشروط"] },
            { title: "روابط سريعة", links: ["تصفح الدورات", "الورش التدريبية", "الأسئلة الشائعة", "المدونة"] }
          ].map((section, idx) => (
            <div key={idx}>
              <h4 className="font-bold mb-6 text-[#0047AB]">{section.title}</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                {section.links.map((link, i) => (
                  <li key={i} className="hover:text-blue-400 cursor-pointer transition">{link}</li>
                ))}
              </ul>
            </div>
          ))}

          {/* التواصل */}
          <div className="space-y-4">
            <h4 className="font-bold mb-6 text-[#0047AB]">تواصل معنا</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <p className="flex items-center gap-3"><Mail size={16} /> info@masar.dev</p>
              <p className="flex items-center gap-3"><Phone size={16} /> 0097 0567 465 929</p>
              <p className="flex items-center gap-3"><MapPin size={16} /> غزة، فلسطين</p>
            </div>

            <div className="pt-4">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="bg-[#1E293B] border border-white/10 rounded-xl px-4 py-3 text-sm w-full outline-none focus:border-[#0047AB]"
                />
                <button className="bg-[#0047AB] px-6 py-3 rounded-xl text-sm font-bold hover:bg-[#003580] transition">
                  اشترك
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* الحقوق */}
        <div className="text-center text-gray-600 text-xs pt-8 border-t border-white/5">
          © 2026 Masar Academy. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
};