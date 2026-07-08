import {
  Rocket,
  Users,
  Headphones,
  GraduationCap,
  ShoppingCart,
  Building2,
  LucideIcon,
} from "lucide-react";

export interface Sector {
  id: string;
  label: string;
  icon: LucideIcon;
  matchCategories: string[]; // الفئات المرتبطة من services-data.ts
}

export const sectors: Sector[] = [
  {
    id: "startups",
    label: "مشاريع ناشئة",
    icon: Rocket,
    matchCategories: ["منصات رقمية", "تصميم وتجربة"],
  },
  {
    id: "organizations",
    label: "مبادرات ومنظمات",
    icon: Users,
    matchCategories: ["استشارات", "أنظمة أعمال"],
  },
  {
    id: "booking-services",
    label: "خدمات وحجوزات",
    icon: Headphones,
    matchCategories: ["منصات رقمية"],
  },
  {
    id: "education",
    label: "تعليم وتدريب",
    icon: GraduationCap,
    matchCategories: ["منصات رقمية", "تصميم وتجربة"],
  },
  {
    id: "ecommerce",
    label: "تجارة إلكترونية",
    icon: ShoppingCart,
    matchCategories: ["منصات رقمية", "تسويق"],
  },
  {
    id: "companies",
    label: "شركات ومؤسسات",
    icon: Building2,
    matchCategories: ["أنظمة أعمال", "استشارات"],
  },
];