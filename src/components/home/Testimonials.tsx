import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'أحمد العتيبي',
    role: 'طالب مسار UI/UX',
    img: '/images/ahmed.png',
    quote: 'أفضل ما يميز المسار هو التركيز على بناء معرض أعمال حقيقي. تعلمت كيفية التفكير كمصمم وليس فقط كيفية استخدام الأدوات.',
  },
  {
    name: 'سارة الأحمد',
    role: 'خريجة مسار Flutter',
    img: '/images/sara.png',
    quote: 'كانت تجربتي مع أكاديمية مسار نقطة تحول حقيقية في مسيرتي المهنية. المحتوى العملي والمتابعة الدقيقة ساعدتني في الحصول على وظيفتي الأولى كمطورة تطبيقات.',
  },
];

export const Testimonials = () => (
  <section className="py-20 bg-[#0F172A] text-white" dir="rtl">
    <div className="container mx-auto px-6">
      {/* العنوان مع خط تحته */}
      <div className="text-center mb-16 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">ماذا يقول طلابنا؟</h2>
        <div className="w-20 h-1.5 bg-[#f4a261] rounded-full"></div>
      </div>
      
      {/* Grid متجاوب */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <div 
            key={i} 
            className="bg-[#1E293B] p-8 md:p-10 rounded-3xl border border-white/5 hover:border-[#f4a261]/30 transition-all duration-300 flex flex-col"
          >
            {/* الصورة والاسم */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/10 shrink-0">
                <Image src={t.img} alt={t.name} fill className="object-cover" />
              </div>
              <div className="text-right">
                <h4 className="font-bold text-lg">{t.name}</h4>
                <p className="text-sm text-gray-400">{t.role}</p>
              </div>
            </div>

            {/* النص */}
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 flex-grow">
              "{t.quote}"
            </p>
            
            {/* النجوم */}
            <div className="flex gap-1 justify-start">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-[#f4a261] text-[#f4a261]" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);