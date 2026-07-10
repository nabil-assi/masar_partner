"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ChevronRight, ChevronLeft } from "lucide-react";
import { getAllPortfolioItems, categoryColors } from "@/lib/services-data";

const ITEMS_PER_PAGE = 9;

interface ServicesProps {
  externalCategories?: string[] | null; // فلتر جاي من قسم القطاعات
}

export const Services = ({ externalCategories }: ServicesProps) => {
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [currentPage, setCurrentPage] = useState(1);

  const allProjects = useMemo(() => getAllPortfolioItems(), []);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(allProjects.map((p) => p.category)));
    return ["الكل", ...unique];
  }, [allProjects]);
  const filteredProjects = useMemo(() => {
    if (externalCategories && externalCategories.length > 0) {
      return allProjects.filter((p) => externalCategories.includes(p.category));
    }
    if (activeCategory === "الكل") return allProjects;
    return allProjects.filter((p) => p.category === activeCategory);
  }, [activeCategory, allProjects, externalCategories]);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const safeCurrentPage = Math.min(currentPage, Math.max(totalPages, 1));
  const paginatedProjects = filteredProjects.slice(
    (safeCurrentPage - 1) * ITEMS_PER_PAGE,
    safeCurrentPage * ITEMS_PER_PAGE,
  );

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <section
      id="projects-section"
      className="relative px-6 py-10 md:px-12 lg:px-24 bg-gray-50/30"
    >
      <div className="website-container-narrow relative z-10" dir="rtl">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 bg-blue-100 text-[#0047AB] px-4 py-1.5 rounded-full text-xs font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0047AB]" />
              من أعمالنا
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#011856] mb-4">
            نماذج من حلولنا
          </h2>

          <p className="text-[#011856] text-base max-w-2xl mx-auto">
            مشاريع حقيقية صنعناها فيها فارقًا ملموسًا لعملائنا، عبر خدماتنا
            المختلفة.
          </p>
        </div>

        {/* شريط الفلترة - يختفي إذا في فلتر خارجي فعّال */}
        {!externalCategories && (
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => {
              const isActive = category === activeCategory;
              return (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-[#0047AB] text-white shadow-lg shadow-blue-900/20"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-[#0047AB]/30 hover:text-[#0047AB]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        )}

        {/* الشبكة */}
        {paginatedProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {paginatedProjects.map((project, index) => {
              const colors = categoryColors[project.category] || {
                bg: "bg-blue-50",
                text: "text-blue-600",
              };

              return (
                <div
                  key={`${project.serviceSlug}-${index}`}
                  className="group rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                >
                  <div className="relative w-full h-44 bg-gray-100 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, calc(100vw - 32px)"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <span
                      className={`inline-block w-fit text-[11px] font-bold px-3 py-1 rounded-full mb-3 ${colors.bg} ${colors.text}`}
                    >
                      {project.category}
                    </span>

                    <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                      {project.title}
                    </h3>

                    <p className="text-gray-500 text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-[11px] font-medium rounded-lg bg-gray-50 text-gray-500 border border-gray-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="flex items-center gap-2 text-sm font-bold text-[#0047AB] mt-auto"
                    >
                      <span>عرض المشروع</span>
                      <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-400 mb-14">
            لا توجد مشاريع ضمن هذا القطاع حاليًا.
          </div>
        )}

        {/* الباجينيشن */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={safeCurrentPage === 1}
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 text-gray-500 hover:border-[#0047AB]/30 hover:text-[#0047AB] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="الصفحة السابقة"
            >
              <ChevronRight size={18} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 flex items-center justify-center rounded-xl text-sm font-bold transition-all ${
                  safeCurrentPage === page
                    ? "bg-[#0047AB] text-white shadow-lg shadow-blue-900/20"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-[#0047AB]/30 hover:text-[#0047AB]"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={safeCurrentPage === totalPages}
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 text-gray-500 hover:border-[#0047AB]/30 hover:text-[#0047AB] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="الصفحة التالية"
            >
              <ChevronLeft size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
