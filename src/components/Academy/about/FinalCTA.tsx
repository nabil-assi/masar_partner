export const FinalCTA = () => {
  return (
    <section className="py-24 px-44">
      <div className="container mx-auto">
        {/* تم تحويل px-44 إلى responsive container لضمان عدم انكسار التصميم على الموبايل */}
        <div className="bg-gradient-to-b from-[#222A3D] to-[#060E20] p-8 md:p-16 rounded-[40px] text-center shadow-2xl ">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 font-almarai">
            كن جزءاً من رحلتنا التعليمية اليوم
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed text-sm md:text-base font-almarai">
            سواء كنت تبحث عن بداية جديدة أو تطوير لمهاراتك الحالية، مسار هي بوصلتك نحو النجاح.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-[#FF6D00] to-[#FFB692] font-almarai text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-all">
              استعرض الدورات
            </button>
            <button className="bg-[#1e293b] border border-white/10 hover:bg-white/10 font-almarai text-white px-8 py-4 rounded-full font-bold transition-all">
              تحدث مع مستشار
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};