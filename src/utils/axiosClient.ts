import type { AxiosInstance } from "axios";
import axios from "axios";

export const axiosClient = () => {
  const headers = {
    "Content-Type": "application/json",
    "Access-control-Allow-Origin": "*",
  };

  const api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers,
  });

  return api;
};
