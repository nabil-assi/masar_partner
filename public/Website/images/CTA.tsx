import Image from "next/image";
import {
  MessageCircle,
  CalendarDays,
  Zap,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

export const CTA = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12">
      <div
        dir="rtl"
        className="container mx-auto bg-[#0A1633] rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-16 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-12 relative overflow-hidden"
      >
        {/* تأثير الإضاءة الخلفية */}
        <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 sm:w-72 sm:h-72 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div
          className="absolute inset-0 opacity-[0.15] pointer-events-none hidden sm:block"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.5) 1.4px, transparent 1.4px)",
            backgroundSize: "22px 22px",
            maskImage:
              "radial-gradient(circle at 75% 30%, black, transparent 60%)",
            WebkitMaskImage:
              "radial-gradient(circle at 75% 30%, black, transparent 60%)",
          }}
        ></div>

        {/* الجانب الأيمن: المحتوى */}
        <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-white text-center lg:text-right relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            جاهز تبدأ
            <br />
            <span className="text-blue-500">خطوتك الرقمية</span> القادمة؟
          </h2>
          <p className="text-blue-100 text-base sm:text-lg max-w-md mx-auto lg:mx-0">
            احجز استشارة مجانية، ودعنا نساعدك في اختيار الحل المناسب لأعمالك.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button className="flex items-center justify-center gap-2 bg-[#0047AB] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold hover:bg-[#003580] transition-all shadow-lg">
              <span className="bg-white/15 p-1 rounded-md flex items-center justify-center">
                <CalendarDays size={18} />
              </span>
              احجز استشارة مجانية
            </button>
            <button className="flex items-center justify-center gap-2 border border-white/20 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold hover:bg-white/10 transition-all">
              <span className="bg-white p-1 rounded-full flex items-center justify-center">
                <MessageCircle size={16} className="text-green-500" fill="currentColor" />
              </span>
              تحدث معنا عبر واتساب
            </button>
          </div>

          {/* المميزات السريعة */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-white/10">
            <div className="flex flex-col gap-2 items-center text-center">
              <TrendingUp size={22} className="text-blue-400 sm:w-6 sm:h-6" />
              <span className="text-[11px] sm:text-xs leading-snug">
                نساعدك على النمو والتوسع
              </span>
            </div>
            <div className="flex flex-col gap-2 items-center text-center">
              <Zap size={22} className="text-blue-400 sm:w-6 sm:h-6" />
              <span className="text-[11px] sm:text-xs leading-snug">
                استجابة سريعة وفريق متخصص
              </span>
            </div>
            <div className="flex flex-col gap-2 items-center text-center">
              <ShieldCheck size={22} className="text-blue-400 sm:w-6 sm:h-6" />
              <span className="text-[11px] sm:text-xs leading-snug">
                حلول مخصصة تناسب أعمالك
              </span>
            </div>
          </div>
        </div>

        {/* الجانب الأيسر: الصورة */}
        <div className="relative w-full lg:w-1/2 max-w-md lg:max-w-none mx-auto">
          <Image
            src="/Website/images/cta-laptop.png"
            alt="لوحة تحكم استراتيجية"
            width={600}
            height={400}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};
