export const CHANGE_GENRE = `CHANGE_GENRE`;
export const TOGGLE_LOADING = `TOGGLE_LOADING`;
export const SET_MOVIES = `SET_MOVIES`;
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
