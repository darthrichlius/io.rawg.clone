import axios from "axios";
import ApiConfig from "@/config/api";

export default axios.create({
  baseURL: ApiConfig.baseUrl,
  params: {
    key: import.meta.env.VITE_API_RAWG_IO_API_KEY,
  },
});
