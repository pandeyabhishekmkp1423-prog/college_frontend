import axios from "axios";

/**
 * Public API client
 * Works for:
 * - Local (localhost)
 * - Render backend
 * - Vercel frontend
 * - Future Hostinger deployment
 */

const publicApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
});

// Optional: basic response error logging (helps diagnosis)
publicApi.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(
      "Public API error:",
      error?.response?.status,
      error?.response?.data || error.message
    );
    return Promise.reject(error);
  }
);

export default publicApi;
