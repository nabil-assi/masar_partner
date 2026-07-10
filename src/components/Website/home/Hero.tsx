import { ArrowLeft, Calendar, CheckCircle2, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden py-24 sm:py-28 lg:py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-white via-[#F4F8FF] to-white" />
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,71,171,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,71,171,0.08) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
        }}
      />

      <div className="website-container grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="space-y-5 lg:col-span-6" dir="rtl">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-extrabold text-[#0047AB] shadow-sm">
            <Star size={18} className="text-[#0047AB]" />
            شريكك الرقمي
          </span>

          <h1 className="max-w-3xl text-3xl font-extrabold leading-[1.2] text-[#011856] sm:text-4xl lg:text-5xl">
            نبني حلولاً رقمية متكاملة تدفع أعمالك نحو النمو.
          </h1>

          <p className="max-w-2xl text-base leading-8 text-gray-600 lg:text-lg">
            نساعد الشركات والمؤسسات على تصميم وتطوير وتشغيل حلول رقمية حديثة،
            بأعلى معايير الجودة والكفاءة التقنية.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/contact"
              className="inline-flex min-h-13 items-center gap-3 rounded-xl bg-[#0047AB] px-7 text-sm font-extrabold text-white shadow-lg shadow-blue-900/20 transition hover:bg-[#003D93]"
            >
              احجز استشارة مجانية
              <Calendar className="w-5 h-5" />
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex min-h-13 items-center gap-3 rounded-xl border border-[#0047AB]/20 bg-white px-7 text-sm font-extrabold text-[#0047AB] shadow-sm transition hover:border-[#0047AB]/35 hover:bg-blue-50"
            >
              استعرض أعمالنا
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid gap-3 pt-2 text-sm font-extrabold text-[#011856] sm:grid-cols-3">
            <div className="flex items-center gap-2 rounded-xl border border-blue-100 bg-white/80 px-4 py-3 shadow-sm">
              <CheckCircle2 className="h-5 w-5 text-[#0047AB]" />
              حلول مخصصة
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-blue-100 bg-white/80 px-4 py-3 shadow-sm">
              <CheckCircle2 className="h-5 w-5 text-[#0047AB]" />
              فريق متعدد التخصصات
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-blue-100 bg-white/80 px-4 py-3 shadow-sm">
              <CheckCircle2 className="h-5 w-5 text-[#0047AB]" />
              دعم وتطوير مستمر
            </div>
          </div>
        </div>

        <div className="relative hidden h-[340px] w-full md:block lg:col-span-6 lg:h-[500px]">
          <div className="absolute inset-x-8 bottom-10 h-24 rounded-[50%] bg-[#0047AB]/12 blur-2xl" />
          <Image
            src="/Website/images/hero-image-2.png"
            alt="لوحة تحكم منصة مسار"
            fill
            sizes="(min-width: 1024px) 50vw, 90vw"
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};
