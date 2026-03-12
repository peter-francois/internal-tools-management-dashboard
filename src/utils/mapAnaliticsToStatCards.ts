import { STAT_CARDS_VISUAL } from "../types/contants/statCards.constant";
import type { Analitics } from "../types/interfaces/analytics.interface";

export const mapAnaliticsToStatCards = (
  data: Analitics,
  activeTools: string,
  departments: string,
) => ({
  budget: {
    ...STAT_CARDS_VISUAL.monthlyBudget,
    value: `€${(data.budget_overview.current_month_total / 1000).toLocaleString()}k`,
    valueSecondary: `/ €${(data.budget_overview.monthly_limit / 1000).toLocaleString()}k`,
    trend: data.kpi_trends.budget_change,
  },
  tools: {
    ...STAT_CARDS_VISUAL.activeTools,
    value: activeTools,
    trend: data.kpi_trends.tools_change,
  },
  departments: {
    ...STAT_CARDS_VISUAL.departments,
    value: departments,
    trend: data.kpi_trends.departments_change,
  },
  costPerUser: {
    ...STAT_CARDS_VISUAL.costPerUser,
    value: `€${data.cost_analytics.cost_per_user.toLocaleString()}`,
    trend: data.kpi_trends.cost_per_user_change,
  },
});
