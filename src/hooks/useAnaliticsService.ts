import { useQuery } from "@tanstack/react-query";
import { FIVE_MINUTE_IN_MS } from "../types/contants/time.constant";
import { getAnaliticsApi } from "../api/analitics.api";

export const useAnalitics = () =>
  useQuery({
    queryKey: ["analitics"],
    queryFn: () => getAnaliticsApi(),
    staleTime: FIVE_MINUTE_IN_MS,
  });