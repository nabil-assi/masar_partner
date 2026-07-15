import type { Metadata } from "next";
import { Hero } from "@/components/Website/legal/Hero";
import { Sidebar } from "@/components/Website/legal/Sidebar";
import { Legal } from "@/components/Website/legal/Legal";
import { ContactBox } from "@/components/Website/legal/ContactBox";

export const metadata: Metadata = {
  title: "الشروط والأحكام | مسار",
  description: "الشروط والأحكام الخاصة باستخدام خدمات ومنصات مسار.",
};

const sections = [
  {
    title: "قبول الشروط",
    body: "باستخدامك لموقع أو خدمات مسار، فإنك توافق على الالتزام بهذه الشروط والأحكام بالكامل. إذا كنت لا توافق على أي جزء منها، يرجى التوقف عن استخدام خدماتنا.",
  },
  {
    title: "استخدام الموقع",
    body: "يُسمح لك باستخدام الموقع للأغراض المشروعة فقط. يُمنع استخدامه بأي شكل يضر بالموقع أو يعيق وصول المستخدمين الآخرين إليه، أو ينتهك القوانين المعمول بها.",
  },
  {
    title: "الحسابات والتسجيل",
    body: "عند إنشاء حساب لدينا، أنت مسؤول عن الحفاظ على سرية بيانات الدخول الخاصة بك، وعن جميع الأنشطة التي تحدث تحت حسابك.",
  },
  {
    title: "الملكية الفكرية",
    body: "جميع المحتويات الموجودة على الموقع، بما في ذلك النصوص والشعارات والتصاميم والشيفرات، هي ملك حصري لمسار ولا يجوز نسخها أو إعادة استخدامها دون إذن كتابي مسبق.",
  },
  {
    title: "حدود المسؤولية",
    body: "نبذل قصارى جهدنا لضمان دقة المعلومات المقدمة، لكننا لا نتحمل المسؤولية عن أي أضرار مباشرة أو غير مباشرة تنتج عن استخدام الموقع أو الاعتماد على محتواه.",
  },
  {
    title: "الدفع والاشتراكات",
    body: "في حال وجود خدمات مدفوعة، تُطبّق شروط الدفع والاسترجاع الموضحة عند إتمام عملية الشراء. جميع الأسعار قابلة للتغيير مع إشعار مسبق.",
  },
  {
    title: "إنهاء الخدمة",
    body: "نحتفظ بالحق في تعليق أو إنهاء وصولك إلى الموقع أو الخدمات في أي وقت، في حال مخالفة هذه الشروط أو لأي سبب نراه مناسباً.",
  },
  {
    title: "القانون الحاكم وتسوية النزاعات",
    body: "تخضع هذه الشروط وتُفسَّر وفقاً للقوانين المعمول بها محلياً، وتتم تسوية أي نزاعات ناشئة عنها عبر التفاوض الودي أو الجهات القضائية المختصة.",
  },
];

export default function TermsPage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden " dir="rtl">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-white via-[#F4F8FF] to-white" />
        <div
          className="absolute inset-0 -z-10 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,71,171,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,71,171,0.08) 1px, transparent 1px)",
            backgroundSize: "46px 46px",
          }}
        />
      </div>

      <Hero />

      <div
        dir="rtl" id="legal-content" 
        className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 items-start relative z-10 container mx-auto px-6 py-16"
      >
        <Sidebar sections={sections} />

        <div className="lg:p-10">
          {sections.map((s, i) => (
            <Legal
              key={i}
              index={i + 1}
              title={s.title}
              body={s.body}
              isLast={i === sections.length - 1}
            />
          ))}

          <ContactBox
            heading="عندك استفسار حول الشروط؟"
            subtext="فريقنا القانوني جاهز يساعدك بأي سؤال"
            email="legal@masar.com"
          />
        </div>
      </div>
    </div>
  );
}
