import type { SortField } from "../../types/interfaces/tool";

interface SortIconProps {
  field: SortField;
  sortField: SortField | null;
  sortDir: "asc" | "desc";
}

export default function SortIcon({ field, sortField, sortDir }: SortIconProps) {
  return (
    <span className={`ml-1 text-xs ${sortField === field ? "text-gray-700 dark:text-neutral-200" : "text-gray-300 dark:text-neutral-600"}`}>
      {sortField === field ? (sortDir === "asc" ? "↑" : "↓") : "↕"}
    </span>
  );
}