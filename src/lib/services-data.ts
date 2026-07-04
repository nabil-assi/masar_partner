import {
  Palette,
  Smartphone,
  Globe,
  Compass,
  Cpu,
  Megaphone,
} from "lucide-react";

export const services = [
  {
    slug: "design",
    title: "العناية البصرية والتصميم",
    heroTitle: {
      line1: "العناية البصرية",
      line2Normal: "والتصميم",
      line2Highlight: "الاحترافي",
    },
    description: "فريق خبرة يمتلك مهارة تصميم مميزة وإبداع فائق",
    heroDescription:
      "نصمم هوية بصرية متكاملة وتجربة استخدام مميزة تعكس قيمة علامتك التجارية وتترك انطباعاً احترافياً لدى عملائك.",
    icon: Palette,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
    tagBg: "bg-emerald-500/10",
    tagText: "text-emerald-600",
    tags: ["شعار", "هوية بصرية", "تصميم UI", "مواد تسويقية"],
    stats: [
      { value: "5+", label: "سنوات خبرة" },
      { value: "98%", label: "رضا العملاء" },
      { value: "50+", label: "مشروع منجز" },
    ],
    features: [
      { title: "هوية بصرية متكاملة", description: "شعار وألوان وخطوط متناسقة تعكس شخصية علامتك التجارية." },
      { title: "تصميم واجهات UI/UX", description: "تجربة استخدام سلسة تركز على راحة المستخدم وسهولة التنقل." },
      { title: "مواد تسويقية جاهزة", description: "تصاميم سوشيال ميديا وبروشورات متوافقة مع هويتك." },
    ],
  },
  {
    slug: "mobile-apps",
    title: "تطبيقات الجوال",
    heroTitle: {
      line1: "تطوير تطبيقات",
      line2Normal: "الجوال",
      line2Highlight: "الاحترافية",
    },
    description: "تطبيقات أندرويد و iOS بأحدث تقنيات البرمجة الحديثة",
    heroDescription:
      "نبني تطبيقات جوال سريعة وآمنة على أندرويد و iOS، مصممة لتمنح مستخدميك تجربة سلسة وتخدم أهداف نمو أعمالك.",
    icon: Smartphone,
    iconBg: "bg-pink-50",
    iconColor: "text-pink-400",
    tagBg: "bg-pink-500/10",
    tagText: "text-pink-600",
    tags: ["iOS", "Android", "React Native", "UI/UX"],
    stats: [
      { value: "5+", label: "سنوات خبرة" },
      { value: "95%", label: "رضا العملاء" },
      { value: "30+", label: "تطبيق منشور" },
    ],
    features: [
      { title: "تطبيقات متعددة المنصات", description: "أندرويد و iOS بكود واحد باستخدام React Native." },
      { title: "أداء عالي واستقرار", description: "تطبيقات سريعة الاستجابة بدون تهنيج أو مشاكل تقنية." },
      { title: "دعم ونشر متكامل", description: "ننشر تطبيقك على المتاجر ونقدم دعم ما بعد الإطلاق." },
    ],
  },
  {
    slug: "websites",
    title: "تطوير المواقع والمنصات",
    heroTitle: {
      line1: "تطوير المواقع",
      line2Normal: "والمنصات",
      line2Highlight: "الرقمية",
    },
    description:
      "مواقع ومنصات إلكترونية متكاملة مصممة لخدمة أهداف أعمالك برؤية واضحة",
    heroDescription:
      "نبني مواقع ومنصات رقمية سريعة، واضحة، وقابلة للنمو — مصممة لتخدم أهدافك وتنمو معك.",
    icon: Globe,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    tagBg: "bg-blue-500/10",
    tagText: "text-blue-600",
    tags: ["مواقع شركات", "متاجر", "منصات", "لوحات تحكم"],
    stats: [
      { value: "5+", label: "سنوات خبرة" },
      { value: "98%", label: "رضا العملاء" },
      { value: "50+", label: "موقع ومنصة منجزة" },
    ],
    features: [
      { title: "مواقع سريعة ومتجاوبة", description: "أداء عالي على كل الأجهزة مع سرعة تحميل ممتازة." },
      { title: "لوحات تحكم مخصصة", description: "إدارة كاملة لمحتوى موقعك بدون الحاجة لخبرة تقنية." },
      { title: "متاجر إلكترونية متكاملة", description: "حلول بيع أونلاين مربوطة بأنظمة الدفع والشحن." },
    ],
  },
  {
    slug: "consulting",
    title: "استشارات الرقمية",
    heroTitle: {
      line1: "استشارات التحول",
      line2Normal: "الرقمي",
      line2Highlight: "لأعمالك",
    },
    description: "نرسم خارطة طريقك الرقمية ونحدد أفضل الحلول التقنية لأعمالك",
    heroDescription:
      "نساعدك على اتخاذ قرارات رقمية صحيحة من خلال تحليل عميق لأعمالك وخارطة طريق واضحة نحو النمو.",
    icon: Compass,
    iconBg: "bg-sky-50",
    iconColor: "text-sky-500",
    tagBg: "bg-sky-500/10",
    tagText: "text-sky-600",
    tags: ["تحول رقمي", "استشارات", "CRO"],
    stats: [
      { value: "5+", label: "سنوات خبرة" },
      { value: "40+", label: "شركة استفادت" },
      { value: "100%", label: "التزام بالخطة" },
    ],
    features: [
      { title: "تحليل شامل لأعمالك", description: "دراسة دقيقة لوضعك الحالي وتحديد نقاط التحسين." },
      { title: "خارطة طريق واضحة", description: "خطة عملية بمراحل زمنية محددة لتحقيق أهدافك الرقمية." },
      { title: "متابعة وتحسين مستمر", description: "قياس النتائج وتعديل الاستراتيجية بناءً على البيانات." },
    ],
  },
  {
    slug: "automation-systems",
    title: "الأنظمة والأتمتة",
    heroTitle: {
      line1: "الأنظمة الذكية",
      line2Normal: "وأتمتة",
      line2Highlight: "العمليات",
    },
    description:
      "أنظمة ذكية تربط عمليات أعمالك وتساعدك على اتخاذ القرار الصحيح وبسرعة",
    heroDescription:
      "نصمم أنظمة ERP وCRM وحلول أتمتة تربط عمليات شركتك ببعضها لتوفير الوقت وتحسين اتخاذ القرار.",
    icon: Cpu,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-500",
    tagBg: "bg-violet-500/10",
    tagText: "text-violet-600",
    tags: ["ERP", "CRM", "أتمتة"],
    stats: [
      { value: "5+", label: "سنوات خبرة" },
      { value: "20+", label: "نظام مطوّر" },
      { value: "70%", label: "توفير بالوقت" },
    ],
    features: [
      { title: "ربط الأنظمة ببعضها", description: "تكامل كامل بين أقسام شركتك المختلفة بمنصة واحدة." },
      { title: "أتمتة العمليات المتكررة", description: "تقليل التدخل اليدوي وتوفير الوقت والجهد." },
      { title: "تقارير ولوحات بيانات", description: "رؤية واضحة لأداء عملك تساعدك باتخاذ قرارات أسرع." },
    ],
  },
  {
    slug: "marketing",
    title: "التسويق الرقمي",
    heroTitle: {
      line1: "التسويق الرقمي",
      line2Normal: "الذي يحقق",
      line2Highlight: "نتائج",
    },
    description: "خطط تسويقية مدروسة توصلك إلى جمهورك المستهدف وتنمي مبيعاتك",
    heroDescription:
      "نضع خطط تسويق رقمي مبنية على بيانات دقيقة لتصل لجمهورك المستهدف وتحقق نمواً حقيقياً بمبيعاتك.",
    icon: Megaphone,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
    tagBg: "bg-amber-500/10",
    tagText: "text-amber-600",
    tags: ["سوشيال ميديا", "إعلانات", "SEO"],
    stats: [
      { value: "5+", label: "سنوات خبرة" },
      { value: "98%", label: "رضا العملاء" },
      { value: "3x", label: "متوسط نمو المبيعات" },
    ],
    features: [
      { title: "استهداف دقيق للجمهور", description: "حملات مبنية على بيانات لضمان وصولك لعملائك الحقيقيين." },
      { title: "إدارة سوشيال ميديا", description: "محتوى احترافي ينمي حضورك الرقمي بشكل مستمر." },
      { title: "تقارير أداء شهرية", description: "متابعة شفافة للنتائج ومؤشرات الأداء الرئيسية." },
    ],
  },
];

export type Service = (typeof services)[number];

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);