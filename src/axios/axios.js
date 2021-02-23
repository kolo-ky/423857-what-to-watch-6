import axios from 'axios';

const api = axios.create({
  baseURL: `https://6.react.pages.academy/wtw`,
  timeout: 5000,
  withCredentials: true,
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
      return Promise.reject(error);
    });

export default api;
