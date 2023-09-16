import axios from "axios";

const axiosPrivate = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_URL_API ?? "http://localhost:3000",
});

export default axiosPrivate;
