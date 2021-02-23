// actions
import {setLoading, setMovies} from "./action";

// api
import {getMoviesApi} from "../api/movies";

export const getMovies = () => (next, _getState) => {
  next(setLoading());
  getMoviesApi().then((resp) => {
    next(setMovies(resp.data));
    next(setLoading());
  });
};
