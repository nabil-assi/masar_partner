import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogPosts, getBlogPostBySlug, getAdjacentPosts } from "@/lib/blog-data";
import { Hero } from "@/components/Website/blog/post/Hero";
import { PostNavigation } from "@/components/Website/blog/post/PostNavigation";
import { Comments } from "@/components/Website/blog/post/Comments";

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
    <main>
        <div className="fixed inset-0 -z-10">
              <Image
                src="/Website/images/background.png"
                alt="Background"
                fill
                className="object-cover"
                priority
              />
            </div>
      <Hero
        category={post.category}
        title={post.title}
        author={post.author}
        date={post.date}
        readTime={post.readTime}
      />

      {/* المحتوى */}
      <section className="py-16 px-6 bg-white" dir="rtl">
        <div className="container mx-auto max-w-3xl">
          <div className="relative w-full h-64 lg:h-96 rounded-2xl overflow-hidden bg-gray-100 mb-10">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            {post.content.map((paragraph, i) => (
              <p
                key={i}
                className="text-gray-600 text-base lg:text-lg leading-loose"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* أزرار السابق/التالي */}
          <PostNavigation prev={prev} next={next} />

          {/* التعليقات */}
          <Comments />

          <div className="mt-10 pt-8 border-t border-gray-100">
            <Link
              href="/Website/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0047AB] hover:text-[#003580] transition-colors"
            >
              ← الرجوع لكل المقالات
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}