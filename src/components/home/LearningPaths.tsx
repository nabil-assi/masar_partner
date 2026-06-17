import { CheckCircle2 } from 'lucide-react';

const paths = [
  {
    title: 'مهندس ذكاء اصطناعي',
    desc: 'تعمق في الشبكات العصبية، ونمذجة البيانات، و الأنظمة الذكية.',
    stats: ['7 وحدات تقنية', 'الرياضيات للذكاء الاصطناعي'],
  },
  {
    title: 'أخصائي UI/UX',
    desc: 'أتقن فن تصميم تجارب رقمية جميلة وسهلة الاستخدام من الصفر.',
    stats: ['4 دورات مكثفة', 'تطوير معرض أعمال (Portfolio)'],
  },
  {
    title: 'مطور تطبيقات Flutter',
    desc: 'طوّر تطبيقات موبايل متعددة المنصات لنظامي iOS و Android بكود واحد فقط.',
    stats: ['6 دورات متضمنة', 'مشاريع واقعية'],
  },
];

export const LearningPaths = () => {
  return (
    <section className="py-20 bg-[#0F172A]" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-3 font-almarai">مسارات التعلم</h2>
          <div className="w-20 h-1 bg-[#f4a261] rounded-full"></div>
        </div>

        <div className="grid grid-cols-1  md:grid-cols-3 gap-6">
          {paths.map((path, i) => (
            <div 
              key={i} 
              className={`p-8 bg-[#1E293B] rounded-2xl border transition-all duration-300 flex flex-col items-start text-right ${
                i === 2 
                  ? 'border-[#3b82f6] shadow-[0_0_20px_rgba(59,130,246,0.15)]' 
                  : 'border-white/5 hover:border-white/10'
              }`}
            >
              <h3 className="text-2xl   text-white mb-4 font-almarai">{path.title}</h3>
              <p className="text-gray-400 mb-8 text-sm leading-relaxed font-almarai">{path.desc}</p>
              
              <div className="w-full space-y-3 mb-8">
                {path.stats.map((stat, idx) => (
                  <div key={idx} className="flex items-center justify-start gap-3 text-gray-300 text-sm">
                    <CheckCircle2 size={18} className="text-[#f4a261]" />
                    <span className="font-almarai">{stat}</span>
                  </div>
                ))}
              </div>

              <div className="w-full mt-auto">
                <button className="w-full py-3.5 font-almarai border border-[#f4a261]/30 text-white rounded-3xl font-bold transition-all text-sm hover:bg-[#f4a261]/10">
                  استكشف المسار
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};