const partners = ["Amazon", "Stripe", "Adobe", "Microsoft", "Google"];

export const Partners = () => {
  return (
    <section className="py-16 bg-[#1E293B] border-t border-white/5">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-500 text-sm mb-12 tracking-widest uppercase font-medium">شركاء النجاح والثقة</p>
        
        {/* التعديل: استخدام flex-wrap مع توزيع مريح للعين */}
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-10 md:gap-x-24 opacity-80">
          {partners.map((partner, i) => (
            <span 
              key={i} 
              className="text-2xl md:text-3xl font-black text-gray-500 hover:text-white transition-all duration-300 cursor-default select-none grayscale hover:grayscale-0 hover:scale-105"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};