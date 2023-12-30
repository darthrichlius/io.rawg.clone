import ApiConfig, { ApiResource } from "@/config/api";
import axios, { AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: ApiConfig.baseUrl,
});

const ApiService = {
  getAll: <T>({
    resource,
    config,
  }: {
    resource: ApiResource;
    config?: AxiosRequestConfig;
  }) => {
    return instance
      .get<T>(
        ApiConfig.resources[resource].default.endpoint,
        config
      )
      .then((res) => res.data);
  },
  getOne: <T>({
    resource,
    config,
    URL,
  }: {
    resource: ApiResource;
    config?: AxiosRequestConfig;
    URL?: string;
  }) => {
    return instance
      .get<T>(URL ?? ApiConfig.resources[resource].default.endpoint, config)
      .then((res) => res.data);
  },
};

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

export default ApiService;
