import { CheckCircle2 } from "lucide-react";

interface OverviewProps {
  title: string;
  overview: string;
  highlights?: string[];
}

export const Overview = ({
  title,
  overview,
  highlights = [],
}: OverviewProps) => {
  return (
    <section className="py-8 px-6 bg-white" dir="rtl">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl lg:text-3xl font-extrabold text-black mb-5">
          نبذة عن المشروع
        </h2>

        <p className="text-gray-600 text-base leading-relaxed mb-10">
          {overview}
        </p>

        {highlights.length > 0 && (
          <>
            <h3 className="text-lg font-bold text-black mb-5">أهم الميزات</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-xl px-5 py-4"
                >
                  {/* الدائرة أصبحت هنا (في البداية) */}
                  <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  </div>

                  {/* النص أصبح هنا (بعد الدائرة) */}
                  <span className="text-sm font-bold text-gray-900">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};
