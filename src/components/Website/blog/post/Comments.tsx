"use client";

import { useState } from "react";
import { MessageCircle, Send, User } from "lucide-react";

interface Comment {
  id: number;
  name: string;
  date: string;
  content: string;
}

const initialComments: Comment[] = [
  {
    id: 1,
    name: "محمد العتيبي",
    date: "منذ 3 أيام",
    content:
      "مقال ممتاز، فعلاً كنت محتاج هالمعلومة بالضبط. شكرًا على الشرح الواضح.",
  },
  {
    id: 2,
    name: "سارة أحمد",
    date: "منذ أسبوع",
    content:
      "استفدت كتير من هالموضوع، خصوصًا النقطة الثانية. ممكن مقال تفصيلي أكتر عنها؟",
  },
  {
    id: 3,
    name: "عبدالله الحربي",
    date: "منذ أسبوعين",
    content: "شرح مبسط ومباشر، بالضبط اللي كنت أدور عليه. تسلموا على الجهد.",
  },
];

export const Comments = () => {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !content.trim()) {
      setError("الاسم والتعليق مطلوبان");
      return;
    }

    const newComment: Comment = {
      id: Date.now(),
      name: name.trim(),
      date: "الآن",
      content: content.trim(),
    };

    setComments((prev) => [newComment, ...prev]);
    setName("");
    setEmail("");
    setContent("");
    setError("");
  };

  return (
    <div className="mt-14 pt-10 border-t border-gray-100" dir="rtl">
      {/* عنوان القسم */}
      <div className="flex items-center gap-2 mb-8">
        <MessageCircle className="w-5 h-5 text-[#0047AB]" />
        <h2 className="text-xl font-extrabold text-[#011856]">
          التعليقات ({comments.length})
        </h2>
      </div>

      {/* قائمة التعليقات */}
      <div className="space-y-6 mb-12">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="flex gap-4 rounded-2xl border border-gray-100 p-5"
          >
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
              <User className="w-4 h-4 text-[#0047AB]" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-[#011856]">
                  {comment.name}
                </span>
                <span className="text-xs text-gray-400">{comment.date}</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {comment.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* فورم إضافة تعليق */}
      <div className="rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-6 lg:p-8">
        <h3 className="text-lg font-extrabold text-[#011856] mb-2">
          اترك تعليقًا
        </h3>
        <p className="text-gray-400 text-xs mb-6">
          لن يتم نشر عنوان بريدك الإلكتروني.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="اكتب تعليقك هنا..."
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#011856] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0047AB]/20 focus:border-[#0047AB] transition-all resize-none"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="الاسم *"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#011856] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0047AB]/20 focus:border-[#0047AB] transition-all"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="البريد الإلكتروني *"
              dir="ltr"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#011856] placeholder:text-gray-400 text-right focus:outline-none focus:ring-2 focus:ring-[#0047AB]/20 focus:border-[#0047AB] transition-all"
            />
          </div>

          {error && <p className="text-red-500 text-xs">{error}</p>}

          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-[#0047AB] hover:bg-[#003580] text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors"
          >
            <span>نشر التعليق</span>
            <Send size={15} />
          </button>
        </form>
      </div>
    </div>
  );
};