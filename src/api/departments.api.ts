import type { AxiosInstance } from "axios";
import { axiosClient } from "../utils/axiosClient";
import type { Departement } from "../types/interfaces/department.interface";

const api: AxiosInstance = axiosClient();

export const getDepartmentsApi = async (): Promise<Departement[]> => {
  const { data } = await api.get<Departement[]>("departments");
  return data;
};
