"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  { name: 'أحمد العتيبي', role: 'طالب مسار UI/UX', img: '/images/ahmed.png', quote: 'أفضل ما يميز المسار هو التركيز على بناء معرض أعمال حقيقي. تعلمت كيفية التفكير كمصمم وليس فقط كيفية استخدام الأدوات.' },
  { name: 'سارة الأحمد', role: 'خريجة مسار Flutter', img: '/images/sara.png', quote: 'كانت تجربتي مع أكاديمية مسار نقطة تحول حقيقية في مسيرتي المهنية. المحتوى العملي والمتابعة الدقيقة ساعدتني في الحصول على وظيفتي الأولى.' },
  { name: 'محمد خالد', role: 'مطور ويب', img: '/images/mohammed.png', quote: 'بيئة التعلم احترافية جداً، والتركيز على الجانب التطبيقي جعلني أتقدم بمستواي بشكل ملحوظ في وقت قصير.' },
  { name: 'سارة الأحمد', role: 'خريجة مسار Flutter', img: '/images/sara.png', quote: 'كانت تجربتي مع أكاديمية مسار نقطة تحول حقيقية في مسيرتي المهنية. المحتوى العملي والمتابعة الدقيقة ساعدتني في الحصول على وظيفتي الأولى.' },
  { name: 'سارة الأحمد', role: 'خريجة مسار Flutter', img: '/images/sara.png', quote: 'كانت تجربتي مع أكاديمية مسار نقطة تحول حقيقية في مسيرتي المهنية. المحتوى العملي والمتابعة الدقيقة ساعدتني في الحصول على وظيفتي الأولى.' },
  { name: 'سارة الأحمد', role: 'خريجة مسار Flutter', img: '/images/sara.png', quote: 'كانت تجربتي مع أكاديمية مسار نقطة تحول حقيقية في مسيرتي المهنية. المحتوى العملي والمتابعة الدقيقة ساعدتني في الحصول على وظيفتي الأولى.' },

];

export const Testimonials = () => (
  <section className="relative w-full min-h-screen flex flex-col justify-center py-20 bg-[#0F172A] text-white overflow-hidden" dir="rtl">
    <div className="w-full h-full px-6 md:px-16 flex flex-col justify-center">
      
      {/* العنوان */}
      <div className="text-center mb-16 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-4">ماذا يقول طلابنا؟</h2>
        <div className="w-20 h-1.5 bg-[#f4a261] rounded-full"></div>
      </div>

      {/* السلايدر */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        // تغيير المنشور كل 3 ثوانٍ
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
        // إضافة Padding Bottom كبير لمنع تداخل النقاط مع الكاردات
        className="!pb-16 w-full" 
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i} className="h-auto">
            <div className="bg-[#1E293B] p-8 rounded-3xl border border-white/10 hover:border-[#f4a261]/30 transition-all duration-300 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/10 shrink-0">
                  <Image src={t.img} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{t.name}</h4>
                  <p className="text-sm text-[#FFB692]">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">"{t.quote}"</p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-[#f4a261] text-[#f4a261]" />)}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    {/* تنسيق النقاط لتظهر بشكل واضح ومرتب أسفل الكاردات */}
    <style jsx global>{`
      .swiper-pagination-bullet { 
        background: #fff !important; 
        opacity: 0.4; 
        width: 10px; 
        height: 10px; 
      }
      .swiper-pagination-bullet-active { 
        background: #f4a261 !important; 
        opacity: 1; 
      }
    `}</style>
  </section>
);