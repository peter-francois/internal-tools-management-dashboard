import type { SortField } from "../interfaces/tool";

export const TOOL_STATUS = {
  active: {
    label: "Active",
    fromColor: "from-emerald-400",
    viaColor: "via-emerald-500",
    toColor: "to-teal-600",
  },
  expiring: {
    label: "Expiring",
    fromColor: "from-orange-400",
    viaColor: "via-orange-500",
    toColor: "to-amber-600",
  },
  unused: {
    label: "Unused",
    fromColor: "from-red-400",
    viaColor: "via-red-500",
    toColor: "to-rose-600",
  },
} as const;

export type ToolStatus = keyof typeof TOOL_STATUS;

export const COLUMNS: { label: string; field: SortField }[] = [
  { label: "Tool", field: "name" },
  { label: "Department", field: "department" },
  { label: "Users", field: "users" },
  { label: "Monthly Cost", field: "monthlyCost" },
  { label: "Status", field: "status" },
] as const;
