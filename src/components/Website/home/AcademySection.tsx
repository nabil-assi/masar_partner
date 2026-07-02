"use client";

import Image from "next/image";
import {
  Code,
  PenTool,
  Megaphone,
  BrainCircuit,
  BarChart3,
  ArrowUpRight,
  GraduationCap,
  Lock,
} from "lucide-react";

const skills = [
  { name: "تسويق رقمي", icon: Megaphone, color: "blue" },
  { name: "تصميم", icon: PenTool, color: "amber" },
  { name: "برمجة", icon: Code, color: "blue" },
  { name: "تحليل بيانات", icon: BarChart3, color: "teal" },
  { name: "ذكاء اصطناعي", icon: BrainCircuit, color: "purple" },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-50 text-[#0047AB]",
  amber: "bg-amber-50 text-amber-600",
  teal: "bg-emerald-50 text-emerald-600",
  purple: "bg-purple-50 text-purple-600",
};

export const AcademySection = () => {
  return (
    <section dir="ltr">
      <div className="container mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-gray-100 bg-gradient-to-br from-[#f8fafc] to-[#eef3fb] px-4 py-8 lg:px-16">
          {/* زخرفة الخلفية */}
          <div
            className="absolute top-6 left-6 w-28 h-28 opacity-80 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(#c7d9f0 1.6px, transparent 1.6px)",
              backgroundSize: "15px 15px",
            }}
          />
          <div
            className="absolute bottom-6 right-6 w-24 h-24 opacity-70 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(#c7d9f0 1.6px, transparent 1.6px)",
              backgroundSize: "15px 15px",
            }}
          />
          <div className="absolute -top-16 -left-16 w-56 h-56 rounded-full border border-blue-100 pointer-events-none" />
          <div className="absolute -top-6 -left-6 w-40 h-40 rounded-full border border-blue-200 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* الجانب الأيسر: الصورة */}
            <div className="relative flex justify-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

              <div className="relative w-full max-w-[480px]">
                <Image
                  src="/Website/images/academy-laptop.png"
                  alt="منصة أكاديمية مسار"
                  width={700}
                  height={500}
                  className="w-full h-auto drop-shadow-2xl relative z-10"
                />

                {/* نبتة زخرفية */}
                <svg
                  className="absolute bottom-[-10px] left-[-30px] w-20 h-24 z-20"
                  viewBox="0 0 80 100"
                  fill="none"
                >
                  <ellipse cx="40" cy="90" rx="22" ry="8" fill="#dbe6f6" />
                  <path
                    d="M40 85 C 38 60, 20 55, 15 30"
                    stroke="#7fa8db"
                    strokeWidth="3"
                  />
                  <path
                    d="M40 85 C 42 60, 60 55, 65 30"
                    stroke="#7fa8db"
                    strokeWidth="3"
                  />
                  <path
                    d="M40 85 C 40 55, 40 40, 40 20"
                    stroke="#5c8ecf"
                    strokeWidth="3"
                  />
                  <rect
                    x="26"
                    y="82"
                    width="28"
                    height="18"
                    rx="3"
                    fill="#fff"
                    stroke="#c7d9f0"
                    strokeWidth="2"
                  />
                </svg>

                {/* كتب مكدّسة زخرفية */}
                <svg
                  className="absolute bottom-[6px] right-[-24px] w-28 h-16 z-20"
                  viewBox="0 0 110 60"
                  fill="none"
                >
                  <rect
                    x="5"
                    y="35"
                    width="100"
                    height="14"
                    rx="3"
                    fill="#0F172A"
                  />
                  <rect
                    x="10"
                    y="20"
                    width="90"
                    height="14"
                    rx="3"
                    fill="#fff"
                    stroke="#c7d9f0"
                    strokeWidth="2"
                  />
                  <rect
                    x="15"
                    y="5"
                    width="80"
                    height="14"
                    rx="3"
                    fill="#0F172A"
                  />
                </svg>
              </div>
            </div>

            {/* الجانب الأيمن: المحتوى */}
            <div className="space-y-7 text-center justify-center ">
              <div className="inline-flex items-center gap-2 bg-white border border-blue-100 rounded-full pr-4 pl-1.5 py-1.5 shadow-sm">
                <span className="font-extrabold text-[#0F172A] text-sm">
                  أكاديمية مسار
                </span>
                <span className="w-7 h-7 rounded-full bg-[#0047AB] flex items-center justify-center shrink-0">
                  <GraduationCap size={14} className="text-white" />
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight">
                طوّر مهاراتك التقنية
                <br />
                مع أكاديمية مسار
              </h2>

              <p className="text-gray-500 text-lg leading-relaxed max-w-lg mr-0 ml-auto">
                برامج تدريبية عملية في البرمجة، التصميم، التسويق الرقمي، الذكاء
                الاصطناعي، وتحليل البيانات، عبر منصة تعليمية مستقلة ومرنة.
              </p>

              {/* أزرار المهارات */}
              <div className="flex flex-wrap gap-3 justify-center">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 pl-4 pr-1.5 py-1.5 bg-white rounded-full border border-gray-100 shadow-sm text-[#0F172A] font-bold text-sm hover:shadow-md transition-all cursor-pointer"
                  >
                    <span
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${colorMap[skill.color]}`}
                    >
                      <skill.icon size={16} />
                    </span>
                    {skill.name}
                  </div>
                ))}
              </div>

              <button className="inline-flex items-center gap-2 bg-[#0047AB] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#003580] transition-all shadow-[0_14px_30px_rgba(0,71,171,0.28)]">
                انتقل إلى أكاديمية مسار
                <ArrowUpRight size={20} />
              </button>

              <p className="text-xs  text-gray-400 flex  gap-1.5 justify-center">
                منصة تعليمية مستقلة
                <Lock size={13} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
