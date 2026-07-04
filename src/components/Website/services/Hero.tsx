export const Hero = () => {
  return (
    <section
      className="  relative overflow-hidden bg-gradient-to-br from-[#0A1A5C] via-[#0B1F63] to-[#050F3D] pt-16 pb-32"
      dir="rtl"
    >
      <div className="container mx-auto pt-18 px-6 relative z-10">
        {/* Breadcrumb */}
        <div className="flex justify-start  items-center gap-2 text-sm text-blue-200/70 mb-8">
          <span className="hover:text-white transition-colors cursor-pointer">
            الرئيسية
          </span>
          <span className="text-blue-300/50">‹</span>
          <span className="text-white font-medium">الخدمات</span>
        </div>

        {/* العنوان والوصف - محاذاة يمين بشكل مضمون */}
        <div className="text-right w-full">
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-[1.4] mb-6">
            <span className="text-white">حلولنا </span>
            <span className="text-[#5CA8F1]">الرقمية</span>
          </h1>

          <p className="text-blue-100/80 text-base lg:text-lg leading-relaxed">
            نبني حلولاً تساعد أعمالك على النمو بكفاءة ووضوح.
          </p>
        </div>
      </div>

      {/* الموجة البيضاء في الأسفل */}
      <div className="absolute bottom-0 left-0 w-full leading-[0] z-10">
        <svg
          className="w-full h-[90px] lg:h-[130px]"
          viewBox="0 0 1440 130"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,130 L0,55 C240,15 480,90 720,80 C960,70 1200,10 1440,55 L1440,130 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};