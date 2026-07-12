"use client";

import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Clock,
  MessageCircle,
  PenLine,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import { blogCategories, blogPosts } from "@/lib/blog-data";

const ITEMS_PER_PAGE = 8;

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
          post.desc.toLowerCase().includes(query) ||
          post.category.toLowerCase().includes(query),
      );
    }

    return result;
  }, [activeCategory, searchQuery]);

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);
  const totalPages = Math.max(1, Math.ceil(remainingPosts.length / ITEMS_PER_PAGE));
  const paginatedPosts = remainingPosts.slice(
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
    <section className="relative overflow-hidden pb-24 pt-8 sm:pb-28 sm:pt-12" dir="rtl">
      <div className="absolute -left-32 top-80 -z-10 h-96 w-96 rounded-full bg-blue-100/50 blur-[100px]" />
      <div className="website-container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="masar-eyebrow gap-2"><PenLine className="h-4 w-4" /> المعرفة الرقمية</span>
          <h2 className="mt-5 text-3xl font-extrabold leading-[1.45] tracking-[-0.02em] text-[#071b4e] sm:text-4xl lg:text-[2.65rem]">
            أفكار عملية تساعدك على اتخاذ <span className="text-[#075dc7]">قرارات أفضل</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">مقالات حول تطوير المنتجات الرقمية، أتمتة الأعمال، الأنظمة وتجربة المستخدم، مكتوبة بلغة واضحة وقابلة للتطبيق.</p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl">
          <div className="relative">
            <Search className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => handleSearchChange(event.target.value)}
              placeholder="ابحث في المقالات والمواضيع..."
              className="min-h-[54px] w-full rounded-2xl border border-slate-200 bg-white pr-12 pl-12 text-sm text-[#071b4e] shadow-[0_10px_32px_rgba(17,65,124,0.06)] outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:ring-4 focus:ring-blue-100/70"
            />
            {searchQuery ? (
              <button type="button" onClick={() => handleSearchChange("")} className="absolute left-4 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700" aria-label="مسح البحث"><X className="h-4 w-4" /></button>
            ) : null}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {blogCategories.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryChange(category)}
                className={`rounded-full border px-4 py-2 text-xs font-bold transition sm:text-sm ${isActive ? "border-[#075dc7] bg-[#075dc7] text-white shadow-md shadow-blue-900/15" : "border-slate-200 bg-white text-slate-500 hover:border-blue-200 hover:text-[#075dc7]"}`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {featuredPost ? (
          <>
            <div className="mt-14 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-extrabold text-[#075dc7]">{activeCategory === "الكل" ? "مقال مختار" : activeCategory}</span>
                <h3 className="mt-1 text-xl font-extrabold text-[#071b4e] sm:text-2xl">ابدأ من هنا</h3>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-500">{filteredPosts.length} مقال</span>
            </div>

            <Link href={`/blog/${featuredPost.slug}`} className="group mt-6 grid overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white shadow-[0_20px_60px_rgba(17,65,124,0.09)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_28px_75px_rgba(17,65,124,0.13)] lg:grid-cols-[1.05fr_.95fr]">
              <div className="relative min-h-[280px] overflow-hidden bg-slate-100 sm:min-h-[360px] lg:order-2">
                <Image src={featuredPost.image} alt={featuredPost.title} fill priority sizes="(min-width: 1024px) 52vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.04]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071b4e]/30 via-transparent to-transparent" />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-9 lg:order-1 lg:p-12">
                <span className="w-fit rounded-full bg-blue-50 px-3.5 py-2 text-xs font-extrabold text-[#075dc7]">{featuredPost.category}</span>
                <h3 className="mt-5 text-2xl font-extrabold leading-[1.5] text-[#071b4e] sm:text-3xl">{featuredPost.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">{featuredPost.desc}</p>
                <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="flex items-center gap-2 text-xs font-bold text-slate-400 sm:text-sm"><Clock className="h-4 w-4" /> {featuredPost.readTime}</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#075dc7] text-white transition group-hover:-translate-x-1"><ArrowLeft className="h-4 w-4" /></span>
                </div>
              </div>
            </Link>

            {paginatedPosts.length > 0 ? (
              <div className="mt-16">
                <div className="mb-7 flex items-end justify-between gap-4">
                  <div>
                    <span className="text-xs font-extrabold text-[#075dc7]">أحدث المقالات</span>
                    <h3 className="mt-1 text-2xl font-extrabold text-[#071b4e]">المزيد من المعرفة</h3>
                  </div>
                  <BookOpen className="h-6 w-6 text-blue-200" />
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {paginatedPosts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-slate-200/70 bg-white shadow-[0_10px_35px_rgba(17,65,124,0.05)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_55px_rgba(17,65,124,0.10)]">
                      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                        <Image src={post.image} alt={post.title} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                        <span className="absolute right-4 top-4 rounded-full border border-white/50 bg-white/90 px-3 py-1.5 text-[11px] font-extrabold text-[#075dc7] shadow-sm backdrop-blur">{post.category}</span>
                      </div>
                      <div className="flex flex-1 flex-col p-5 sm:p-6">
                        <h4 className="text-lg font-extrabold leading-8 text-[#071b4e]">{post.title}</h4>
                        <p className="mt-3 line-clamp-2 text-sm leading-7 text-slate-500">{post.desc}</p>
                        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5">
                          <span className="flex items-center gap-1.5 text-xs font-bold text-slate-400"><Clock className="h-3.5 w-3.5" /> {post.readTime}</span>
                          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-[#075dc7] transition group-hover:bg-[#075dc7] group-hover:text-white"><ArrowLeft className="h-4 w-4" /></span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}

            {totalPages > 1 ? (
              <div className="mt-12 flex items-center justify-center gap-2">
                <PaginationButton label="الصفحة السابقة" disabled={currentPage === 1} onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}><ChevronRight className="h-4 w-4" /></PaginationButton>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                  <button key={page} type="button" onClick={() => setCurrentPage(page)} className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold transition ${currentPage === page ? "bg-[#075dc7] text-white shadow-lg shadow-blue-900/20" : "border border-slate-200 bg-white text-slate-500 hover:border-blue-200 hover:text-[#075dc7]"}`}>{page}</button>
                ))}
                <PaginationButton label="الصفحة التالية" disabled={currentPage === totalPages} onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}><ChevronLeft className="h-4 w-4" /></PaginationButton>
              </div>
            ) : null}
          </>
        ) : (
          <div className="mx-auto mt-14 max-w-xl rounded-[1.75rem] border border-slate-200 bg-white px-6 py-14 text-center shadow-sm">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#075dc7]"><Search className="h-6 w-6" /></span>
            <h3 className="mt-5 text-xl font-extrabold text-[#071b4e]">لم نجد مقالات مطابقة</h3>
            <p className="mt-2 text-sm leading-7 text-slate-500">جرّب كلمة أخرى أو اختر تصنيفاً مختلفاً.</p>
            <button type="button" onClick={() => { setSearchQuery(""); setActiveCategory("الكل"); }} className="mt-5 text-sm font-extrabold text-[#075dc7]">عرض جميع المقالات</button>
          </div>
        )}

        <div className="relative mt-24 overflow-hidden rounded-[2rem] bg-[#071b4e] px-6 py-12 text-white shadow-[0_28px_75px_rgba(7,27,78,0.18)] sm:px-10 lg:px-14">
          <div className="absolute -left-24 -top-28 h-72 w-72 rounded-full bg-blue-500/20 blur-[90px]" />
          <div className="absolute -bottom-32 right-16 h-72 w-72 rounded-full bg-cyan-400/10 blur-[90px]" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-xs font-bold text-blue-100"><Sparkles className="h-4 w-4 text-cyan-300" /> من المعرفة إلى التنفيذ</span>
              <h2 className="mt-5 text-3xl font-extrabold leading-[1.45] sm:text-4xl">تحتاج تطبيق الفكرة على عملك؟</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100/75 sm:text-base">ناقش احتياجك مع فريق مسار، وسنساعدك في اختيار الحل والخطوة الأولى المناسبة.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link href="/contact" className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-extrabold text-[#075dc7] transition hover:bg-blue-50">ناقش مشروعك <ArrowLeft className="h-4 w-4" /></Link>
              <a href="https://wa.me/970567465929" target="_blank" rel="noreferrer" className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-6 text-sm font-extrabold text-white transition hover:bg-white/10"><MessageCircle className="h-5 w-5 text-cyan-300" /> واتساب</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function PaginationButton({ children, disabled, label, onClick }: { children: ReactNode; disabled: boolean; label: string; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} disabled={disabled} aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition hover:border-blue-200 hover:text-[#075dc7] disabled:cursor-not-allowed disabled:opacity-40">{children}</button>
  );
}
