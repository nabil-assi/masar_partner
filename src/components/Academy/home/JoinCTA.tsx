export const JoinCTA = () => {
  return (
    <section className="py-20 bg-[#0F172A] px-52">
      <div className="container mx-auto py-12">
        <div className="bg-[#1E293B] rounded-[2rem] p-12 md:p-20 flex flex-col items-center text-center border border-white/10 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            جاهز تبدأ رحلتك المهنية؟
          </h2>

          <p className="text-gray-400 mb-10 max-w-lg text-lg">
            انضم إلى مجتمعنا التعليمي اليوم واحصل على خصم 25% على أول مسار
            تختاره.
          </p>

          <button className="bg-[#FF6D00] text-white font-bold py-4 px-14 rounded-full text-lg shadow-lg shadow-[#FF6D00]/30 transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl active:scale-95">
            انضم الآن
          </button>
        </div>
      </div>
    </section>
  );
};
