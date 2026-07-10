"use client";

import { useState } from "react";
import { sectors } from "@/lib/sectors-data";
 
export const PortfolioWithSectors = () => {
  const [activeSectorId, setActiveSectorId] = useState<string | null>(null);

  const activeCategories = activeSectorId
    ? (sectors.find((s) => s.id === activeSectorId)?.matchCategories ?? null)
    : null;

  const handleSectorClick = (sectorId: string) => {
    setActiveSectorId((prev) => (prev === sectorId ? null : sectorId));
    document
      .getElementById("projects-section")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* قسم القطاعات */}
      <section className="py-16 px-6 " dir="rtl">
        <div className="website-container-narrow text-center">
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 bg-blue-50 text-[#0047AB] px-4 py-1.5 rounded-full text-xs font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0047AB]" />
              قطاعات
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#011856] mb-4">
            حلول تناسب قطاعات مختلفة
          </h2>

          <p className="text-gray-500 text-base max-w-2xl mx-auto mb-12">
            نعمل مع أعمال من مختلف القطاعات ونبني حلولًا تفهم طبيعة كل مجال.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {sectors.map((sector) => {
              const Icon = sector.icon;
              const isActive = activeSectorId === sector.id;
              return (
                <button
                  key={sector.id}
                  onClick={() => handleSectorClick(sector.id)}
                  className={`flex flex-col items-center gap-3 p-6 rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? "bg-[#0047AB] border-[#0047AB] shadow-lg shadow-blue-900/20"
                      : "bg-[#ffffff] border-transparent hover:border-[#0047AB]/20"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isActive ? "bg-white/15" : "bg-[#F5F8FF]"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        isActive ? "text-white" : "text-[#0047AB]"
                      }`}
                    />
                  </div>
                  <span
                    className={`text-sm font-bold ${
                      isActive ? "text-white" : "text-[#011856]"
                    }`}
                  >
                    {sector.label}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="text-gray-400 text-xs mt-8">
            اضغط على أي قطاع لعرض المشاريع المرتبطة به
          </p>
        </div>
      </section>
    </>
  );
};
