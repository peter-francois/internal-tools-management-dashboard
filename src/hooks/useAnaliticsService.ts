import { useQuery } from "@tanstack/react-query";
import {
  FIVE_MINUTE_IN_MS,
  ONE_MINUTE_IN_MS,
  TEN_MINUTE_IN_MS,
  TWO_MINUTE_IN_MS,
} from "../types/contants/time.constant";
import { getAnaliticsApi } from "../api/analitics.api";
import { getToolsApi } from "../api/tool.api";
import { getDepartmentsApi } from "../api/departments.api";

export const useAnalytics = () =>
  useQuery({
    queryKey: ["analitics"],
    queryFn: getAnaliticsApi,
    staleTime: TWO_MINUTE_IN_MS,
    refetchInterval: ONE_MINUTE_IN_MS,
  });

export const useActiveToolsCount = () =>
  useQuery({
    queryKey: ["tools", "active"],
    queryFn: () => getToolsApi({ status: "active" }),
    select: (data) => data.length,
    staleTime: FIVE_MINUTE_IN_MS,
    refetchInterval: TWO_MINUTE_IN_MS,
  });

export const useDepartmentsCount = () =>
  useQuery({
    queryKey: ["departments"],
    queryFn: getDepartmentsApi,
    select: (data) => data.length,
    staleTime: TEN_MINUTE_IN_MS,
    refetchInterval: FIVE_MINUTE_IN_MS,
  });
