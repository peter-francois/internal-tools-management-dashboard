import { useQuery } from "@tanstack/react-query";
import { getToolsApi } from "../api/tool.api";
import { FIVE_MINUTE_IN_MS } from "../types/contants/time.constant";

export const useTools = () =>
  useQuery({
    queryKey: ["tools"],
    queryFn: getToolsApi,
    staleTime: FIVE_MINUTE_IN_MS,
  });
