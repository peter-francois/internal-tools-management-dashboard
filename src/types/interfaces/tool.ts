export type ToolStatus = "active" | "expiring" | "unused";

export interface Tool {
  id: number;
  name: string;
  icon: string;
  department: string;
  users: number;
  monthlyCost: number;
  status: ToolStatus;
}

export type SortField = keyof Pick<
  Tool,
  "name" | "department" | "users" | "monthlyCost" | "status"
>;
export type SortDir = "asc" | "desc";
