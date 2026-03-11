export type TrendVariant = "positive" | "negative";

export interface StatCardProps {
  label: string;
  icon: React.ReactNode;
  value: string;
  valueSecondary?: string;
  trend: string;
  trendVariant: TrendVariant;
  fromColor: string;
  viaColor: string;
  toColor: string;
}
