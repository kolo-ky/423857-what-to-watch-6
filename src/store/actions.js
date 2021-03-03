export const CHANGE_GENRE = `CHANGE_GENRE`;
export const TOGGLE_LOADING = `TOGGLE_LOADING`;
export const SET_MOVIES = `SET_MOVIES`;
export const SET_PROMO = `SET_PROMO`;
export const SET_FAVORITE_MOVIE = `SET_FAVORITE_MOVIE`;
export const REQUIRED_AUTH = `REQUIRED_AUTH`;
export const SET_USER = `SET_USER`;

export const changeGenre = (payload) => {
  return {
    type: CHANGE_GENRE,
    payload
  };
};

export const toggleLoading = () => {
  return {
    type: TOGGLE_LOADING
  };
};

export const setMovies = (payload) => {
  return {
    type: SET_MOVIES,
    payload
  };
};

export const setPromo = (payload) => {
  return {
    type: SET_PROMO,
    payload
  };
};

export const requiredAuth = (payload) => {
  return {
    type: REQUIRED_AUTH,
    payload
  };
};

export const setUser = (payload) => {
  return {
    type: SET_USER,
    payload
  };
};

export const setFavoriteMovie = (payload) => {
  return {
    type: SET_FAVORITE_MOVIE,
    payload
  };
};
