import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.3.218:3000",
});

api.interceptors.request.use(async (config) => {
  //remove this token for login and register
  if (config.url === "/auth/login" || config.url === "/auth/register") {
    return config;
  }
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
