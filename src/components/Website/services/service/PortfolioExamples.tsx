import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface PortfolioItem {
  image: string;
  tag: string;
  title: string;
  link: string;
}

interface PortfolioExamplesProps {
  badge: string;
  title: string;
  description: string;
  items: PortfolioItem[];
}

export const PortfolioExamples = ({
  badge,
  title,
  description,
  items,
}: PortfolioExamplesProps) => {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-right">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative w-full h-44 bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <span className="inline-block text-[10px] font-bold text-[#0047AB] bg-blue-50 px-3 py-1 rounded-full mb-3">
                  {item.tag}
                </span>

                <h3 className="text-base font-bold text-[#011856] mb-3">
                  {item.title}
                </h3>

                <Link
                  href={item.link}
                  target="_blank"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-[#0047AB] transition-colors"
                >
                  عرض المشروع
                  <ExternalLink size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};