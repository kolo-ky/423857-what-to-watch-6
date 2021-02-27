// axios instance
import {api} from '../axios/axios';

export const getMoviesApi = () => {
  return api.get(`/films`);
};
