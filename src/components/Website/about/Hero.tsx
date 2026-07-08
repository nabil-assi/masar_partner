
import Link from "next/link";

export const Hero = () => {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-[#0A1A5C] via-[#0B1F63] to-[#050F3D] pt-16 pb-32"
      dir="rtl"
    >

      <div className="container mx-auto pt-18 px-6 relative z-10">
         <span className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-blue-100 px-4 py-1.5 rounded-full text-xs font-bold mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5CA8F1]" />
          عن مسار
        </span>
        {/* Breadcrumb */}
        <div className="flex justify-start items-center gap-2 text-sm text-blue-200/70 mb-8">
         <Link href="/" className="hover:text-white transition-colors">
            الرئيسية
          </Link>
          <span className="text-blue-300/50">‹</span>
          <Link href="/portfolio" className="hover:text-white transition-colors">
            من نحن
          </Link>
        </div>

        {/* العنوان والوصف - محاذاة يمين بشكل مضمون */}
        <div className="text-right w-full">
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-[1.4] mb-6">
            <span className="text-white">عن </span>
            <span className="text-[#5CA8F1]">مسار</span>
          </h1>

          <p className="text-blue-100/80 text-base lg:text-lg leading-relaxed">
            نصنع حلولاً رقمية واضحة تساعد الأعمال على النمو بثقة.
          </p>
        </div>
      </div>

       {/* القوس الأبيض بالأسفل */}
      <div className="absolute bottom-0 left-0 w-full leading-[0] z-10">
        <svg
          className="w-full h-[60px] lg:h-[90px]"
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,90 L0,90 C480,-10 960,-10 1440,90 L1440,90 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};
