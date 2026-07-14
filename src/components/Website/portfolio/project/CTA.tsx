import { CTA } from "@/components/Website/home/CTA";

interface ProjectCTAProps {
  serviceTitle?: string;
  serviceSlug?: string;
}

export const ProjectCTA = ({ serviceTitle }: ProjectCTAProps) => {
  return (
    <CTA
      className="py-16 sm:py-20"
      badgeText="حوّل تجربة المشروع إلى فرصة جديدة"
      title="تواجه تحدياً مشابهاً؟"
      highlightedTitle="دعنا نبني الحل المناسب"
      description={
        serviceTitle
          ? `أخبرنا عن احتياجك، وسنساعدك في تحديد حل عملي مستفيدين من خبرتنا في مشروع ${serviceTitle}.`
          : "أخبرنا عن احتياجك، وسنساعدك في تحليل الوضع وتحديد خارطة الطريق الأنسب لمشروعك."
      }
      primaryLabel="نفّذ مشروع مشابه"
      secondaryLabel="تواصل عبر البريد الإلكتروني"
    />
  );
};
