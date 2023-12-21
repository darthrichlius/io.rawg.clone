import axios from "axios";
import ApiConfig from "@/config/api";

const instance = axios.create({
  baseURL: ApiConfig.baseUrl,
});

/**
 * ! IMPORTANT
 * We use the interceptor approach because in PROD the key is not passed
 * I don't know if it is a bug or a problem related to the server or whatever
 * Following this, I used this solution until further investigation
 */
instance.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    key: import.meta.env.VITE_API_RAWG_IO_API_KEY,
  };
  return config;
});

export default instance;
