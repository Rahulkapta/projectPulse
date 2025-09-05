import axios from "axios";

const api = axios.create({
  // baseURL: "https://project-pulse-blue.vercel.app/api/v1",
  baseURL: "http://10.19.250.155:8000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
