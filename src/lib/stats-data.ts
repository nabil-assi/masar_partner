export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  isRating?: boolean;
}

export const statsData: StatItem[] = [
  {
    value: 55,
    suffix: "+",
    label: "عملاء سعداء",
  },
  {
    value: 95,
    suffix: "+",
    label: "مشاريع ناجحة",
  },
  {
    value: 120,
    suffix: "+",
    label: "إجمالي العملاء الذين يحبون مسار",
  },
  {
    value: 5.0,
    suffix: "",
    label: "تقييمات 5 نجوم من عملاء راضين",
    isRating: true,
  },
];