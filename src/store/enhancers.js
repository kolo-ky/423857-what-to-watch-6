// actions
import {toggleLoading, setMovies} from "./action";

// api
import {getMoviesApi} from "../api/movies";

export const getMovies = () => (next, _getState) => {
  next(toggleLoading());
  getMoviesApi().then((resp) => {
    next(setMovies(resp.data));
    next(toggleLoading());
  });
};
