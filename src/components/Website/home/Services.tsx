import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "نبني منتجاتك الرقمية",
    description: "مواقع وتطبيقات ومنصات مصممة للنمو.",
    icon: "/Website/icons/digital-products.png",
    link: "/services/digital-products",
  },
  {
    title: "ندير ونؤتمت أعمالك",
    description: "أتمتة ذكية تربط العمليات وتختصر الجهد.",
    icon: "/Website/icons/automation.png",
    link: "/services/automation",
  },
  {
    title: "تصمم وتنقي حضورك",
    description: "تصميم وهوية وتسويق يعزز حضور علامتك.",
    icon: "/Website/icons/target.png",
    link: "/services/branding",
  },
];

export const Services = () => {
  return (
    <section
      className="relative md:px-12 lg:px-24   overflow-hidden"
      dir="ltr"
    >
      {/* زخرفة الخلفية */}
      <div
        className="absolute top-10 left-8 w-28 h-28 opacity-60 pointer-events-none hidden sm:block"
        style={{
          backgroundImage: "radial-gradient(#c7d9f0 1.6px, transparent 1.6px)",
          backgroundSize: "15px 15px",
        }}
      />
      <div className="absolute -top-20 -right-24 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute -bottom-24 -left-20 w-96 h-96 bg-slate-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* العنوان */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#011856] mb-6">
            حلولنا الرئيسية
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            حلول متكاملة لبناء أعمالك الرقمية وتنميتها بثقة، ندمج فيها الإبداع
            بالتقنية.
          </p>
        </div>

        {/* الشبكة */}
        <div dir="rtl" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="group p-10 rounded-3xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 block"
            >
              <div className="w-20 h-20 mx-auto mb-8 bg-blue-50 rounded-2xl flex items-center justify-center overflow-hidden transition-colors group-hover:bg-[#0047AB]">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={80}
                  height={80}
                  className="object-contain transition-all   "
                />
              </div>
              <h3 className="text-2xl  font-bold text-[#0F172A] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-500 text-center leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>

        {/* الزر */}
        <div className="mt-16 flex justify-center group">
          <button className="px-8 py-4 border-2 border-[#0047AB] text-[#0047AB] rounded-xl font-bold hover:bg-[#0047AB] hover:text-white transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-lg">
            <span>استكشف جميع الخدمات</span>
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
