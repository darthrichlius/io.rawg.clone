import axios from "axios";
import ApiConfig from "@/config/api";

const instance = axios.create({
  baseURL: ApiConfig.baseUrl,
});

instance.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    key: import.meta.env.VITE_API_RAWG_IO_API_KEY,
  };
  return config;
});

export default instance;
