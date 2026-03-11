import type { StatCardProps } from "../../types/statCard";
import { gradient } from "../../utils/gradients";

export default function StatCard({
  label,
  icon,
  value,
  valueSecondary,
  trend,
  trendVariant,
  fromColor,
  viaColor,
  toColor,
}: StatCardProps) {
  const iconBg = gradient(fromColor, viaColor, toColor);
  const trendNegativeBg = "bg-rose-600 text-white dark:bg-red-900/30 dark:text-red-400";
  const trendClass =
    trendVariant === "positive" ? gradient(fromColor, viaColor, toColor, "r") : trendNegativeBg;
  return (
    <article className="rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="flex items-center justify-between mb-8">
        <p>{label}</p>
        <span
          className={`flex h-8 w-8 items-center justify-center rounded-lg text-white ${iconBg}`}
        >
          {icon}
        </span>
      </div>

      <div className="mb-2">
        <span className="text-2xl font-bold text-neutral-900 dark:text-white">{value}</span>
        {valueSecondary && (
          <span className="text-2xl font-bold text-neutral-400 dark:text-neutral-500">
            {valueSecondary}
          </span>
        )}
      </div>

      <span
        className={`inline-flex items-center rounded-full px-2 py-1.5 text-xs text-white ${trendClass}`}
      >
        {trend}
      </span>
    </article>
  );
}
