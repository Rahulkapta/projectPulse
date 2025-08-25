import axios from "axios";

const api = axios.create({
  baseURL: "https://project-pulse-blue.vercel.app/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
