export const CHANGE_GENRE = `CHANGE_GENRE`;
export const SET_LOADING = `SET_LOADING`;
export const SET_MOVIES = `SET_MOVIES`;

export const changeGenreAction = (payload) => {
  return {
    type: CHANGE_GENRE,
    payload
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

export const setMovies = (payload) => {
  return {
    type: SET_MOVIES,
    payload
  };
};
