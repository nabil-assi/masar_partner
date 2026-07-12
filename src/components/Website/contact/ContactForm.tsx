"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { ArrowLeft, Check, MessageCircle, Send, ShieldCheck, Sparkles } from "lucide-react";

const services = [
  { value: "websites", label: "تطوير المواقع والمنصات" },
  { value: "automation-systems", label: "الأنظمة وأتمتة الأعمال" },
  { value: "mobile-apps", label: "تطبيقات الجوال" },
  { value: "design", label: "الهوية والتصميم الرقمي" },
  { value: "consulting", label: "الاستشارات الرقمية" },
  { value: "marketing", label: "التسويق الرقمي" },
];

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}

const initialFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  budget: "",
  timeline: "",
  message: "",
};

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "opened">("idle");

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((previous) => ({ ...previous, [field]: value }));
    if (errors[field]) setErrors((previous) => ({ ...previous, [field]: undefined }));
    if (status === "opened") setStatus("idle");
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.fullName.trim()) nextErrors.fullName = "اكتب اسمك الكامل";
    if (!formData.phone.trim()) nextErrors.phone = "أضف رقم التواصل";
    if (!formData.service) nextErrors.service = "اختر الخدمة الأقرب لاحتياجك";
    if (!formData.message.trim()) nextErrors.message = "اكتب نبذة قصيرة عن المشروع";
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) nextErrors.email = "تحقق من البريد الإلكتروني";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    const serviceLabel = services.find((service) => service.value === formData.service)?.label;
    const whatsappMessage = [
      "مرحباً فريق مسار، أرغب في مناقشة مشروع جديد.",
      `الاسم: ${formData.fullName}`,
      formData.company ? `الشركة: ${formData.company}` : "",
      `رقم التواصل: ${formData.phone}`,
      formData.email ? `البريد: ${formData.email}` : "",
      `الخدمة: ${serviceLabel ?? formData.service}`,
      formData.budget ? `الميزانية المتوقعة: ${formData.budget}` : "",
      formData.timeline ? `موعد البدء: ${formData.timeline}` : "",
      `نبذة المشروع: ${formData.message}`,
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/970567465929?text=${encodeURIComponent(whatsappMessage)}`, "_blank", "noopener,noreferrer");
    setStatus("opened");
  };

  return (
    <section id="project-form" className="scroll-mt-28 px-4 py-20 sm:px-6 sm:py-24 lg:py-28" dir="rtl">
      <div className="website-container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="masar-eyebrow gap-2"><Sparkles className="h-4 w-4" /> أخبرنا عن مشروعك</span>
          <h2 className="mt-5 text-3xl font-extrabold leading-[1.45] text-[#071b4e] sm:text-4xl">لنحدد معاً الخطوة الأولى</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">املأ المعلومات الأساسية، وسنجهزها لك في رسالة واتساب منظمة لتبدأ المحادثة مباشرة مع الفريق.</p>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-[1.12fr_.88fr] lg:gap-8">
          <div className="rounded-[2rem] border border-slate-200/70 bg-white p-5 shadow-[0_18px_55px_rgba(17,65,124,0.07)] sm:p-8 lg:p-10">
            <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-6">
              <div>
                <h3 className="text-xl font-extrabold text-[#071b4e] sm:text-2xl">بيانات المشروع</h3>
                <p className="mt-2 text-sm text-slate-500">الحقول المعلّمة مطلوبة لبدء المحادثة.</p>
              </div>
              <span className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#075dc7] sm:flex"><Send className="h-5 w-5" /></span>
            </div>

            <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="الاسم الكامل" required error={errors.fullName}>
                  <input type="text" autoComplete="name" value={formData.fullName} onChange={(event) => handleChange("fullName", event.target.value)} placeholder="مثال: محمد أحمد" className={fieldClass(Boolean(errors.fullName))} aria-invalid={Boolean(errors.fullName)} />
                </Field>
                <Field label="اسم الشركة" error={errors.company}>
                  <input type="text" autoComplete="organization" value={formData.company} onChange={(event) => handleChange("company", event.target.value)} placeholder="اختياري" className={fieldClass(false)} />
                </Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="رقم التواصل" required error={errors.phone}>
                  <input type="tel" autoComplete="tel" value={formData.phone} onChange={(event) => handleChange("phone", event.target.value)} placeholder="+970 ..." dir="ltr" className={`${fieldClass(Boolean(errors.phone))} text-right`} aria-invalid={Boolean(errors.phone)} />
                </Field>
                <Field label="البريد الإلكتروني" error={errors.email}>
                  <input type="email" autoComplete="email" value={formData.email} onChange={(event) => handleChange("email", event.target.value)} placeholder="name@company.com" dir="ltr" className={`${fieldClass(Boolean(errors.email))} text-right`} aria-invalid={Boolean(errors.email)} />
                </Field>
              </div>

              <Field label="الخدمة المطلوبة" required error={errors.service}>
                <select value={formData.service} onChange={(event) => handleChange("service", event.target.value)} className={`${fieldClass(Boolean(errors.service))} bg-white ${formData.service ? "text-[#071b4e]" : "text-slate-400"}`} aria-invalid={Boolean(errors.service)}>
                  <option value="" disabled>اختر الخدمة الأقرب للمشروع</option>
                  {services.map((service) => <option key={service.value} value={service.value}>{service.label}</option>)}
                </select>
              </Field>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="الميزانية المتوقعة" error={errors.budget}>
                  <select value={formData.budget} onChange={(event) => handleChange("budget", event.target.value)} className={`${fieldClass(false)} bg-white ${formData.budget ? "text-[#071b4e]" : "text-slate-400"}`}>
                    <option value="">اختر نطاقاً تقريبياً</option>
                    <option value="أقل من 3,000 دولار">أقل من 3,000 دولار</option>
                    <option value="من 3,000 إلى 10,000 دولار">من 3,000 إلى 10,000 دولار</option>
                    <option value="أكثر من 10,000 دولار">أكثر من 10,000 دولار</option>
                    <option value="أحتاج مساعدة في التقدير">أحتاج مساعدة في التقدير</option>
                  </select>
                </Field>
                <Field label="الوقت المتوقع للبدء" error={errors.timeline}>
                  <select value={formData.timeline} onChange={(event) => handleChange("timeline", event.target.value)} className={`${fieldClass(false)} bg-white ${formData.timeline ? "text-[#071b4e]" : "text-slate-400"}`}>
                    <option value="">اختر الوقت المناسب</option>
                    <option value="بأسرع وقت">بأسرع وقت</option>
                    <option value="خلال شهر">خلال شهر</option>
                    <option value="خلال 3 أشهر">خلال 3 أشهر</option>
                    <option value="ما زلنا ندرس الفكرة">ما زلنا ندرس الفكرة</option>
                  </select>
                </Field>
              </div>

              <Field label="نبذة عن المشروع أو التحدي" required error={errors.message}>
                <textarea value={formData.message} onChange={(event) => handleChange("message", event.target.value)} placeholder="ما الذي تريد بناءه؟ وما المشكلة التي ترغب في حلها؟" rows={5} className={`${fieldClass(Boolean(errors.message))} min-h-32 resize-y py-3.5`} aria-invalid={Boolean(errors.message)} />
              </Field>

              <button type="submit" className="flex min-h-[54px] w-full items-center justify-center gap-3 rounded-xl bg-[#075dc7] px-6 text-sm font-extrabold text-white shadow-[0_14px_30px_rgba(7,93,199,0.22)] transition hover:-translate-y-0.5 hover:bg-[#064fa8]">
                متابعة الطلب عبر واتساب <MessageCircle className="h-5 w-5" />
              </button>

              {status === "opened" ? (
                <p role="status" className="flex items-center justify-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-center text-sm font-bold text-emerald-700"><Check className="h-4 w-4" /> تم تجهيز الطلب وفتح واتساب لإرساله.</p>
              ) : null}

              <p className="flex items-center justify-center gap-2 text-center text-xs leading-6 text-slate-400"><ShieldCheck className="h-4 w-4 text-slate-300" /> لن يتم حفظ بياناتك في الموقع؛ تنتقل فقط إلى رسالة واتساب.</p>
            </form>
          </div>

          <aside className="relative overflow-hidden rounded-[2rem] bg-[#071b4e] p-6 text-white shadow-[0_22px_65px_rgba(7,27,78,0.16)] sm:p-8 lg:p-10">
            <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-blue-500/20 blur-[85px]" />
            <div className="absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-cyan-400/10 blur-[85px]" />
            <div className="relative flex h-full flex-col">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-300"><MessageCircle className="h-5 w-5" /></span>
              <h3 className="mt-7 text-2xl font-extrabold sm:text-3xl">ماذا يحدث بعد إرسال الطلب؟</h3>
              <p className="mt-4 text-sm leading-7 text-blue-100/70">نريد أن تكون البداية واضحة وبسيطة، لذلك تمر المحادثة بثلاث خطوات عملية.</p>

              <div className="mt-8 space-y-3">
                {[
                  ["01", "نراجع الاحتياج", "نفهم الهدف والتحدي ونحدد الأسئلة الأساسية."],
                  ["02", "جلسة اكتشاف قصيرة", "نناقش النطاق والأولوية والنتيجة المتوقعة."],
                  ["03", "تصور للخطوة التالية", "نقترح المسار الأنسب ونوضح طريقة التنفيذ."],
                ].map(([number, title, description]) => (
                  <div key={number} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-300/15 text-xs font-extrabold text-cyan-200">{number}</span>
                      <strong className="text-sm">{title}</strong>
                    </div>
                    <p className="mt-2 pr-11 text-xs leading-6 text-blue-100/60">{description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-8">
                <a href="https://wa.me/970567465929" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-extrabold text-cyan-200 transition hover:text-white">تفضّل محادثة مباشرة؟ افتح واتساب <ArrowLeft className="h-4 w-4" /></a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

function Field({ children, error, label, required = false }: { children: ReactNode; error?: string; label: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-[#071b4e]">{label} {required ? <span className="text-rose-500">*</span> : <span className="text-xs font-normal text-slate-400">(اختياري)</span>}</span>
      {children}
      {error ? <span className="mt-1.5 block text-xs font-bold text-rose-600">{error}</span> : null}
    </label>
  );
}

function fieldClass(hasError: boolean) {
  return `min-h-[50px] w-full rounded-xl border px-4 text-sm text-[#071b4e] outline-none transition placeholder:text-slate-400 focus:ring-4 ${hasError ? "border-rose-300 bg-rose-50/30 focus:border-rose-400 focus:ring-rose-100" : "border-slate-200 bg-slate-50/50 focus:border-blue-300 focus:bg-white focus:ring-blue-100/70"}`;
}
