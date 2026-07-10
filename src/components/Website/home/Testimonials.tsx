import Image from "next/image";

const testimonials = [
  {
    name: "أحمد عبيدالله",
    role: "المدير التنفيذي",
    company: "شركة نبض الطبية",
    text: "بفضل فريق مسار احترافيتهم العالية وفهمهم العميق لاحتياجاتنا، استطعنا تحقيق نمو بجودة تفوق توقعاتنا وفي الوقت المحدد.",
    image: "/Website/avatars/ahmed.png",
  },
  {
    name: "سارة الحميدي",
    role: "مديرة العمليات",
    company: "منصة آفاق التعليمية",
    text: "منصة متكاملة غيرت عملنا بالكامل. التكامل بين الجوانب التقنية والتصميم كانت تجربة سلسة وناجحة بكل المقاييس.",
    image: "/Website/avatars/sara.png",
    isFeatured: true, // لتحديد البطاقة الوسطى المميزة
  },
  {
    name: "محمد الزهراني",
    role: "مؤسس",
    company: "متجر النخبة الإلكتروني",
    text: "تعاون رائع من البداية للنهاية، استمعوا لنا جيداً وفهموا رؤيتنا، وكانت النتيجة أعلى للنمو وتحقيق نتائج مميزة.",
    image: "/Website/avatars/ahmed.png",
  },
];

export const Testimonials = () => {
  return (
    <section className="relative  pb-10 overflow-hidden" dir="ltr">
      {/* زخرفة الخلفية */}
      <div
        className="absolute top-10 left-10 w-28 h-28 opacity-60 pointer-events-none hidden sm:block"
        style={{
          backgroundImage: "radial-gradient(#c7d9f0 1.6px, transparent 1.6px)",
          backgroundSize: "15px 15px",
        }}
      />
      <div className="absolute -top-20 -right-24 w-[360px] h-[360px] bg-blue-50 rounded-full blur-3xl opacity-70 pointer-events-none" />
       <div className="website-container text-center relative z-10">
        {/* العنوان */}
        <div className="inline-flex items-center gap-2 px-6 py-2 mb-5 bg-[#f0f4ff] text-[#3b5998] rounded-full text-sm font-bold border border-[#e0e7ff]">
          <span>آراء العملاء</span>
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            <path d="M8 9h8"></path>
            <path d="M8 13h4"></path>
          </svg>
        </div>
        <h2 className="text-4xl font-bold text-[#00116e] mb-16">
          ثقة عملائنا تصنع فرقاً
        </h2>

        {/* الشبكة */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`p-5 rounded-3xl  p-10 transition-all duration-300 ${
                t.isFeatured
                  ? "bg-[#002D72] text-white shadow-2xl scale-105"
                  : "bg-white text-gray-800 border-gray-100 shadow-lg hover:shadow-xl"
              }`}
            >
              <div
                className={`text-4xl  mb-8 ${
                  t.isFeatured ? "text-[#ffffff]  " : "text-[#002D72] "
                }`}
              >
                ❝
              </div>
              <p className="text-lg leading-relaxed mb-10">{t.text}</p>

              {/* الخط بطريقة مباشرة وأسهل */}
              <div
                className={`w-1/5 mx-auto mb-6 border-t p-2 
              ${
                t.isFeatured
                  ? "border-white/25"
                  : "border-[#002D72]/15"
              }`}
              ></div>
              <div className="flex items-center justify-center p-2 gap-4">
                <div className="text-right">
                  <h4 className="font-bold">{t.name}</h4>
                  <p
                    className={`text-sm ${t.isFeatured ? "text-blue-200" : "text-gray-500"}`}
                  >
                    {t.role}
                  </p>
                  {t.company}
                </div>

                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={100}
                    height={100}
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
