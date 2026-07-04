import { LucideIcon, ArrowLeft } from "lucide-react";

interface WhoItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface WhoIsItForProps {
  badge: string;
  title: string[];
  description: string;
  ctaLabel: string;
  items: WhoItem[];
}

export const WhoIsItFor = ({
  badge,
  title,
  description,
  ctaLabel,
  items,
}: WhoIsItForProps) => {
  return (
    <section className="py-20 px-6 bg-white" dir="rtl">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* الشبكة */}
          <div className="grid grid-cols-2 gap-4">
            {items.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-[#F5F8FF] border border-gray-100 text-right"
                >
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm">
                    <Icon className="w-4 h-4 text-[#0047AB]" />
                  </div>
                  <h3 className="text-sm font-bold text-[#011856] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
          {/* العمود النصي */}
          <div className="text-right">
            <span className="inline-flex items-center gap-2 bg-blue-50 text-[#0047AB] px-4 py-1.5 rounded-full text-xs font-bold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0047AB]" />
              {badge}
            </span>

            <h2 className="text-2xl lg:text-4xl font-extrabold text-[#011856] leading-[1.4] mb-6">
              {title[0]} <br />
              {title[1]}
            </h2>

            <p className="text-gray-500 text-sm lg:text-base leading-relaxed mb-8 max-w-md">
              {description}
            </p>

            <button className="inline-flex items-center gap-2 bg-[#011856] hover:bg-[#0a2470] transition-colors text-white font-bold px-6 py-3 rounded-xl text-sm">
              <ArrowLeft size={16} />
              {ctaLabel}
            </button>
          </div>

          
        </div>
      </div>
    </section>
  );
};
