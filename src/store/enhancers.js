// actions
import {toggleLoading, setMovies, setFavoriteMovie, requiredAuth, setUser} from "./actions";

// api
import {getMoviesApi, setFavoriteMovieApi} from "../api/movies";
import {checkAuthApi, loginApi, logoutApi} from "../api/user";

export const getMovies = () => (dispatch, _getState) => {
  getMoviesApi().then((resp) => {
    dispatch(setMovies(resp.data));
    dispatch(toggleLoading());
  }).catch(() => {});
};

export const sendMovieToFavorite = (params) => (dispatch, _getState) => {
  setFavoriteMovieApi(params).then((resp) => {
    dispatch(toggleLoading());
    dispatch(setFavoriteMovie(resp.data));
    dispatch(toggleLoading());
  }).catch(() => {});
};

export const checkAuth = () => (dispatch, _getState) => {
  return checkAuthApi().then((resp) => {
    dispatch(requiredAuth(true));
    dispatch(setUser(resp.data));
    return Promise.resolve();
  }).catch(() => {});
};

export const login = (params) => (dispatch, _getState) => {
  return loginApi(params).then((resp) => {
    dispatch(requiredAuth(true));
    dispatch(setUser(resp.data));
    return Promise.resolve();
  }).catch(() => {});
};

export const logout = (params) => (dispatch, _getState) => {
  return logoutApi().then(() => {
    dispatch(requiredAuth(false));
    dispatch(setUser(params));
    return Promise.resolve();
  }).catch(() => {});
};
