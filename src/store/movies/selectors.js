import {createSelector} from "reselect";
import {nameSpace} from '../root-reducer';

export const getFilms = (state) => state[nameSpace.MOVIES].films;
export const promo = (state) => state[nameSpace.MOVIES].promo;
export const isLoading = (state) => state[nameSpace.MOVIES].loading;
export const getGenre = (state) => state[nameSpace.MOVIES].genre;

export const filmSelector = createSelector(
    (state, filmId) => state[nameSpace.MOVIES].films.find((film) => film.id === Number(filmId)),
    (film) => film
);

export const getFilteredFilms = createSelector(
    (state, count) => {
      if (state[nameSpace.MOVIES].genre) {
        return state[nameSpace.MOVIES].films.filter((film) => film.genre === state[nameSpace.MOVIES].genre).slice(0, count);
      }

      return state[nameSpace.MOVIES].films.slice(0, count);
    },
    (films) => films
);

export const getFilmsCount = createSelector(
    (state) => {
      if (state[nameSpace.MOVIES].genre) {
        return state[nameSpace.MOVIES].films.filter((film) => film.genre === state[nameSpace.MOVIES].genre).length;
      }

      return state[nameSpace.MOVIES].films.length;
    },
    (films) => films
);

export const getFavoriteFilms = (state) => state[nameSpace.MOVIES].films.filter((film) => film.is_favorite);
