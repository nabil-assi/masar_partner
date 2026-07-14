import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowUpLeft,
  CalendarDays,
  Clock3,
  Lightbulb,
  UserRound,
} from "lucide-react";
import {
  blogPosts,
  getAdjacentPosts,
  getBlogPostBySlug,
} from "@/lib/blog-data";
import { Hero } from "@/components/Website/blog/post/Hero";
import { Comments } from "@/components/Website/blog/post/Comments";
import { PostNavigation } from "@/components/Website/blog/post/PostNavigation";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  return post
    ? {
        title: post.title,
        description: post.desc,
        openGraph: { images: [post.image] },
      }
    : {};
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("ar", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(date));

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  const { prev, next } = getAdjacentPosts(slug);
  const relatedPosts = blogPosts
    .filter(
      (candidate) =>
        candidate.slug !== slug && candidate.title !== post.title,
    )
    .sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category))
    .slice(0, 3);

  return (
    <main className="website-subpage min-h-screen overflow-hidden" dir="rtl">
      <Hero
        category={post.category}
        title={post.title}
        author={post.author}
        date={post.date}
        readTime={post.readTime}
      />

      <section className="website-container py-12 sm:py-16 lg:py-20">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[1.5rem] bg-slate-100 shadow-[0_24px_70px_rgba(17,65,124,0.10)] sm:aspect-[2.15/1] sm:rounded-[2rem]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(min-width: 1280px) 1216px, calc(100vw - 48px)"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071b4e]/25 via-transparent to-white/10" />
          <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-white/70 bg-white/90 px-4 py-2 text-xs font-extrabold text-[#075dc7] shadow-sm backdrop-blur sm:bottom-6 sm:right-6">
            <span>{post.category}</span>
            <span className="h-1 w-1 rounded-full bg-blue-300" />
            <span className="text-slate-500">{post.readTime}</span>
          </div>
        </div>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_310px] lg:gap-10">
          <article className="min-w-0">
            <header className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 shadow-[0_14px_45px_rgba(17,65,124,0.06)] sm:p-8">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-bold text-slate-400">
                <span className="rounded-full bg-blue-50 px-3 py-1.5 text-[#075dc7]">{post.category}</span>
                <span className="flex items-center gap-1.5"><UserRound className="h-3.5 w-3.5" />{post.author}</span>
                <span className="flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5" />{formatDate(post.date)}</span>
                <span className="flex items-center gap-1.5"><Clock3 className="h-3.5 w-3.5" />{post.readTime}</span>
              </div>
              <h2 className="mt-5 text-2xl font-extrabold leading-[1.5] text-[#071b4e] sm:text-3xl">
                {post.title}
              </h2>
              <p className="mt-3 text-base leading-8 text-slate-500">{post.desc}</p>
            </header>

            <div className="mx-auto mt-8 space-y-7 px-1 sm:px-3">
              {post.content.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className="text-[15px] leading-9 text-slate-600 sm:text-base sm:leading-10"
                >
                  {paragraph}
                  {index === 0 && (
                    <span className="mt-5 block rounded-2xl border-r-4 border-[#075dc7] bg-blue-50/70 px-5 py-4 font-bold leading-8 text-[#071b4e]">
                      التكامل الذكي يجعل البيانات تنتقل بين أدواتك تلقائيًا، ويمنح فريقك وقتًا أكبر للتركيز على العمل الحقيقي بدل تكرار الإدخال اليدوي.
                    </span>
                  )}
                </p>
              ))}
            </div>

            <Comments />
          </article>

          <aside className="space-y-5 lg:sticky lg:top-28">
            <div className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 shadow-[0_14px_40px_rgba(17,65,124,0.06)]">
              <div className="flex items-center gap-2 text-[#071b4e]">
                <Lightbulb className="h-5 w-5 text-[#075dc7]" />
                <h2 className="font-extrabold">لمحة سريعة</h2>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-500">{post.desc}</p>
              <dl className="mt-5 space-y-3 border-t border-slate-100 pt-5 text-xs">
                <div className="flex justify-between gap-4"><dt className="font-bold text-slate-400">الفئة</dt><dd className="font-extrabold text-[#071b4e]">{post.category}</dd></div>
                <div className="flex justify-between gap-4"><dt className="font-bold text-slate-400">الكاتب</dt><dd className="font-extrabold text-[#071b4e]">{post.author}</dd></div>
                <div className="flex justify-between gap-4"><dt className="font-bold text-slate-400">التاريخ</dt><dd className="font-extrabold text-[#071b4e]">{formatDate(post.date)}</dd></div>
                <div className="flex justify-between gap-4"><dt className="font-bold text-slate-400">مدة القراءة</dt><dd className="font-extrabold text-[#071b4e]">{post.readTime}</dd></div>
              </dl>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] bg-[#071b4e] p-6 text-white shadow-[0_18px_45px_rgba(7,27,78,0.2)]">
              <p className="text-xs font-bold text-blue-200">هل تريد تنفيذ الفكرة؟</p>
              <h2 className="mt-3 text-xl font-extrabold leading-8">نحن جاهزون لدعم مشروعك الرقمي</h2>
              <p className="mt-3 text-xs leading-6 text-blue-100/80">تواصل معنا لمناقشة احتياجك والحصول على استشارة أولية واضحة.</p>
              <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#075dc7] px-4 py-3 text-xs font-extrabold transition hover:bg-blue-500">
                تواصل معنا
                <ArrowUpLeft className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-white py-16 sm:py-20">
        <div className="website-container">
          <div className="flex items-end justify-between gap-6">
            <div>
              <span className="text-xs font-extrabold text-[#075dc7]">تابع القراءة</span>
              <h2 className="mt-2 text-2xl font-extrabold text-[#071b4e] sm:text-3xl">مقالات مشابهة قد تهمك</h2>
            </div>
            <Link href="/blog" className="hidden items-center gap-2 text-sm font-extrabold text-[#075dc7] sm:flex">
              عرض كل المقالات <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="group overflow-hidden rounded-[1.4rem] border border-slate-200/80 bg-white shadow-[0_12px_35px_rgba(17,65,124,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(17,65,124,0.10)]"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <Image src={relatedPost.image} alt="" fill sizes="(min-width: 768px) 33vw, calc(100vw - 32px)" className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <span className="text-[11px] font-extrabold text-[#075dc7]">{relatedPost.category}</span>
                  <h3 className="mt-2 line-clamp-2 min-h-12 text-sm font-extrabold leading-6 text-[#071b4e]">{relatedPost.title}</h3>
                  <span className="mt-4 flex items-center gap-1.5 text-[11px] font-bold text-slate-400"><Clock3 className="h-3.5 w-3.5" />{relatedPost.readTime}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 border-t border-slate-100 pt-8">
            <PostNavigation prev={prev} next={next} />
            <Link href="/blog" className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#075dc7] transition hover:text-[#064fa8]">
              <ArrowLeft className="h-4 w-4" />
              الرجوع لكل المقالات
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
