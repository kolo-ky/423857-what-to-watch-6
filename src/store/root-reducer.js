// redux
import {combineReducers} from "redux";

// reducers
import {user} from "./user/user";
import {movies} from "./movies/movies";

const nameSpace = {
  USER: `USER`,
  MOVIES: `MOVIES`
};

export const rootReducer = combineReducers({
  [nameSpace.USER]: user,
  [nameSpace.MOVIES]: movies,
});
