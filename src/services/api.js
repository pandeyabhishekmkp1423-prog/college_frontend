import axios from "axios";

const api = axios.create({
  // IMPORTANT: include /api here
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("adminToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(
      "API error:",
      error?.response?.status,
      error?.response?.data || error.message
    );
    return Promise.reject(error);
  }
);

export default api;
