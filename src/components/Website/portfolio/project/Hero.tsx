import { PageHero } from "@/components/Website/shared/PageHero";

interface HeroProps {
  breadcrumbLabel: string;
  tag: string;
  title: string;
  description: string;
}

export const Hero = ({ breadcrumbLabel, tag, title, description }: HeroProps) => {
  return (
    <PageHero
      eyebrow={tag}
      breadcrumbs={[
        { label: "أعمالنا", href: "/portfolio" },
        { label: breadcrumbLabel },
      ]}
      title={title}
      description={description}
      actions={[
        { label: "ابدأ مشروع مشابه", href: "/contact" },
        { label: "كل الأعمال", href: "/portfolio", variant: "secondary" },
      ]}
      compact
    />
  );
};
