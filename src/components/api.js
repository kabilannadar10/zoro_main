import axios from "axios";

const API_BASE = "https://zoro-tech-website-backend.onrender.com/api";

const API = axios.create({
  baseURL: API_BASE,
});

// Attach access token
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("access");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;