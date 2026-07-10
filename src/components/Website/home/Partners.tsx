const partners = ["Amazon", "Stripe", "Adobe", "Microsoft", "Google"];

export const Partners = () => {
  const loopedPartners = [...partners, ...partners];

  return (
    <section className="py-1 border-t border-gray-100 overflow-hidden">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0%); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 25s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400 text-xs font-bold mb-8 tracking-wide">
          موثوق من قبل شركات رائدة
        </p>

        <div className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="marquee-track flex w-max gap-x-16 md:gap-x-24">
            {loopedPartners.map((partner, i) => (
              <span
                key={i}
                className="text-2xl md:text-3xl font-black text-gray-300 hover:text-[#0047AB] transition-all duration-300 cursor-default select-none grayscale hover:grayscale-0 hover:scale-105 shrink-0"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};