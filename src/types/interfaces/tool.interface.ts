export type ToolStatus = "active" | "expiring" | "unused";

export interface Tool {
  id: number;
  name: string;
  description: string;
  vendor: string;
  category: string;
  monthly_cost: number;
  previous_month_cost: number;
  owner_department: string;
  status: ToolStatus;
  website_url: string;
  active_users_count: number;
  icon_url: string;
  created_at: string;
  updated_at: string;
}

export type SortField = keyof Pick<
  Tool,
  "name" | "owner_department" | "active_users_count" | "monthly_cost" | "status"
>;

export type SortDir = "asc" | "desc";

export type sortType = "updated_at" | "monthly_cost" | "name";

export interface ToolsQueryParams {
  _sort?: sortType;
  _order?: SortDir;
  _limit?: number;
  _page?: number;
  _embed?: "user_tools";
  status: ToolStatus;
}
