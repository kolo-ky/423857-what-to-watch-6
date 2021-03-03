// actions
import {CHANGE_GENRE, SET_MOVIES, SET_FAVORITE_MOVIE, TOGGLE_LOADING} from "../actions";

const initialState = {
  genre: null,
  films: [],
  promo: {},
  loading: true,
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_GENRE:
      return {...state, genre: action.payload};
    case TOGGLE_LOADING:
      return {...state, loading: !state.loading};
    case SET_MOVIES:
      return {...state, films: [...state.films, ...action.payload]};
    case SET_FAVORITE_MOVIE:
      const updatedFilmList = state.films.map((item) => {
        if (item.id === action.payload.id) {
          item[`is_favorite`] = !item[`is_favorite`];
        }

        return item;
      });
      return {...state, films: [...updatedFilmList]};
  }

  return state;
};

export {movies};
