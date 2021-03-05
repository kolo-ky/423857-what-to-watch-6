// axios instance
import {api} from '../axios/axios';

export const getMovieCommentsApi = (id) => {
  return api.get(`/comments/${id}`);
};

export const addMovieCommentsApi = ({id, reviewForm}) => {
  return api.post(`/comments/${id}`, reviewForm);
};
