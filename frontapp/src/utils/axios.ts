import axios from 'axios';
import store from '../store';

const axiosApiInstance = axios.create();

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  async (config) => {
    if (store.state.user.isAuthenticated) {
      config.headers = {
        Authorization: `Bearer ${store.state.user.token}`,
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      };
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

// Response interceptor for API calls
// axiosApiInstance.interceptors.response.use((response) => {
//   return response
// }, async function (error) {
//   const originalRequest = error.config;
//   if (error.response.status === 403 && !originalRequest._retry) {
//     originalRequest._retry = true;
//     const access_token = await refreshAccessToken();
//     axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
//     return axiosApiInstance(originalRequest);
//   }
//   return Promise.reject(error);
// });

export default axiosApiInstance;
