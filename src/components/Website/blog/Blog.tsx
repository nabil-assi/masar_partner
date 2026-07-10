"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PenLine,
  Clock,
  ArrowLeft,
  FileText,
  ChevronRight,
  ChevronLeft,
  Search,
  X,
} from "lucide-react";
import { blogPosts, blogCategories } from "@/lib/blog-data";

const ITEMS_PER_PAGE = 9;

export const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    let result = blogPosts;

    if (activeCategory !== "الكل") {
      result = result.filter((post) => post.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.trim().toLowerCase();
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.desc.toLowerCase().includes(query),
      );
    }

    return result;
  }, [activeCategory, searchQuery]);

  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  return (
    <section className="relative overflow-hidden py-16 lg:py-20" dir="rtl">
      {/* زخرفة الخلفية */}
      <div
        className="absolute top-10 right-10 w-28 h-28 opacity-70 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#c7d9f0 1.6px, transparent 1.6px)",
          backgroundSize: "15px 15px",
        }}
      />
      <div className="absolute -top-24 -left-28 w-[420px] h-[420px] bg-blue-50 rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute -bottom-32 -right-24 w-[380px] h-[380px] bg-slate-50 rounded-full blur-3xl opacity-70 pointer-events-none" />

      <svg
        className="absolute bottom-10 left-0 w-[280px] opacity-50 pointer-events-none hidden lg:block"
        viewBox="0 0 300 260"
        fill="none"
      >
        <path
          d="M150 60 C 120 40, 60 35, 20 45 L 20 200 C 60 190, 120 195, 150 215 Z"
          stroke="#94b4de"
          strokeWidth="2.5"
        />
        <path
          d="M150 60 C 180 40, 240 35, 280 45 L 280 200 C 240 190, 180 195, 150 215 Z"
          stroke="#94b4de"
          strokeWidth="2.5"
        />
        <line
          x1="150"
          y1="60"
          x2="150"
          y2="215"
          stroke="#94b4de"
          strokeWidth="2"
        />
        <rect
          x="50"
          y="70"
          width="60"
          height="45"
          rx="6"
          stroke="#94b4de"
          strokeWidth="2"
        />
        <circle cx="66" cy="86" r="6" fill="#c9dbf3" />
        <path
          d="M52 108 L72 92 L88 104 L108 82"
          stroke="#94b4de"
          strokeWidth="2"
        />
      </svg>

      <div className="website-container relative z-10">
        {/* البادج العلوي */}
        <div className="flex justify-center mb-5">
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#0047AB] px-4 py-2 rounded-full text-sm font-extrabold">
            <PenLine size={14} />
            المدونة والمعرفة الرقمية
          </span>
        </div>

        {/* العنوان */}
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            <span className="block text-[#0F172A]">رؤى رقمية تساعدك</span>
            <span className="block text-[#0047AB]">على اتخاذ قرارات أفضل</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            مقالات عملية ونصائح من خبرائنا حول التقنية، إدارة الأعمال والنمو
            الرقمي.
          </p>
        </div>

        {/* شريط البحث */}
        <div className="max-w-md mx-auto mb-6">
          <div className="relative">
            <Search
              size={18}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="ابحث عن مقال..."
              className="w-full bg-white border border-gray-200 rounded-full pr-11 pl-11 py-3 text-sm text-[#0F172A] placeholder:text-gray-400 outline-none focus:border-[#0047AB] focus:ring-2 focus:ring-[#0047AB]/10 transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => handleSearchChange("")}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="مسح البحث"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* شريط الفلترة */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {blogCategories.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-[#0047AB] text-white shadow-md shadow-blue-900/15"
                    : "bg-white text-gray-500 border border-gray-200 hover:border-[#0047AB]/30 hover:text-[#0047AB]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* الكروت */}
        {paginatedPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {paginatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-[1.75rem] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-[190px] w-full relative bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, calc(100vw - 32px)"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7 text-right">
                  <span className="inline-block text-xs font-bold text-[#0047AB] bg-blue-50 px-3.5 py-1.5 rounded-full mb-4">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-3 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6">{post.desc}</p>
                  <div className="flex justify-between items-center text-gray-400 text-sm border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-1.5">
                      <Clock size={15} /> {post.readTime}
                    </div>
                    <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-[#0047AB] group-hover:bg-[#0047AB] group-hover:text-white transition-all">
                      <ArrowLeft size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-400">
            لا توجد مقالات تطابق بحثك.
          </div>
        )}

        {/* الباجينيشن */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-14">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
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
                  currentPage === page
                    ? "bg-[#0047AB] text-white shadow-lg shadow-blue-900/20"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-[#0047AB]/30 hover:text-[#0047AB]"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
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
