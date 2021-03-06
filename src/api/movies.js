// axios instance
import {api} from '../axios/axios';

export const getMoviesApi = () => {
  return api.get(`/films`);
};

export const getPromoMovieApi = () => {
  return api.get(`/films/promo`);
};

export const setFavoriteMovieApi = (params) => {
  return api.post(`/favorite/${params.film_id}/${params.status}`);
};
