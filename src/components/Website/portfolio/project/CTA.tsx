import Link from "next/link";
import { MessageCircle, CalendarDays, ArrowRight } from "lucide-react";

interface ProjectCTAProps {
  serviceTitle?: string;
  serviceSlug?: string;
}

export const ProjectCTA = ({ serviceTitle, serviceSlug }: ProjectCTAProps) => {
  return (
    <section className="py-12 px-4 bg-white" dir="rtl">
      <div className="max-w-4xl mx-auto bg-[#0B1F63] rounded-2xl p-8 lg:p-12 border border-white/10 shadow-xl overflow-hidden relative">
        
        {/* محتوى مركزي ومُحكم */}
        <div className="relative z-10 text-center text-white">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            تواجه تحديات مشابهة؟ <span className="text-blue-400">دعنا نجد الحل</span>
          </h2>
          
          <p className="text-blue-100/80 text-sm lg:text-base mb-8 max-w-lg mx-auto">
            احصل على استشارة تقنية مجانية لتحليل وضعك الحالي وتحديد خارطة الطريق الأنسب لمشروعك.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all">
              <CalendarDays size={16} />
              احجز استشارة
            </button>
            <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all border border-white/10">
              <MessageCircle size={16} className="text-green-400" />
              تواصل عبر واتساب
            </button>
          </div>

          {serviceTitle && serviceSlug && (
            <Link
              href={`/Website/services/${serviceSlug}`}
              className="inline-flex items-center gap-1 mt-8 text-xs font-medium text-blue-300 hover:text-white transition-colors"
            >
              استكشف تفاصيل خدمة {serviceTitle}
              <ArrowRight size={14} />
            </Link>
          )}
        </div>

        {/* خلفية بسيطة جداً (بدون ضجيج) */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none" />
      </div>
    </section>
  );
};