import { Globe2, MapPin, Wifi } from "lucide-react";

const regions = ["فلسطين", "السعودية", "الإمارات", "قطر", "الكويت", "عُمان", "البحرين"];

export const ContactMap = () => {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16" dir="rtl">
      <div className="website-container">
        <div className="grid overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white shadow-[0_20px_60px_rgba(17,65,124,0.08)] lg:grid-cols-[.72fr_1.28fr]">
          <div className="relative flex flex-col justify-center overflow-hidden bg-[#071b4e] p-7 text-white sm:p-10 lg:p-12">
            <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-blue-500/20 blur-[85px]" />
            <div className="absolute -bottom-24 right-8 h-64 w-64 rounded-full bg-cyan-400/10 blur-[85px]" />
            <div className="relative">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-300"><Globe2 className="h-5 w-5" /></span>
              <span className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-bold text-blue-100"><Wifi className="h-4 w-4 text-cyan-300" /> نعمل بكفاءة عن بُعد</span>
              <h2 className="mt-5 text-2xl font-extrabold leading-[1.5] sm:text-3xl">نخدم الشركات في الوطن العربي والخليج</h2>
              <p className="mt-4 text-sm leading-7 text-blue-100/70">نتعاون مع الفرق والشركات إقليمياً عبر اجتماعات منتظمة، خطوات تنفيذ واضحة وقنوات تواصل مباشرة.</p>

              <div className="mt-7 flex flex-wrap gap-2">
                {regions.map((region) => (
                  <span key={region} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-bold text-blue-50/80">{region}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative min-h-[360px] bg-[#eaf3f8] sm:min-h-[440px]">
            <iframe
              title="خريطة الوطن العربي ودول الخليج"
              src="https://www.google.com/maps?q=Arabian+Gulf&z=4&output=embed"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <svg className="absolute inset-0 h-full w-full opacity-35" viewBox="0 0 800 480" fill="none" aria-hidden="true">
                <path d="M170 190C260 120 330 125 385 180C440 235 490 225 555 250C620 275 655 320 690 365" stroke="#075dc7" strokeWidth="2" strokeDasharray="7 9" />
                <path d="M385 180C455 145 525 155 575 205" stroke="#38bdf8" strokeWidth="2" strokeDasharray="6 8" />
              </svg>
              {[
                ["فلسطين", "36%", "31%"],
                ["السعودية", "52%", "57%"],
                ["الكويت", "61%", "39%"],
                ["البحرين", "66%", "48%"],
                ["قطر", "69%", "54%"],
                ["الإمارات", "77%", "61%"],
                ["عُمان", "84%", "72%"],
              ].map(([country, left, top]) => (
                <span key={country} className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200 bg-white/95 px-2.5 py-1 text-[10px] font-extrabold text-[#075dc7] shadow-md backdrop-blur sm:text-xs" style={{ left, top }}>
                  <span className="ml-1 inline-block h-1.5 w-1.5 rounded-full bg-cyan-500" />
                  {country}
                </span>
              ))}
            </div>
            <div className="pointer-events-none absolute bottom-4 right-4 flex items-center gap-2 rounded-xl border border-white/80 bg-white/90 px-4 py-3 text-xs font-bold text-[#071b4e] shadow-lg backdrop-blur">
              <MapPin className="h-4 w-4 text-[#075dc7]" />
              المنطقة العربية والخليج
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
