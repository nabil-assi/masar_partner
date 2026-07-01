export const PartnersSection = () => {
  const partners = [
    "FUTURE.CO",
    "CLOUDCORE",
    "NEXUS",
    "DIGITAL.IO",
    "TECHCORP"
  ];

  return (
    <section className="py-16 bg-[#1E293B] border-y border-white/5">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-500 text-sm mb-12 uppercase tracking-[0.2em] font-almarai">شركاء نثق بهم</p>
        
        {/* استخدام Flex بدلاً من Grid لضمان توازن التوزيع على كل الشاشات */}
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-20">
          {partners.map((partner, i) => (
            <div 
              key={i} 
              className="text-white/60 font-black text-lg md:text-xl tracking-widest hover:text-orange-500 transition-all duration-300 cursor-default select-none font-almarai hover:scale-110"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};