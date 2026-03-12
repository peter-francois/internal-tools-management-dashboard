import type { StatCardProps } from "../../types/interfaces/statCard";
import { gradient } from "../../utils/gradients";
import Badge from "./Badge";

export default function StatCard({
  label,
  icon,
  value,
  valueSecondary,
  trend,
  fromColor,
  viaColor,
  toColor,
}: StatCardProps) {
  const iconBg = gradient(fromColor, viaColor, toColor);
  const trendClass = gradient(fromColor, viaColor, toColor, "r");
  return (
    <article
      className="rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-200
        hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-md dark:border-neutral-800
        dark:bg-neutral-950 dark:hover:border-neutral-700"
    >
      <div className="mb-8 flex items-center justify-between">
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

      <Badge label={trend} trendClass={trendClass} />
    </article>
  );
}
