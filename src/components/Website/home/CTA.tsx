import Image from 'next/image';
import { MessageCircle, CalendarDays, Zap, TrendingUp, ShieldCheck } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="py-20 px-6" dir="rtl">
      <div className="container mx-auto bg-[#0A1633] rounded-[3rem] p-8 lg:p-16 flex flex-col lg:flex-row-reverse items-center gap-12 relative overflow-hidden">
        
        {/* تأثير الإضاءة الخلفية */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]"></div>
        <div
          className="absolute inset-0 opacity-[0.15] pointer-events-none hidden sm:block"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1.4px, transparent 1.4px)",
            backgroundSize: "22px 22px",
            maskImage: "radial-gradient(circle at 25% 30%, black, transparent 60%)",
            WebkitMaskImage: "radial-gradient(circle at 25% 30%, black, transparent 60%)",
          }}
        ></div>

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
        <div className="w-full lg:w-1/2 space-y-8 text-white">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            جاهز تبدأ<br />
            خطوتك <span className="text-blue-500">الرقمية</span> القادمة؟
          </h2>
          <p className="text-blue-100 text-lg">
            احجز استشارة مجانية، ودعنا نساعدك في اختيار الحل المناسب لأعمالك.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 bg-[#0047AB] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#003580] transition-all shadow-lg">
              <span className="bg-white/15 p-1 rounded-md flex items-center justify-center">
                <CalendarDays size={18} />
              </span>
              احجز استشارة مجانية
            </button>
            <button className="flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">
              <span className="bg-white p-1 rounded-full flex items-center justify-center">
                <MessageCircle size={16} className="text-green-500" fill="currentColor" />
              </span>
              تحدث معنا عبر واتساب
            </button>
          </div>

          {/* المميزات السريعة */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
            <div className="flex flex-col gap-2 items-center text-center">
              <ShieldCheck size={24} className="text-blue-400" />
              <span className="text-xs">حلول مخصصة تناسب أعمالك</span>
            </div>
            <div className="flex flex-col gap-2 items-center text-center">
              <Zap size={24} className="text-blue-400" />
              <span className="text-xs">استجابة سريعة وفريق متخصص</span>
            </div>
            <div className="flex flex-col gap-2 items-center text-center">
              <TrendingUp size={24} className="text-blue-400" />
              <span className="text-xs">نساعدك على النمو والتوسع</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};