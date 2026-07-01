import Image from "next/image";

const posts = [
  {
    title: "لماذا يعتبر Flutter الخيار الأمثل للشركات الناشئة",
    category: "تطوير",
    date: "11 مايو 2024",
    readTime: "4 دقائق قراءة",
    image: "/images/blog1.png",
  },
  {
    title: "مستقبل الذكاء الاصطناعي في تصميم الواجهات",
    category: "ذكاء اصطناعي",
    date: "15 مايو 2024",
    readTime: "8 دقائق قراءة",
    image: "/images/blog2.png",
  },
  {
    title: "كيف تختار لغة البرمجة الأولى لك في 2024؟",
    category: "برمجة",
    date: "15 مايو 2024",
    readTime: "5 دقائق قراءة",
    image: "/images/blog3.png",
  },
];

export const BlogSection = () => {
  return (
    <section className="py-20 bg-[#0F172A] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          مدونة مسار التقنية
        </h2>

        {/* التعديل فقط هنا: جعلنا الـ grid يتغير بناءً على حجم الشاشة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div key={i} className="group cursor-pointer">
              {/* صورة المقال */}
              <div className="relative h-64 rounded-t-2xl overflow-hidden mb-6">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 right-4 bg-orange-200/20 text-orange-200 px-3 py-1 rounded-full text-xs font-medium">
                  {post.category}
                </span>
              </div>

              {/* تفاصيل المقال */}
              <h3 className="text-lg font-bold mb-4 leading-snug">
                {post.title}
              </h3>
              <div className="flex items-center justify-between text-sm text-gray-400 w-full">
                <span>{post.date}</span>
                <span className="flex items-center gap-1">
                  ⏱ {post.readTime}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};