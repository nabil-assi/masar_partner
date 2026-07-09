import Link from "next/link";
import { Clock, Calendar, User } from "lucide-react";

interface HeroProps {
  category: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
}

export const Hero = ({ category, title, author, date, readTime }: HeroProps) => {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-[#0A1A5C] via-[#0B1F63] to-[#050F3D] pt-16 pb-24"
      dir="rtl"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Breadcrumb */}
        <div className="flex justify-start items-center gap-2 text-sm text-blue-200/70 mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            الرئيسية
          </Link>
          <span className="text-blue-300/50">‹</span>
          <Link
            href="/Website/blog"
            className="hover:text-white transition-colors"
          >
            المدونة
          </Link>
        </div>

        <div className="max-w-3xl">
          <span className="inline-block bg-white/10 border border-white/10 text-blue-100 px-4 py-1.5 rounded-full text-xs font-bold mb-5">
            {category}
          </span>

          <h1 className="text-3xl lg:text-5xl font-extrabold leading-[1.4] mb-6 text-white">
            {title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-blue-100/70 text-sm">
            <div className="flex items-center gap-2">
              <User size={15} />
              {author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={15} />
              {date}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={15} />
              {readTime}
            </div>
          </div>
        </div>
      </div>

      {/* القوس الأبيض بالأسفل */}
      <div className="absolute bottom-0 left-0 w-full leading-[0] z-10">
        <svg
          className="w-full h-[60px] lg:h-[90px]"
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,90 L0,90 C480,-10 960,-10 1440,90 L1440,90 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};