import type { AxiosInstance } from "axios";
import { axiosClient } from "../utils/axiosClient";
import type { Analitics } from "../types/interfaces/analytics.interface";

const api: AxiosInstance = axiosClient();

export const getAnaliticsApi = async (): Promise<Analitics> => {
  const { data } = await api.get<Analitics>("analytics");
  return data;
};
