// actions
import {CHANGE_GENRE, SET_MOVIES, TOGGLE_LOADING} from "./action";

const initialState = {
  genre: null,
  films: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_GENRE:
      return {...state, genre: action.payload};
    case TOGGLE_LOADING:
      return {...state, loading: !state.loading};
    case SET_MOVIES:
      return {...state, films: [...state.films, ...action.payload]};
    default: return state;
  }
};

export default reducer;
