import axios from "axios";

/**
 * FRONTEND ONLY MODE
 * true  = no backend calls (safe for GitHub/Vercel)
 * false = real backend enabled
 */
const FRONTEND_ONLY = true;

const publicApi = FRONTEND_ONLY
  ? {
      get: async () => {
        // always return empty data
        // components will fall back to dummy data
        return { data: [] };
      },
      post: async () => {
        return { data: { success: true } };
      },
      put: async () => {
        return { data: { success: true } };
      },
      delete: async () => {
        return { data: { success: true } };
      },
    }
  : axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL,
    });

export default publicApi;
