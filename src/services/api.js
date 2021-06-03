import axios from "axios";
import { baseURL } from "utils/constants/endpoints";

const headers = {
  "Content-Type": "application/json; charset=utf-8",
  "Accept": "application/json"
};

const api = axios.create({
  baseURL,
  headers,
});


export default api;