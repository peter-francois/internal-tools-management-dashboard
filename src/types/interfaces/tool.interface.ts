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

export type sortType = "updated_at" | "monthly_cost" | "name";

export interface ToolsQueryParams {
  _sort?: sortType
  _order?: SortDir
  _limit?: number;
  _page?: number;
  _embed?: "user_tools";
}