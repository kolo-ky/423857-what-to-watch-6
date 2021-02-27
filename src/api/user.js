// axios instance
import {api} from '../axios/axios';

export const checkAuthApi = () => {
  return api.get(`/login`);
};

export const loginApi = (params) => {
  return api.post(`/login`, params);
};

export const logoutApi = (params) => {
  return api.get(`/logout`, params);
};
