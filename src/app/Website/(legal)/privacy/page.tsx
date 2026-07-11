import type { Metadata } from "next";
import { Hero } from "@/components/Website/legal/Hero";
import { Sidebar } from "@/components/Website/legal/Sidebar";
import { Legal } from "@/components/Website/legal/Legal";
import { ContactBox } from "@/components/Website/legal/ContactBox";
 // افترض وجود هذه المكونات البسيطة
 export const metadata: Metadata = {
  title: "سياسة الخصوصية | مسار",
  description: "تعرّف على كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتك في مسار.",
};

const sections = [
  {
    title: "المعلومات التي نجمعها",
    body: "نقوم بجمع المعلومات التي تزوّدنا بها مباشرة عند التسجيل أو التواصل معنا، مثل الاسم والبريد الإلكتروني ورقم الهاتف، بالإضافة إلى بيانات الاستخدام التقنية تلقائياً عند تصفح الموقع.",
  },
  {
    title: "كيف نستخدم معلوماتك",
    body: "نستخدم معلوماتك لتقديم خدماتنا وتحسينها، والتواصل معك بخصوص طلباتك، وإرسال تحديثات مهمة، وتحليل الاستخدام لتطوير تجربة أفضل ضمن إطار قانوني وآمن.",
  },
  {
    title: "سياسة ملفات الارتباط (Cookies)",
    body: "يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربة التصفح، وتذكر تفضيلاتك، وتحليل أداء الموقع. يمكنك التحكم بإعدادات الكوكيز من خلال متصفحك في أي وقت.",
  },
  {
    title: "حماية بياناتك",
    body: "نتخذ إجراءات أمنية تقنية وإدارية مناسبة لحماية بياناتك من الوصول أو الاستخدام أو الإفصاح غير المصرح به، ونراجع أنظمتنا بشكل دوري لضمان أعلى مستويات الحماية.",
  },
  {
    title: "مشاركة المعلومات مع أطراف ثالثة",
    body: "لا نقوم ببيع بياناتك الشخصية لأي طرف ثالث. قد نشارك بعض المعلومات مع مزودي خدمات موثوقين يساعدوننا في تشغيل الموقع، وذلك ضمن اتفاقيات سرية صارمة.",
  },
  {
    title: "حقوقك",
    body: "يحق لك الوصول إلى بياناتك أو تعديلها أو طلب حذفها في أي وقت، بالإضافة إلى حقك في الاعتراض على معالجة بياناتك أو سحب موافقتك المسبقة.",
  },
  {
    title: "التحديثات على السياسة",
    body: "قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر لتعكس أي تغييرات في ممارساتنا. سننشر أي تعديلات هنا مع تاريخ آخر تحديث.",
  },
  {
    title: "تواصل معنا",
    body: "إذا كانت لديك أي أسئلة حول سياسة الخصوصية، لا تتردد بالتواصل معنا مباشرة عبر البريد الإلكتروني أدناه.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="relative  ">
       
<main className="min-h-screen bg-gray-50/50">
      <Hero />
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 items-start">
          <Sidebar sections={sections} />
          <section className="flex flex-col gap-12 bg-white p-8 lg:p-12 rounded-3xl border border-gray-100 shadow-sm">
            {sections.map((s, i) => (
              <Legal key={i} index={i + 1} title={s.title} body={s.body} isLast={i === sections.length - 1} />
            ))}
            <ContactBox heading="لديك سؤال؟" subtext="فريقنا جاهز للإجابة" email="privacy@masar.com" />
          </section>
        </div>
      </div>
    </main>

   
    </div>
  );
}
