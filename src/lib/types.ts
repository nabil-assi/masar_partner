export type ValueColor = "orange" | "emerald" | "violet" | "blue";

export interface PortfolioProjectItem {
  slug: string;
  image: string;
  tag: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  client: string;
  year: string;
  duration: string;
  gallery: string[];
  overview: string;
  highlights?: string[]; // اختيارية - ما لازم كل مشروع يعرّفها
}