import Image from "next/image";
import { Users } from "lucide-react";

const team = [
  { name: "مصطفى الصواف", role: "المؤسس والمدير التنفيذي", avatar: "/Website/images/about/team/avatar4.svg" },
  { name: "كريم زيدان", role: "مهندس برمجيات", avatar: "/Website/images/about/team/avatar3.svg" },
  { name: "عبدالرحمن محمد", role: "مطور مواقع", avatar: "/Website/images/about/team/avatar2.svg" },
  { name: "عبدالرحمن ياسر", role: "مطور تطبيقات موبايل", avatar: "/Website/images/about/team/avatar1.svg" },
  { name: "محمد الجداوي", role: "مطور واجهات وعمليات تطوير", avatar: "/Website/images/about/team/avatar5.svg" },
  { name: "عبدالله الشرقاوي", role: "مصمم واجهة وتجربة مستخدم", avatar: "/Website/images/about/team/avatar6.svg" },
];

export const TeamSection = () => {
  return (
    <section id="team" className="py-20 sm:py-24 lg:py-28" dir="rtl">
      <div className="website-container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="masar-eyebrow gap-2"><Users className="h-4 w-4" /> فريق مسار</span>
          <h2 className="mt-5 text-3xl font-extrabold text-[#071b4e] sm:text-4xl">خبرات مختلفة تعمل كفريق واحد</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">يجمع فريقنا بين فهم الأعمال والتصميم والهندسة لبناء تجربة متماسكة من الفكرة حتى التشغيل.</p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-6">
          {team.map((member) => (
            <article key={member.name} className="group overflow-hidden rounded-[1.5rem] border border-slate-200/70 bg-white p-3 shadow-[0_12px_35px_rgba(17,65,124,0.06)] transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_20px_50px_rgba(17,65,124,0.10)] sm:p-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.1rem] bg-gradient-to-br from-blue-50 to-slate-100">
                <Image src={member.avatar} alt={member.name} fill sizes="(min-width: 1024px) 360px, (min-width: 640px) 33vw, 50vw" className="object-contain p-5 transition duration-500 group-hover:scale-105 sm:p-8" />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#071b4e]/10 to-transparent" />
              </div>
              <div className="px-2 pb-2 pt-4 text-right">
                <h3 className="text-sm font-extrabold text-[#071b4e] sm:text-base">{member.name}</h3>
                <p className="mt-1.5 text-xs leading-5 text-slate-500 sm:text-sm">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
