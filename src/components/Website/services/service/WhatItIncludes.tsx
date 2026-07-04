import { LucideIcon } from "lucide-react";

interface IncludeItem {
  icon: LucideIcon;
  title: string;
  description: string;
  highlighted?: boolean;
}

interface WhatItIncludesProps {
  badge: string;
  title: string;
  description: string;
  items: IncludeItem[];
}

export const WhatItIncludes = ({
  badge,
  title,
  description,
  items,
}: WhatItIncludesProps) => {
  return (
    <section className="py-20 px-6 bg-[#F5F8FF]" dir="rtl">
      <div className="container mx-auto max-w-6xl text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 bg-white border border-blue-100 text-[#0047AB] px-4 py-1.5 rounded-full text-xs font-bold mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0047AB]" />
          {badge}
        </span>

        {/* العنوان */}
        <h2 className="text-2xl lg:text-4xl font-extrabold text-[#011856] mb-4">
          {title}
        </h2>

        {/* الوصف */}
        <p className="text-gray-500 text-sm lg:text-base mb-14">
          {description}
        </p>

        {/* الشبكة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-right">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={`p-8 rounded-2xl bg-white transition-all duration-300 ${
                  item.highlighted
                    ? "border-2 border-[#0047AB] shadow-lg"
                    : "border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5 text-[#0047AB]" />
                </div>

                <h3 className="text-lg font-bold text-[#011856] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
