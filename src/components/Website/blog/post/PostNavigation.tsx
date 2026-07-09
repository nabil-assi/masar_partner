import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface PostLink {
  slug: string;
  title: string;
}

interface PostNavigationProps {
  prev: PostLink | null;
  next: PostLink | null;
}

export const PostNavigation = ({ prev, next }: PostNavigationProps) => {
  if (!prev && !next) return null;

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
      dir="rtl"
    >
      {/* السابق - يمين */}
      {prev ? (
        <Link
          href={`/blog/${prev.slug}`}
          className="group flex flex-col rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-[#0047AB]/20 transition-all duration-300 p-5"
        >
          <span className="flex items-center gap-2 text-xs font-bold text-gray-400 mb-2">
            <ArrowRight
              size={14}
              className="text-[#0047AB] transition-transform duration-300 group-hover:translate-x-1"
            />
            السابق
          </span>
          <span className="text-sm font-bold text-[#011856] leading-snug line-clamp-2">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div />
      )}

      {/* التالي - شمال */}
      {next ? (
        <Link
          href={`/blog/${next.slug}`}
          className="group flex flex-col items-end text-right rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-[#0047AB]/20 transition-all duration-300 p-5"
        >
          <span className="flex items-center gap-2 text-xs font-bold text-gray-400 mb-2">
            التالي
            <ArrowLeft
              size={14}
              className="text-[#0047AB] transition-transform duration-300 group-hover:-translate-x-1"
            />
          </span>
          <span className="text-sm font-bold text-[#011856] leading-snug line-clamp-2">
            {next.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
};