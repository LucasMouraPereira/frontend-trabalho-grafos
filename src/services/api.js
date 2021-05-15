import axios from "axios";
import { baseURL } from "utils/constants/endpoints";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const api = axios.create({
  baseURL,
  headers: { "x-api-key": apiKey },
});

export default api;