import type { AxiosInstance } from "axios";
import { axiosClient } from "../utils/axiosClient";
import type { Tool } from "../types/interfaces/tool.interface";

const api: AxiosInstance = axiosClient();

export const getToolsApi = async (): Promise<Tool[]> => {
  const { data } = await api.get<Tool[]>("tools");
  return data;
};
