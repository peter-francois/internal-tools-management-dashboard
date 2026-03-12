import type { AxiosInstance } from "axios";
import { axiosClient } from "../utils/axiosClient";
import type { Tool, ToolsQueryParams } from "../types/interfaces/tool.interface";

const api: AxiosInstance = axiosClient();

export const getToolsApi = async (params?: ToolsQueryParams): Promise<Tool[]> => {
  const { data } = await api.get<Tool[]>("tools", { params });
  return data;
};
