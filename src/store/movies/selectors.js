import {nameSpace} from '../root-reducer';

export const getFilms = (state) => state[nameSpace.MOVIES].films;
export const isLoading = (state) => state[nameSpace.MOVIES].loading;
export const getGenre = (state) => state[nameSpace.MOVIES].genre;
export const filmSelector = (state) => (id) => state[nameSpace.MOVIES].films.find((film) => film.id === Number(id));
export const getFilteredFilms = (state) => (count) => {
  if (state[nameSpace.MOVIES].genre) {
    return state[nameSpace.MOVIES].films.filter((film) => film.genre === state[nameSpace.MOVIES].genre).slice(0, count);
  }

  return state[nameSpace.MOVIES].films.slice(0, count);
};
export const getFilmsCount = (state) => {
  if (state[nameSpace.MOVIES].genre) {
    return state[nameSpace.MOVIES].films.filter((film) => film.genre === state[nameSpace.MOVIES].genre).length;
  }

  return state[nameSpace.MOVIES].films.length;
};
export const getFavoriteFilms = (state) => state[nameSpace.MOVIES].films.filter((film) => film.is_favorite);
