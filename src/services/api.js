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

// const setHeaders = (res) => {
//   if(res.headers["access-token"] && res.headers["access-token"] !== "") {
//     const apiData = {
//       "Content-Type": res.headers["application/x-www-form-urlencoded"],
//       "access-token": res.headers["access-token"],
//       "token-type": res.headers["access-token"],
//       uid: res.headers.uid,
//     };
//     api.defaults.headers = apiData;

//   }
// }

// api.interceptors.response.use((res) => {
//   setHeaders(res);
//   return res;
// })

export default api;