import { useQuery } from "@tanstack/react-query";
import { getToolsApi } from "../api/tool.api";
import { FIVE_MINUTE_IN_MS } from "../types/contants/time.constant";
import type { ToolsQueryParams } from "../types/interfaces/tool.interface";

export const useTools = (params?: ToolsQueryParams) =>
  useQuery({
    queryKey: ["tools", params],
    queryFn: () => getToolsApi(params),
    staleTime: FIVE_MINUTE_IN_MS,
  });