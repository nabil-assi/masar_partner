import { Clock3, Mail, MapPin, MessageCircle } from "lucide-react";

const contactItems = [
  { icon: MessageCircle, title: "واتساب", value: "+970 56 746 5929", hint: "للتواصل المباشر", href: "https://wa.me/970567465929" },
  { icon: Mail, title: "البريد الإلكتروني", value: "info@masar.com", hint: "للعروض والمرفقات", href: "mailto:info@masar.com" },
  { icon: Clock3, title: "وقت الرد", value: "خلال يوم عمل", hint: "نراجع كل طلب بعناية", href: "#project-form" },
  { icon: MapPin, title: "نطاق العمل", value: "إقليمياً ودولياً", hint: "نعمل بكفاءة عن بُعد", href: "/about" },
];

export const ContactInfo = () => {
  return (
    <section className="relative -mt-8 px-4 pb-12 sm:-mt-10 sm:px-6 lg:pb-16" dir="rtl">
      <div className="website-container">
        <div className="grid grid-cols-2 gap-3 rounded-[1.75rem] border border-slate-200/70 bg-white p-3 shadow-[0_18px_55px_rgba(17,65,124,0.08)] lg:grid-cols-4 lg:gap-0 lg:p-5">
          {contactItems.map((item, index) => (
            <a key={item.title} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className={`group flex flex-col items-center rounded-2xl px-3 py-5 text-center transition hover:bg-blue-50/60 sm:px-5 ${index > 0 ? "lg:border-r lg:border-slate-100" : ""}`}>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#075dc7] transition group-hover:bg-[#075dc7] group-hover:text-white"><item.icon className="h-5 w-5" /></span>
              <h2 className="mt-4 text-sm font-extrabold text-[#071b4e] sm:text-base">{item.title}</h2>
              <p className="mt-1.5 break-all text-xs font-bold text-slate-600 sm:text-sm" dir={item.title === "نطاق العمل" || item.title === "وقت الرد" ? "rtl" : "ltr"}>{item.value}</p>
              <span className="mt-1 text-[11px] leading-5 text-slate-400 sm:text-xs">{item.hint}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
