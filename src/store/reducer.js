// actions
import {CHANGE_GENRE} from "./action";

// mocks
import films from '../mocks/films';

const initialState = {
  genre: null,
  films
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_GENRE:
      return {...state, genre: action.payload};
    default: return state;
  }
};

export default reducer;
