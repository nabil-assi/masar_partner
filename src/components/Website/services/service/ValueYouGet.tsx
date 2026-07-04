import { LucideIcon } from "lucide-react";

interface ValueItem {
  icon: LucideIcon;
  color: "orange" | "emerald" | "violet" | "blue";
  title: string;
  description: string;
}

interface ValueYouGetProps {
  badge: string;
  title: string;
  description: string;
  items: ValueItem[];
}

const colorMap = {
  orange: {
    border: "hover:border-orange-300",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  emerald: {
    border: "hover:border-emerald-300",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
  },
  violet: {
    border: "hover:border-violet-300",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-500",
  },
  blue: {
    border: "hover:border-blue-300",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
  },
};

export const ValueYouGet = ({
  badge,
  title,
  description,
  items,
}: ValueYouGetProps) => {
  return (
    <section className="py-20 px-6 bg-white" dir="rtl">
      <div className="container mx-auto max-w-6xl text-center">
        <span className="inline-flex items-center gap-2 bg-blue-50 text-[#0047AB] px-4 py-1.5 rounded-full text-xs font-bold mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0047AB]" />
          {badge}
        </span>

        <h2 className="text-2xl lg:text-4xl font-extrabold text-[#011856] mb-4">
          {title}
        </h2>

        <p className="text-gray-500 text-sm lg:text-base mb-14">
          {description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-right">
          {items.map((item, i) => {
            const Icon = item.icon;
            const colors = colorMap[item.color];
            return (
              <div
                key={i}
                className={`p-6 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-colors duration-300 ${colors.border}`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-6 ${colors.iconBg}`}
                >
                  <Icon className={`w-5 h-5 ${colors.iconColor}`} />
                </div>
                <h3 className="text-base font-bold text-[#011856] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
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