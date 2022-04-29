import axios from 'axios';
import store from '../store';

const axiosApiInstance = axios.create({
  baseURL: 'http://localhost:3000/',
});

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  async (config) => {
    if (store.state.user.isAuthenticated) {
      config.headers = {
        Authorization: `Bearer ${store.state.user.token}`,
      };
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);






export default axiosApiInstance;
