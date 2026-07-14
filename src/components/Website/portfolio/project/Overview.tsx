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
    <section className="bg-white px-6 pb-12 pt-2 sm:pb-14" dir="rtl" aria-label={`نبذة عن ${title}`}>
      <div className="website-container-narrow">
        <div className="rounded-[1.35rem] border border-blue-100 bg-white p-6 shadow-[0_14px_40px_rgba(31,78,132,0.06)] sm:p-8">
          <h2 className="mb-5 text-2xl font-extrabold text-[#071b4e] lg:text-3xl">
          نبذة عن المشروع
          </h2>

          <p className="mb-8 max-w-4xl text-base leading-8 text-slate-600">
          {overview}
          </p>

          {highlights.length > 0 && (
          <>
            <h3 className="mb-4 text-lg font-extrabold text-[#071b4e]">أهم الميزات</h3>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex min-h-[76px] items-center gap-3 rounded-xl border border-blue-100 bg-blue-50/50 px-4 py-4"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#075dc7]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-white" />
                  </div>

                  <span className="text-sm font-extrabold leading-6 text-[#071b4e]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </>
          )}
        </div>
      </div>
    </section>
  );
};
