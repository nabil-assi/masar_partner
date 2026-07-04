interface AboutServiceTitle {
  before: string;
  highlight: string;
  after: string;
}

interface AboutServiceProps {
  label: string;
  title: AboutServiceTitle;
  description: string;
}

export const About = ({
  label,
  title,
  description,
}: AboutServiceProps) => {
  return (
    <section className="py-20 px-6 bg-white" dir="rtl">
      <div className="container mx-auto max-w-3xl text-center">
        {/* الليبل الصغير */}
        <span className="text-xs font-bold text-blue-500 tracking-wide mb-4 block">
          {label}
        </span>

        {/* العنوان */}
        <h2 className="text-2xl lg:text-4xl font-extrabold text-[#011856] leading-[1.5] mb-6">
          {title.before}{" "}
          <span className="text-[#0047AB]">{title.highlight}</span>{" "}
          {title.after}
        </h2>

        {/* الوصف */}
        <p className="text-gray-500 text-sm lg:text-base leading-relaxed max-w-2xl mx-auto mb-8">
          {description}
        </p>

        {/* الخط الزخرفي */}
        <div className="w-16 h-1 bg-[#0047AB] rounded-full mx-auto" />
      </div>
    </section>
  );
};