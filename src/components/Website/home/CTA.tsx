import Image from "next/image";

import {
  MessageCircle,
  CalendarDays,
  Zap,
  Clock,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

export const CTA = () => {
  return (
    <section className="" dir="rtl">
      <div className="container mx-auto bg-[#0A1633] rounded-[3rem] p-8   lg:p-16 flex flex-col lg:flex-row-reverse items-center gap-12 relative overflow-hidden">
        {/* تأثير الإضاءة الخلفية */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]"></div>
        <div
          className="absolute inset-0 opacity-[0.15] pointer-events-none hidden sm:block"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.5) 1.4px, transparent 1.4px)",
            backgroundSize: "22px 22px",
            maskImage:
              "radial-gradient(circle at 25% 30%, black, transparent 60%)",
            WebkitMaskImage:
              "radial-gradient(circle at 25% 30%, black, transparent 60%)",
          }}
        >
          {" "}
        </div>
 {/* الجانب الأيسر: الصورة */}
        <div className="relative w-full lg:w-1/2">
          <Image
            src="/Website/images/cta-laptop.png"
            alt="لوحة تحكم استراتيجية"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>
        {/* الجانب الأيمن: المحتوى */}
        <div dir="rtl" className="w-full lg:w-1/2 space-y-8 pt-2 text-white">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            جاهز تبدأ
            <br />
            <span className="text-blue-500">خطوتك الرقمية </span> القادمة؟
          </h2>
          <p className="text-blue-100 text-lg ">
            احجز استشارة مجانية، ودعنا نساعدك في اختيار الحل المناسب لأعمالك.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 bg-[#0047AB] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#003580] transition-all shadow-lg whitespace-nowrap">
              <span className="bg-white/15 p-1 rounded-md flex items-center justify-center">
                <CalendarDays size={18} />
              </span>
              احجز استشارة مجانية
            </button>
            <button className="flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all whitespace-nowrap">
              <span className="bg-white p-1 rounded-full flex items-center justify-center">
                <MessageCircle
                  size={16}
                  className="text-green-500"
                  fill="currentColor"
                />
              </span>
              تحدث معنا عبر واتساب
            </button>
          </div>

          {/* المميزات السريعة */}

          <div className="grid grid-cols-3 divide-x divide-white/10 pt-8  ">
            <div className="flex flex-col gap-3 items-center text-center px-2">
              <span className="relative flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7">
                <span className="absolute inset-0 bg-blue-500/25 blur-lg rounded-full"></span>
                <ShieldCheck
                  size={22}
                  className="relative text-blue-400 sm:w-6 sm:h-6"
                />
              </span>
              <span className="text-[11px] sm:text-xs leading-snug text-blue-50/90">
                حلول مخصصة تناسب أعمالك
              </span>
            </div>

            <div className="flex flex-col gap-3 items-center text-center px-2">
              <span className="relative flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7">
                <span className="absolute inset-0 bg-blue-500/25 blur-lg rounded-full"></span>
                <Clock
                  size={22}
                  className="relative text-blue-400 sm:w-6 sm:h-6"
                />
                <Zap
                  size={13}
                  className="absolute -bottom-1 -right-1 text-blue-400 fill-blue-400 z-10"
                />
              </span>
              <span className="text-[11px] sm:text-xs leading-snug text-blue-50/90">
                استجابة سريعة وفريق متخصص
              </span>
            </div>

            <div className="flex flex-col gap-3 items-center text-center px-2">
              <span className="relative flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7">
                <span className="absolute inset-0 bg-blue-500/25 blur-lg rounded-full"></span>
                <TrendingUp
                  size={22}
                  className="relative text-blue-400 sm:w-6 sm:h-6"
                />
              </span>
              <span className="text-[11px] sm:text-xs leading-snug text-blue-50/90">
                نساعدك على النمو والتوسع
              </span>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};
