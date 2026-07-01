import { Eye, Target, CheckCircle2 } from "lucide-react";

export const VisionMission = () => {
  const values = [
    "الالتزام بأعلى معايير الجودة التعليمية.",
    "تمكينك من مهارات يطلبها سوق العمل فعلياً.",
    "كسر حاجز التلقين والمشاركة الفعالة في كل خطوة.",
    "تزويدك بالأدوات التي تضمن تطورك المهني المستمر.",
    "وضوح تام في رحلتك التعليمية من البداية وحتى الاحتراف.",
    "بيئة تعليمية تدعم المشاركة وتبادل الخبرات."
  ];

  return (
    <section className="py-24 bg-[#020617] text-white">
      {/* الحاوية الرئيسية التي تحيط بكل شيء - كما في الصورة */}
      <div className="container mx-auto px-6   rounded-3xl p-8  ">
        
        <h2 className="text-3xl font-bold mb-10 text-right font-almarai">رؤيتنا ورسالتنا ...</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* قسم القيم الأساسية (على اليمين) */}
          <div className="bg-[#161B22] p-8 rounded-2xl border border-blue-900/30">
            <h3 className="text-xl font-bold mb-6 text-right font-almarai">قيمنا الأساسية:</h3>
            <ul className="space-y-4">
              {values.map((value, i) => (
                <li key={i} className="flex items-center justify-end gap-3 text-gray-300">
                  <span className="text-right font-almarai">{value}</span>
                  <CheckCircle2 className="text-blue-500 shrink-0" size={20} />
                </li>
              ))}
            </ul>
          </div>

          {/* قسم الرؤية والرسالة (على اليسار) */}
          <div className="space-y-6">
            <div className="bg-[#1E293B] p-8 rounded-2xl border border-blue-900/30">
              <div className="flex justify-end mb-3">
                <Eye className="text-blue-500" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-right font-almarai">الرؤية</h3>
              <p className="text-gray-400 text-right text-sm leading-relaxed font-almarai">
                أن نكون المنصة العربية الأولى والموثوقة في تمكين الكوادر التقنية، من خلال سد الفجوة بين التعليم الأكاديمي ومتطلبات سوق العمل العالمي.
              </p>
            </div>

            <div className="bg-[#1E293B] p-8 rounded-2xl border border-blue-900/30">
              <div className="flex justify-end mb-3">
                <Target className="text-blue-500" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-right font-almarai">الرسالة</h3>
              <p className="text-gray-400 text-right text-sm leading-relaxed font-almarai ">
                تقديم تجربة تعليمية تطبيقية وفريدة يقودها خبراء ممارسون، لتمكين المتعلمين من تحويل شغفهم إلى مسيرة مهنية ناجحة ومستدامة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};