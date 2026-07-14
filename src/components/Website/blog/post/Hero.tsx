import Link from "next/link";
import { CalendarDays, Clock3, PenLine, UserRound } from "lucide-react";

interface HeroProps {
  category: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
}

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("ar", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(date));

export const Hero = ({ category, title, author, date, readTime }: HeroProps) => {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#f7faff] pb-16 pt-32 text-right sm:pb-20 sm:pt-36 lg:pb-24"
      dir="rtl"
    >
      <div className="masar-grid absolute inset-0 -z-20 opacity-50" />
      <div className="absolute -right-40 top-12 -z-10 h-96 w-96 rounded-full bg-blue-100/70 blur-[110px]" />
      <div className="absolute -left-40 bottom-0 -z-10 h-80 w-80 rounded-full bg-cyan-100/60 blur-[100px]" />

      <div className="website-container">
        <nav
          aria-label="مسار الصفحة"
          className="mb-8 flex flex-wrap items-center gap-2 text-xs font-bold text-slate-400"
        >
          <Link href="/" className="transition hover:text-[#075dc7]">
            الرئيسية
          </Link>
          <span className="text-slate-300">/</span>
          <Link href="/blog" className="transition hover:text-[#075dc7]">
            المدونة
          </Link>
          <span className="text-slate-300">/</span>
          <span className="max-w-[34rem] truncate text-[#075dc7]">{title}</span>
        </nav>

        <div className="grid items-end gap-9 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">
          <div>
            <span className="masar-eyebrow gap-2">
              <PenLine className="h-4 w-4" />
              {category}
            </span>
            <h1 className="mt-5 max-w-3xl text-[2.15rem] font-extrabold leading-[1.4] tracking-[-0.035em] text-[#071b4e] sm:text-[2.75rem] lg:text-[3.25rem]">
              {title}
            </h1>
          </div>

          <div className="rounded-2xl border border-blue-100/80 bg-white/90 p-3 shadow-[0_18px_50px_rgba(17,65,124,0.09)] backdrop-blur sm:p-4">
            <div className="grid grid-cols-1 divide-y divide-slate-100 text-xs font-bold text-slate-500 sm:grid-cols-3 sm:divide-x sm:divide-x-reverse sm:divide-y-0">
              <div className="flex items-center gap-2 px-3 py-2.5">
                <UserRound className="h-4 w-4 text-[#075dc7]" />
                <span>{author}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2.5">
                <CalendarDays className="h-4 w-4 text-[#075dc7]" />
                <time dateTime={date}>{formatDate(date)}</time>
              </div>
              <div className="flex items-center gap-2 px-3 py-2.5">
                <Clock3 className="h-4 w-4 text-[#075dc7]" />
                <span>{readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
