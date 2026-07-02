import { Mail, X, Send, ChevronLeft } from "lucide-react";
import Image from "next/image";

const faqLinks = [
  "الأسئلة الشائعة",
  "الدعم و المساعدة",
  "سياسة الخصوصية",
  "الشروط و الأحكام",
];

const mainLinks = [
  "الرئيسية",
  "الخدمات",
  "من نحن",
  "المدونة",
  "تواصل معنا",
];

const socials = [ X, Mail];

export const Footer = () => {
  return (
    <footer  className="bg-white pt-10 pb-6 px-4 font-almarai" dir="ltr">
         {/* البطاقة الرئيسية */}
        <div className="bg-[#F8FAFC] rounded-[2rem] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.04)] px-8 sm:px-12 py-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-gray-200">
            {/* عمود الاشتراك بالنشرة (يمين) */}
            <div className="flex flex-col items-center text-center pb-8 md:pb-0">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <Mail size={20} className="text-[#0047AB]" />
              </div>
              <h4 className="font-bold text-[#0F172A] mb-5">
                اشترك ليصلك جديدنا
              </h4>
              <div className="w-full space-y-3">
                <div className="relative">
                  <Mail
                    size={16}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="email"
                    placeholder="أدخل بريدك الإلكتروني"
                    className="bg-white border text-black border-gray-200 rounded-xl pr-11 pl-4 py-3 text-sm w-full outline-none focus:border-[#0047AB] text-right"
                  />
                </div>
                <button className="bg-[#0047AB] w-full py-3 rounded-xl text-sm font-bold text-white hover:bg-[#003580] transition flex items-center justify-center gap-2">
                  اشترك الآن
                  <Send size={15} />
                </button>
              </div>
            </div>

            {/* عمود الأسئلة والدعم */}
            <div className="pt-8 md:pt-0 md:px-8">
              <ul className="space-y-5 text-sm">
                {faqLinks.map((link, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between text-[#0F172A] font-medium hover:text-[#0047AB] cursor-pointer transition"
                  >
                    {link}
                    <ChevronLeft size={16} className="text-[#0047AB]" />
                  </li>
                ))}
              </ul>
            </div>

            {/* عمود الروابط الرئيسية */}
            <div className="pt-8 md:pt-0 md:px-8">
              <ul className="space-y-5 text-sm">
                {mainLinks.map((link, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between text-[#0F172A] font-medium hover:text-[#0047AB] cursor-pointer transition"
                  >
                    {link}
                    <ChevronLeft size={16} className="text-[#0047AB]" />
                  </li>
                ))}
              </ul>
            </div>

            {/* عمود الشعار */}
            <div className="pt-8 md:pt-0 md:pr-8 flex flex-col items-center md:items-start text-center md:text-right">
              <div className="flex items-center gap-2 font-extrabold text-3xl mb-4">
                 <div className="relative w-50 h-25">
                  <Image
                    src="/icons/logo-web.png"
                    alt="مسار"
                    fill  
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[220px] mb-6">
                حلول رقمية متكاملة تساعد أعمالك على النمو بكفاءة ووضوح واستدامة
              </p>
              <div className="flex gap-3">
                {socials.map((Icon, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-[#0047AB] hover:border-[#0047AB] hover:text-white text-[#0F172A] transition-colors cursor-pointer"
                  >
                    <Icon size={15} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* شريط الحقوق */}
        <div className="bg-[#F8FAFC] rounded-2xl border border-gray-100 mt-4 py-4 text-center text-gray-500 text-sm">
          © مسار. جميع الحقوق محفوظة.
        </div>
     </footer>
  );
};