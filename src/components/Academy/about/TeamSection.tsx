import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

export const TeamSection = () => {
  const team = [
    { name: "ليلى حسن", role: "مدرسة علوم البيانات", img: "/images/about/team1.png" },
    { name: "خالد محمود", role: "مدرس تطوير الواجهات", img: "/images/about/team2.png" },
    { name: "سارة العلمي", role: "خبيرة تجربة المستخدم", img: "/images/about/team3.png" },
    { name: "أحمد منصور", role: "مدرس هندسة البرمجيات", img: "/images/about/team4.png" },
  ];

  return (
    <section className="py-20 bg-[#020617] text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-almarai">فريق العمل</h2>
        <p className="text-gray-400 mb-16 text-sm md:text-base font-almarai">
          نخبة من المحترفين والخبراء الملتزمين بتقديم أفضل تجربة تعليمية.
        </p>

        {/* تعديل الشبكة لتكون أكثر مرونة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-[#111827] rounded-2xl overflow-hidden border border-white/5 hover:border-orange-500/30 transition-all duration-300 group"
            >
              <div className="relative h-72 w-full grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5 flex items-center justify-between">
                <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
                  <FaLinkedin size={22} />
                </a>
                <div className="text-right">
                  <h3 className="font-bold text-sm font-almarai">{member.name}</h3>
                  <p className="text-[#FFB692] text-[11px] mt-1 font-almarai">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};