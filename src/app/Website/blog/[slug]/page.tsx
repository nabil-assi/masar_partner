import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogPosts, getBlogPostBySlug, getAdjacentPosts } from "@/lib/blog-data";
import { Hero } from "@/components/Website/blog/post/Hero";
import { PostNavigation } from "@/components/Website/blog/post/PostNavigation";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  return post ? { title: post.title, description: post.desc } : {};
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) return notFound();

  const { prev, next } = getAdjacentPosts(slug);

  return (
    <main className="website-subpage">
      <Hero
        category={post.category}
        title={post.title}
        author={post.author}
        date={post.date}
        readTime={post.readTime}
      />

      {/* المحتوى */}
      <section className="px-4 py-16 sm:px-6 sm:py-20" dir="rtl">
        <article className="mx-auto w-full max-w-4xl rounded-[2rem] border border-slate-200/70 bg-white p-5 shadow-[0_18px_55px_rgba(17,65,124,0.07)] sm:p-8 lg:p-10">
          <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden rounded-[1.5rem] bg-slate-100">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(min-width: 1024px) 768px, calc(100vw - 48px)"
              className="object-cover"
            />
          </div>

          <div className="mx-auto max-w-3xl space-y-6">
            {post.content.map((paragraph, i) => (
              <p
                key={i}
                className="text-base leading-9 text-slate-600 lg:text-lg lg:leading-10"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* أزرار السابق/التالي */}
          <div className="mx-auto max-w-3xl">
            <PostNavigation prev={prev} next={next} />
          </div>

          <div className="mx-auto mt-10 max-w-3xl border-t border-slate-100 pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-extrabold text-[#075dc7] transition-colors hover:text-[#064fa8]"
            >
              ← الرجوع لكل المقالات
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
