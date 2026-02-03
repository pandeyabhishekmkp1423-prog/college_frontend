import axios from "axios";

/**
 * Public API client
 * Works for:
 * - Localhost
 * - Render backend
 * - Vercel frontend
 * - Future production deployments
 */

const publicApi = axios.create({
  // MUST match api.js exactly
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
});

// Response error logging (safe for production)
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
