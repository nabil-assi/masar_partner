import {
  // أيقونات عامة
  Palette,
  Smartphone,
  Globe,
  Compass,
  Cpu,
  Megaphone,
  GraduationCap,
  LayoutGrid,
  Plug,
  Building2,
  FileText,
  ShoppingCart,
  Rocket,
  Zap,
  Layers,
  Wrench,
  Gauge,
  Users,
  // أيقونات إضافية - تصميم
  PenTool,
  Image as ImageIcon,
  Package,
  Sparkles,
  Brush,
  // أيقونات إضافية - تطبيقات جوال
  Bell,
  Wifi,
  Lock,
  RefreshCw,
  Star,
  // أيقونات إضافية - استشارات
  BarChart,
  Target,
  Map,
  TrendingUp,
  Lightbulb,
  ClipboardList,
  // أيقونات إضافية - أتمتة
  Database,
  Workflow,
  Bot,
  LineChart,
  ShieldCheck,
  // أيقونات إضافية - تسويق
  Share2,
  Search,
  BarChart3,
  Mail,
} from "lucide-react";
import { ValueColor } from "@/lib/types";

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
      {
        title: "هوية بصرية متكاملة",
        description: "شعار وألوان وخطوط متناسقة تعكس شخصية علامتك التجارية.",
      },
      {
        title: "تصميم واجهات UI/UX",
        description: "تجربة استخدام سلسة تركز على راحة المستخدم وسهولة التنقل.",
      },
      {
        title: "مواد تسويقية جاهزة",
        description: "تصاميم سوشيال ميديا وبروشورات متوافقة مع هويتك.",
      },
    ],
    aboutSection: {
      label: "عن الخدمة",
      title: {
        before: "حضور بصري",
        highlight: "مميز",
        after: "لعلامتك",
      },
      description:
        "نصمم هوية بصرية مخصصة تعكس شخصية علامتك، تسهّل تذكرها لدى العميل، وتدعم أهدافك التسويقية — ضمن تجربة تصميم واضحة ومتكاملة.",
    },
    whatItIncludes: {
      badge: "ما الذي يشمله",
      title: "كل ما تحتاجه لهوية متكاملة",
      description: "من الشعار الأساسي إلى المواد التسويقية — نغطي كل التفاصيل.",
      items: [
        {
          icon: PenTool,
          title: "تصميم الشعار",
          description: "شعار مميز يعكس شخصية علامتك ويسهل تذكره.",
          highlighted: false,
        },
        {
          icon: Palette,
          title: "الهوية البصرية الكاملة",
          description: "ألوان وخطوط ونمط بصري موحّد لكل قنواتك.",
          highlighted: true,
        },
        {
          icon: LayoutGrid,
          title: "تصميم واجهات UI",
          description: "واجهات تطبيقات ومواقع سهلة الاستخدام وجذابة.",
          highlighted: false,
        },
        {
          icon: ImageIcon,
          title: "مواد سوشيال ميديا",
          description: "تصاميم جاهزة للنشر تحافظ على اتساق هويتك.",
          highlighted: false,
        },
        {
          icon: Package,
          title: "تغليف ومطبوعات",
          description: "تصميم كتالوجات، بروشورات، وتغليف منتجات احترافي.",
          highlighted: false,
        },
        {
          icon: Sparkles,
          title: "دليل استخدام الهوية",
          description: "ملف شامل يوضح كيفية استخدام هويتك بشكل صحيح.",
          highlighted: false,
        },
      ],
    },
    whoIsItFor: {
      badge: "لمن تناسب",
      title: ["لمن تناسب", "هذه الخدمة؟"],
      description:
        "نعمل مع شركات ناشئة وعلامات تجارية تبحث عن هوية بصرية تميّزها عن المنافسين.",
      ctaLabel: "استشارة مجانية",
      items: [
        {
          icon: Rocket,
          title: "علامات ناشئة",
          description: "تريد إطلاق هوية بصرية قوية منذ البداية.",
        },
        {
          icon: Brush,
          title: "علامات تعيد تموضعها",
          description: "تحتاج تجديد هويتها لتواكب مرحلة نمو جديدة.",
        },
        {
          icon: Building2,
          title: "شركات وجهات راسخة",
          description: "تريد تحديث مظهرها الاحترافي أمام عملائها.",
        },
        {
          icon: ShoppingCart,
          title: "متاجر ومنتجات",
          description: "تحتاج تصميم تغليف وهوية تعكس جودة منتجاتها.",
        },
      ],
    },
    valueYouGet: {
      badge: "القيمة التي تحصل عليها",
      title: "تصميم لا يكتفي بالشكل",
      description: "نبني هوية تحقق حضورًا حقيقيًا، لا مجرد شعار جميل.",
      items: [
        {
          icon: Sparkles,
          color: "orange" as ValueColor,
          title: "تمييز حقيقي",
          description: "هوية تفصلك عن المنافسين وتترك انطباعًا يُذكر.",
        },
        {
          icon: Layers,
          color: "emerald" as ValueColor,
          title: "اتساق كامل",
          description: "نفس الهوية على كل قنواتك من الموقع إلى المطبوعات.",
        },
        {
          icon: Gauge,
          color: "violet" as ValueColor,
          title: "تسليم سريع",
          description: "مراحل تصميم واضحة تحترم وقتك وجدولك الزمني.",
        },
        {
          icon: Users,
          color: "blue" as ValueColor,
          title: "تجربة تفهم جمهورك",
          description: "تصاميم مبنية على فهم دقيق لعملائك المستهدفين.",
        },
      ],
    },
    portfolioExamples: {
      badge: "من أعمالنا",
      title: "نماذج من حلولنا",
      description: "مشاريع تصميم حقيقية صنعت فارقًا ملموسًا لعملائنا.",
      items: [
        {
          image: "/Website/images/public_portfolio/brand1.svg",
          tag: "هوية بصرية",
          title: "هوية علامة مستلزمات فاخرة",
          link: "https://example.com/design-1",
        },
        {
          image: "/Website/images/public_portfolio/brand2.svg",
          tag: "شعار وهوية",
          title: "هوية شركة استشارات رقمية",
          link: "https://example.com/design-2",
        },
        {
          image: "/Website/images/public_portfolio/brand3.svg",
          tag: "تصميم UI",
          title: "واجهة تطبيق حجوزات",
          link: "https://example.com/design-3",
        },
      ],
    },
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
      {
        title: "تطبيقات متعددة المنصات",
        description: "أندرويد و iOS بكود واحد باستخدام React Native.",
      },
      {
        title: "أداء عالي واستقرار",
        description: "تطبيقات سريعة الاستجابة بدون تهنيج أو مشاكل تقنية.",
      },
      {
        title: "دعم ونشر متكامل",
        description: "ننشر تطبيقك على المتاجر ونقدم دعم ما بعد الإطلاق.",
      },
    ],
    aboutSection: {
      label: "عن الخدمة",
      title: {
        before: "تطبيقات",
        highlight: "احترافية",
        after: "تلامس عملاءك",
      },
      description:
        "نطور تطبيقات جوال سريعة وسهلة الاستخدام تعكس هوية عملك، تسهّل رحلة العميل، وتدعم أهدافك التشغيلية والتسويقية بتجربة متكاملة.",
    },
    whatItIncludes: {
      badge: "ما الذي يشمله",
      title: "كل ما يحتاجه تطبيقك",
      description: "من الفكرة الأولى إلى النشر على المتاجر — نغطي كل مرحلة.",
      items: [
        {
          icon: Smartphone,
          title: "تطبيقات iOS و Android",
          description: "تطبيق واحد يعمل بسلاسة على كل الأجهزة.",
          highlighted: false,
        },
        {
          icon: Bell,
          title: "إشعارات فورية",
          description: "تنبيهات ذكية تبقي مستخدميك على تواصل دائم.",
          highlighted: true,
        },
        {
          icon: Wifi,
          title: "عمل بدون إنترنت",
          description: "وظائف أساسية تعمل حتى بدون اتصال بالشبكة.",
          highlighted: false,
        },
        {
          icon: Lock,
          title: "حماية وأمان البيانات",
          description: "تشفير وحماية كاملة لبيانات مستخدمي تطبيقك.",
          highlighted: false,
        },
        {
          icon: RefreshCw,
          title: "تحديثات مستمرة",
          description: "صيانة ودعم فني بعد الإطلاق لضمان الاستقرار.",
          highlighted: false,
        },
        {
          icon: Star,
          title: "نشر على المتاجر",
          description: "نتولى نشر تطبيقك على App Store و Google Play.",
          highlighted: false,
        },
      ],
    },
    whoIsItFor: {
      badge: "لمن تناسب",
      title: ["لمن تناسب", "هذه الخدمة؟"],
      description:
        "نعمل مع شركات وأفراد يبحثون عن حل جوال يقرّب خدماتهم من عملائهم.",
      ctaLabel: "استشارة مجانية",
      items: [
        {
          icon: Rocket,
          title: "مشاريع ناشئة",
          description: "تريد إطلاق تطبيق MVP سريع لاختبار فكرتها.",
        },
        {
          icon: ShoppingCart,
          title: "متاجر إلكترونية",
          description: "تحتاج تطبيقًا يسهّل الشراء والمتابعة لعملائها.",
        },
        {
          icon: Building2,
          title: "شركات خدمية",
          description: "تريد رقمنة خدماتها عبر تطبيق سهل الاستخدام.",
        },
        {
          icon: GraduationCap,
          title: "منصات تعليمية",
          description: "تحتاج تطبيقًا تفاعليًا لطلابها ومستخدميها.",
        },
      ],
    },
    valueYouGet: {
      badge: "القيمة التي تحصل عليها",
      title: "تطبيق لا يكتفي بالتشغيل",
      description: "نبني تطبيقات تحقق تفاعلًا حقيقيًا، لا مجرد واجهة تعمل.",
      items: [
        {
          icon: Gauge,
          color: "orange" as ValueColor,
          title: "أداء سريع",
          description: "استجابة فورية وتجربة سلسة على كل الأجهزة.",
        },
        {
          icon: Layers,
          color: "emerald" as ValueColor,
          title: "قابلية للتوسع",
          description: "بنية تقنية تدعم إضافة ميزات جديدة بسهولة.",
        },
        {
          icon: ShieldCheck,
          color: "violet" as ValueColor,
          title: "أمان موثوق",
          description: "حماية بيانات مستخدميك وفق أعلى المعايير.",
        },
        {
          icon: Users,
          color: "blue" as ValueColor,
          title: "تجربة مستخدم مميزة",
          description: "واجهات مصممة لتبقي مستخدميك مستخدمين فعليًا.",
        },
      ],
    },
    portfolioExamples: {
      badge: "من أعمالنا",
      title: "نماذج من حلولنا",
      description: "تطبيقات حقيقية صنعنا فيها فارقًا ملموسًا لعملائنا.",
      items: [
        {
          image: "/Website/images/public_portfolio/app1.svg",
          tag: "تطبيق توصيل",
          title: "تطبيق طلب وتوصيل مطاعم",
          link: "https://example.com/mobile-1",
        },
        {
          image: "/Website/images/public_portfolio/app2.svg",
          tag: "تطبيق حجوزات",
          title: "تطبيق حجز مواعيد عيادات",
          link: "https://example.com/mobile-2",
        },
        {
          image: "/Website/images/public_portfolio/app3.svg",
          tag: "تطبيق تعليمي",
          title: "منصة تعليمية تفاعلية",
          link: "https://example.com/mobile-3",
        },
      ],
    },
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
      {
        title: "مواقع سريعة ومتجاوبة",
        description: "أداء عالي على كل الأجهزة مع سرعة تحميل ممتازة.",
      },
      {
        title: "لوحات تحكم مخصصة",
        description: "إدارة كاملة لمحتوى موقعك بدون الحاجة لخبرة تقنية.",
      },
      {
        title: "متاجر إلكترونية متكاملة",
        description: "حلول بيع أونلاين مربوطة بأنظمة الدفع والشحن.",
      },
    ],
    aboutSection: {
      label: "عن الخدمة",
      title: {
        before: "حضور رقمي",
        highlight: "يليق",
        after: "بأعمالك",
      },
      description:
        "نطور مواقع ومنصات مخصصة تعكس هوية عملك، تسهّل رحلة العميل، وتدعم أهدافك التشغيلية والتسويقية — ضمن تجربة رقمية واضحة ومتكاملة.",
    },
    whatItIncludes: {
      badge: "ما الذي يشمله",
      title: "كل ما تحتاجه للانطلاق",
      description: "من الموقع الأساسي إلى المنصة الكاملة — نغطي كل ما تحتاجه.",
      items: [
        {
          icon: ShoppingCart,
          title: "متاجر إلكترونية",
          description: "تجربة تسوّق سلسة مع إدارة كاملة للمنتجات.",
          highlighted: false,
        },
        {
          icon: FileText,
          title: "صفحات هبوط للحملات",
          description: "صفحات مركزة تُحوّل الزوار إلى عملاء.",
          highlighted: true,
        },
        {
          icon: Building2,
          title: "مواقع الشركات والمؤسسات",
          description: "موقع احترافي يعكس هوية عملك ويقدم خدماتك.",
          highlighted: false,
        },
        {
          icon: Plug,
          title: "ربط الأنظمة وواجهات API",
          description: "تكاملات سلسة مع أدواتك وأنظمتك الحالية.",
          highlighted: false,
        },
        {
          icon: LayoutGrid,
          title: "لوحات تحكم داخلية",
          description: "أدوات إدارة تسهّل عمليات فريقك اليومية.",
          highlighted: false,
        },
        {
          icon: GraduationCap,
          title: "منصات تعليمية وخدمية",
          description: "منصات مخصصة للخدمات، الحجوزات، والتعليم.",
          highlighted: false,
        },
      ],
    },
    whoIsItFor: {
      badge: "لمن تناسب",
      title: ["لمن تناسب", "هذه الخدمة؟"],
      description:
        "نعمل مع شركات وأفراد من مختلف القطاعات يبحثون عن حضور رقمي احترافي يصنع فارقًا حقيقيًا.",
      ctaLabel: "استشارة مجانية",
      items: [
        {
          icon: Rocket,
          title: "مشاريع ناشئة",
          description: "تريد إطلاق منصة قابلة للتوسع بميزانية ذكية.",
        },
        {
          icon: Building2,
          title: "شركات وجهات راسخة",
          description: "تحتاج موقعًا احترافيًا يعكس مكانتها ويوسّع انتشارها.",
        },
        {
          icon: Zap,
          title: "أعمال تتحول رقميًا",
          description: "تريد تحويل عملياتها اليدوية إلى تجربة رقمية متكاملة.",
        },
        {
          icon: Layers,
          title: "جهات خدمية",
          description: "تحتاج منصة رقمية للحجوزات أو الخدمات أو التعليم.",
        },
      ],
    },
    valueYouGet: {
      badge: "القيمة التي تحصل عليها",
      title: "موقع لا يكتفي بالشكل",
      description: "نبني حلولًا تحقق نتائج قابلة للقياس، لا مجرد واجهات جميلة.",
      items: [
        {
          icon: Wrench,
          color: "orange" as ValueColor,
          title: "إدارة أسهل",
          description: "لوحات تحكم وأدوات تمنح فريقك استقلالية كاملة.",
        },
        {
          icon: Layers,
          color: "emerald" as ValueColor,
          title: "قابلية للتوسع",
          description: "بنية مبنية لتتطور مع نمو مشروعك دون إعادة بناء.",
        },
        {
          icon: Gauge,
          color: "violet" as ValueColor,
          title: "أداء سريع",
          description: "بنية محسّنة لأسرع تحميل وأسلس تفاعل على كل جهاز.",
        },
        {
          icon: Users,
          color: "blue" as ValueColor,
          title: "تجربة واضحة",
          description: "واجهات سهلة تساعد الزائر على الوصول لما يحتاجه بلا احتكاك.",
        },
      ],
    },
    portfolioExamples: {
      badge: "من أعمالنا",
      title: "نماذج من حلولنا",
      description: "مشاريع حقيقية صنعناها فيها فارقًا ملموسًا لعملائنا.",
      items: [
        {
          image: "/Website/images/public_portfolio/store.svg",
          tag: "متجر إلكتروني",
          title: "متجر المستلزمات الفاخرة",
          link: "https://example.com/websites-1",
        },
        {
          image: "/Website/images/public_portfolio/finpay.svg",
          tag: "موقع مؤسسي",
          title: "موقع شركة خدمات رقمية",
          link: "https://example.com/websites-2",
        },
        {
          image: "/Website/images/public_portfolio/dashboard.svg",
          tag: "لوحة تحكم",
          title: "لوحة تحكم متجر التقنية",
          link: "https://example.com/websites-3",
        },
      ],
    },
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
      {
        title: "تحليل شامل لأعمالك",
        description: "دراسة دقيقة لوضعك الحالي وتحديد نقاط التحسين.",
      },
      {
        title: "خارطة طريق واضحة",
        description: "خطة عملية بمراحل زمنية محددة لتحقيق أهدافك الرقمية.",
      },
      {
        title: "متابعة وتحسين مستمر",
        description: "قياس النتائج وتعديل الاستراتيجية بناءً على البيانات.",
      },
    ],
    aboutSection: {
      label: "عن الخدمة",
      title: {
        before: "قرارات رقمية",
        highlight: "واضحة",
        after: "لأعمالك",
      },
      description:
        "نحلل وضعك الحالي ونضع خارطة طريق دقيقة تساعدك تتخذ قرارات رقمية صحيحة، وتوجه استثمارك التقني نحو الأولويات الصح.",
    },
    whatItIncludes: {
      badge: "ما الذي يشمله",
      title: "كل ما تحتاجه لتتخذ القرار الصحيح",
      description: "من التحليل الأولي إلى خطة التنفيذ — نرافقك خطوة بخطوة.",
      items: [
        {
          icon: BarChart,
          title: "تحليل الوضع الحالي",
          description: "دراسة دقيقة لأداء أعمالك الرقمية الحالية.",
          highlighted: false,
        },
        {
          icon: Target,
          title: "تحديد الأهداف",
          description: "صياغة أهداف رقمية واضحة وقابلة للقياس.",
          highlighted: true,
        },
        {
          icon: Map,
          title: "خارطة طريق تنفيذية",
          description: "خطة عملية بمراحل زمنية ومسؤوليات محددة.",
          highlighted: false,
        },
        {
          icon: TrendingUp,
          title: "تحسين معدلات التحويل",
          description: "توصيات لرفع كفاءة قنواتك الرقمية ومبيعاتك.",
          highlighted: false,
        },
        {
          icon: Lightbulb,
          title: "استشارات تقنية متخصصة",
          description: "اختيار الأدوات والحلول التقنية الأنسب لعملك.",
          highlighted: false,
        },
        {
          icon: ClipboardList,
          title: "متابعة وتقارير دورية",
          description: "قياس النتائج وتعديل الخطة بناءً على الأداء الفعلي.",
          highlighted: false,
        },
      ],
    },
    whoIsItFor: {
      badge: "لمن تناسب",
      title: ["لمن تناسب", "هذه الخدمة؟"],
      description:
        "نعمل مع أصحاب قرار يبحثون عن رؤية واضحة قبل الاستثمار في حلول رقمية.",
      ctaLabel: "استشارة مجانية",
      items: [
        {
          icon: Compass,
          title: "شركات في مرحلة تحول",
          description: "تحتاج خارطة طريق واضحة قبل اتخاذ قرارات تقنية.",
        },
        {
          icon: Building2,
          title: "مؤسسات راسخة",
          description: "تريد تحديث بنيتها الرقمية بأولويات صحيحة.",
        },
        {
          icon: Rocket,
          title: "مشاريع ناشئة",
          description: "تبحث عن رؤية استراتيجية قبل بناء منتجها الرقمي.",
        },
        {
          icon: TrendingUp,
          title: "فرق تسويق ومبيعات",
          description: "تريد رفع كفاءة قنواتها الرقمية ومعدلات تحويلها.",
        },
      ],
    },
    valueYouGet: {
      badge: "القيمة التي تحصل عليها",
      title: "استشارة تُترجم إلى نتائج",
      description: "نقدّم توصيات عملية قابلة للتنفيذ، لا تقارير نظرية فقط.",
      items: [
        {
          icon: Lightbulb,
          color: "orange" as ValueColor,
          title: "رؤية واضحة",
          description: "فهم دقيق لوضعك الحالي وأولوياتك القادمة.",
        },
        {
          icon: Map,
          color: "emerald" as ValueColor,
          title: "خطة عملية",
          description: "خطوات تنفيذية واقعية بجدول زمني محدد.",
        },
        {
          icon: Gauge,
          color: "violet" as ValueColor,
          title: "قرارات أسرع",
          description: "بيانات ومؤشرات تساعدك تحسم قراراتك بثقة.",
        },
        {
          icon: TrendingUp,
          color: "blue" as ValueColor,
          title: "نمو مستدام",
          description: "استراتيجية مبنية لتحقيق نتائج على المدى الطويل.",
        },
      ],
    },
    portfolioExamples: {
      badge: "من أعمالنا",
      title: "نماذج من حلولنا",
      description: "مشاريع استشارية حقيقية غيّرت مسار أعمال عملائنا.",
      items: [
        {
          image: "/Website/images/public_portfolio/consulting1.svg",
          tag: "خارطة طريق",
          title: "خطة تحول رقمي لشركة توزيع",
          link: "https://example.com/consulting-1",
        },
        {
          image: "/Website/images/public_portfolio/consulting2.svg",
          tag: "تحسين تحويل",
          title: "رفع مبيعات متجر إلكتروني",
          link: "https://example.com/consulting-2",
        },
        {
          image: "/Website/images/public_portfolio/consulting3.svg",
          tag: "استشارة تقنية",
          title: "اختيار بنية تقنية لمنصة ناشئة",
          link: "https://example.com/consulting-3",
        },
      ],
    },
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
      {
        title: "ربط الأنظمة ببعضها",
        description: "تكامل كامل بين أقسام شركتك المختلفة بمنصة واحدة.",
      },
      {
        title: "أتمتة العمليات المتكررة",
        description: "تقليل التدخل اليدوي وتوفير الوقت والجهد.",
      },
      {
        title: "تقارير ولوحات بيانات",
        description: "رؤية واضحة لأداء عملك تساعدك باتخاذ قرارات أسرع.",
      },
    ],
    aboutSection: {
      label: "عن الخدمة",
      title: {
        before: "أنظمة ذكية",
        highlight: "توفر",
        after: "وقتك وجهدك",
      },
      description:
        "نربط عمليات شركتك بأنظمة أتمتة متكاملة تقلل التدخل اليدوي، توحّد بياناتك، وتساعدك تاخذ قرارات أسرع وأدق.",
    },
    whatItIncludes: {
      badge: "ما الذي يشمله",
      title: "كل ما تحتاجه لأتمتة عملك",
      description: "من ربط الأنظمة إلى التقارير الذكية — نغطي دورة العمل كاملة.",
      items: [
        {
          icon: Database,
          title: "أنظمة ERP متكاملة",
          description: "إدارة موحّدة للموارد والمخزون والمبيعات.",
          highlighted: false,
        },
        {
          icon: Users,
          title: "أنظمة CRM لإدارة العملاء",
          description: "متابعة دقيقة لرحلة العميل من أول تواصل حتى البيع.",
          highlighted: true,
        },
        {
          icon: Workflow,
          title: "أتمتة سير العمل",
          description: "ربط المهام والموافقات تلقائيًا بين الأقسام.",
          highlighted: false,
        },
        {
          icon: Bot,
          title: "أتمتة المهام المتكررة",
          description: "تقليل التدخل اليدوي في العمليات الروتينية اليومية.",
          highlighted: false,
        },
        {
          icon: LineChart,
          title: "تقارير ولوحات بيانات",
          description: "رؤية لحظية لأداء عملك تدعم اتخاذ القرار.",
          highlighted: false,
        },
        {
          icon: Plug,
          title: "تكامل مع أنظمتك الحالية",
          description: "ربط سلس مع الأدوات والبرامج التي تستخدمها فعلًا.",
          highlighted: false,
        },
      ],
    },
    whoIsItFor: {
      badge: "لمن تناسب",
      title: ["لمن تناسب", "هذه الخدمة؟"],
      description:
        "نعمل مع شركات تعاني من عمليات يدوية متفرقة وتبحث عن نظام موحّد وذكي.",
      ctaLabel: "استشارة مجانية",
      items: [
        {
          icon: Building2,
          title: "شركات متوسطة وكبيرة",
          description: "تحتاج ربط أقسامها المختلفة بمنصة واحدة موحّدة.",
        },
        {
          icon: ShoppingCart,
          title: "متاجر ومنصات بيع",
          description: "تريد أتمتة إدارة المخزون والطلبات والفواتير.",
        },
        {
          icon: Users,
          title: "فرق مبيعات وخدمة عملاء",
          description: "تحتاج نظام CRM لمتابعة العملاء بدقة أعلى.",
        },
        {
          icon: Workflow,
          title: "شركات ذات عمليات معقدة",
          description: "تبحث عن تقليل الأخطاء اليدوية وتسريع سير العمل.",
        },
      ],
    },
    valueYouGet: {
      badge: "القيمة التي تحصل عليها",
      title: "أنظمة تعمل من أجلك",
      description: "نبني حلول أتمتة توفر وقتك فعليًا، لا مجرد أدوات إضافية.",
      items: [
        {
          icon: Gauge,
          color: "orange" as ValueColor,
          title: "توفير الوقت",
          description: "تقليل المهام اليدوية المتكررة إلى الحد الأدنى.",
        },
        {
          icon: Database,
          color: "emerald" as ValueColor,
          title: "بيانات موحّدة",
          description: "كل معلوماتك في مكان واحد بدل أنظمة متفرقة.",
        },
        {
          icon: ShieldCheck,
          color: "violet" as ValueColor,
          title: "دقة أعلى",
          description: "تقليل الأخطاء البشرية الناتجة عن العمل اليدوي.",
        },
        {
          icon: LineChart,
          color: "blue" as ValueColor,
          title: "قرارات مبنية على بيانات",
          description: "تقارير لحظية تدعم قراراتك الإدارية اليومية.",
        },
      ],
    },
    portfolioExamples: {
      badge: "من أعمالنا",
      title: "نماذج من حلولنا",
      description: "أنظمة أتمتة حقيقية وفّرت وقتًا وجهدًا كبيرين لعملائنا.",
      items: [
        {
          image: "/Website/images/public_portfolio/automation1.svg",
          tag: "نظام ERP",
          title: "نظام إدارة مخزون لشركة توزيع",
          link: "https://example.com/automation-1",
        },
        {
          image: "/Website/images/public_portfolio/automation2.svg",
          tag: "نظام CRM",
          title: "منصة إدارة عملاء لشركة خدمات",
          link: "https://example.com/automation-2",
        },
        {
          image: "/Website/images/public_portfolio/automation3.svg",
          tag: "أتمتة عمليات",
          title: "أتمتة الفوترة لمتجر إلكتروني",
          link: "https://example.com/automation-3",
        },
      ],
    },
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
      {
        title: "استهداف دقيق للجمهور",
        description: "حملات مبنية على بيانات لضمان وصولك لعملائك الحقيقيين.",
      },
      {
        title: "إدارة سوشيال ميديا",
        description: "محتوى احترافي ينمي حضورك الرقمي بشكل مستمر.",
      },
      {
        title: "تقارير أداء شهرية",
        description: "متابعة شفافة للنتائج ومؤشرات الأداء الرئيسية.",
      },
    ],
    aboutSection: {
      label: "عن الخدمة",
      title: {
        before: "تسويق رقمي",
        highlight: "يحقق",
        after: "نتائج فعلية",
      },
      description:
        "نضع خطط تسويقية مبنية على بيانات دقيقة توصلك لجمهورك المستهدف، وتنمي مبيعاتك بشكل مستمر وقابل للقياس.",
    },
    whatItIncludes: {
      badge: "ما الذي يشمله",
      title: "كل ما تحتاجه لحملة ناجحة",
      description: "من استراتيجية المحتوى إلى تقارير الأداء — نغطي كل شيء.",
      items: [
        {
          icon: Target,
          title: "استراتيجية تسويقية",
          description: "خطة واضحة مبنية على تحليل جمهورك وسوقك.",
          highlighted: false,
        },
        {
          icon: Share2,
          title: "إدارة سوشيال ميديا",
          description: "محتوى احترافي ينمي تفاعل جمهورك يوميًا.",
          highlighted: true,
        },
        {
          icon: Megaphone,
          title: "إدارة الإعلانات الممولة",
          description: "حملات مدفوعة مستهدفة على منصات متعددة.",
          highlighted: false,
        },
        {
          icon: Search,
          title: "تحسين محركات البحث SEO",
          description: "رفع ترتيب موقعك لتصل لعملائك بشكل طبيعي.",
          highlighted: false,
        },
        {
          icon: Mail,
          title: "التسويق عبر البريد",
          description: "حملات بريدية تحافظ على تواصلك مع عملائك.",
          highlighted: false,
        },
        {
          icon: BarChart3,
          title: "تقارير أداء شهرية",
          description: "متابعة شفافة للنتائج ومؤشرات الأداء الرئيسية.",
          highlighted: false,
        },
      ],
    },
    whoIsItFor: {
      badge: "لمن تناسب",
      title: ["لمن تناسب", "هذه الخدمة؟"],
      description:
        "نعمل مع علامات تجارية ومتاجر تبحث عن نمو حقيقي وقابل للقياس بمبيعاتها.",
      ctaLabel: "استشارة مجانية",
      items: [
        {
          icon: ShoppingCart,
          title: "متاجر إلكترونية",
          description: "تريد زيادة مبيعاتها عبر حملات مدروسة ومستهدفة.",
        },
        {
          icon: Rocket,
          title: "علامات ناشئة",
          description: "تحتاج بناء حضورها الرقمي من الصفر بشكل احترافي.",
        },
        {
          icon: Building2,
          title: "شركات خدمية",
          description: "تريد استقطاب عملاء جدد عبر قنوات رقمية فعالة.",
        },
        {
          icon: TrendingUp,
          title: "أعمال تبحث عن نمو",
          description: "تريد قياس عائد استثمارها التسويقي بدقة.",
        },
      ],
    },
    valueYouGet: {
      badge: "القيمة التي تحصل عليها",
      title: "تسويق يحقق أرقامًا حقيقية",
      description: "نبني حملات تُترجم إلى مبيعات فعلية، لا مجرد مشاهدات.",
      items: [
        {
          icon: Target,
          color: "orange" as ValueColor,
          title: "استهداف دقيق",
          description: "وصول لجمهورك الحقيقي بدل إنفاق عشوائي.",
        },
        {
          icon: BarChart3,
          color: "emerald" as ValueColor,
          title: "نتائج قابلة للقياس",
          description: "تقارير واضحة تُظهر عائد استثمارك بدقة.",
        },
        {
          icon: Gauge,
          color: "violet" as ValueColor,
          title: "نمو مستمر",
          description: "استراتيجيات تُحسّن أداءها بناءً على البيانات الفعلية.",
        },
        {
          icon: Users,
          color: "blue" as ValueColor,
          title: "علاقة أقوى مع جمهورك",
          description: "محتوى يبني ثقة طويلة الأمد مع عملائك.",
        },
      ],
    },
    portfolioExamples: {
      badge: "من أعمالنا",
      title: "نماذج من حلولنا",
      description: "حملات تسويقية حقيقية حققت نموًا ملموسًا لعملائنا.",
      items: [
        {
          image: "/Website/images/public_portfolio/marketing1.svg",
          tag: "حملة إعلانية",
          title: "حملة إطلاق منتج لمتجر أزياء",
          link: "https://example.com/marketing-1",
        },
        {
          image: "/Website/images/public_portfolio/marketing2.svg",
          tag: "إدارة سوشيال ميديا",
          title: "نمو حساب علامة غذائية",
          link: "https://example.com/marketing-2",
        },
        {
          image: "/Website/images/public_portfolio/marketing3.svg",
          tag: "SEO",
          title: "تحسين ترتيب موقع خدمي",
          link: "https://example.com/marketing-3",
        },
      ],
    },
  },
];

export type Service = (typeof services)[number];

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);