import { Clock, Calendar, User } from "lucide-react";
import { PageHero } from "@/components/Website/shared/PageHero";

interface HeroProps {
  category: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
}

export const Hero = ({ category, title, author, date, readTime }: HeroProps) => {
  return (
    <PageHero
      eyebrow={category}
      breadcrumbs={[
        { label: "المدونة", href: "/blog" },
        { label: title },
      ]}
      title={title}
    >
      <div className="space-y-3 text-sm font-bold text-slate-600">
        <div className="flex items-center gap-2">
          <User size={16} className="text-[#075dc7]" />
          {author}
        </div>
        <div className="flex items-center gap-2">
          <Calendar size={16} className="text-[#075dc7]" />
          {date}
        </div>
        <div className="flex items-center gap-2">
          <Clock size={16} className="text-[#075dc7]" />
          {readTime}
        </div>
      </div>
    </PageHero>
  );
};
