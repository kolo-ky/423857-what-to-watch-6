// axios
import axios from 'axios';

// store
import {requiredAuth} from "../store/actions";

const httpCode = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
  NOT_FOUND: 404
};

export const createApi = (onAuthorized) => {
  const api = axios.create({
    baseURL: `https://6.react.pages.academy/wtw`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (error) => {
    if (error.status === httpCode.UNAUTHORIZED) {
      onAuthorized();

      throw error;
    }

    throw error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export const api = createApi(
    () => requiredAuth(false)
);
