interface BadgeProps {
  label: string;
  trendClass: string;
}

export default function Badge({ label, trendClass }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium text-white
        ${trendClass}`}
    >
      {label}
    </span>
  );
}
