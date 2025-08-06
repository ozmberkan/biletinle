import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      try {
        await axios.post("http://localhost:5000/api/auth/refresh", {}, { withCredentials: true });
      } catch (err) {
        return null;
      }
    }

    return Promise.reject(error);
  }
);
