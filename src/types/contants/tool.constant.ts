import type { SortField } from "../interfaces/tool.interface";

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
  { label: "Department", field: "owner_department" },
  { label: "Users", field: "active_users_count" },
  { label: "Monthly Cost", field: "monthly_cost" },
  { label: "Status", field: "status" },
] as const;
