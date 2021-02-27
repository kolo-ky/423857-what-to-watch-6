// actions
import {CHANGE_GENRE, SET_MOVIES, REQUIRED_AUTH, TOGGLE_LOADING, SET_USER} from "./action";

const initialState = {
  genre: null,
  films: [],
  loading: true,
  authorizationStatus: false,
  user: {
    email: null,
    avatar: null
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_GENRE:
      return {...state, genre: action.payload};
    case TOGGLE_LOADING:
      return {...state, loading: !state.loading};
    case SET_MOVIES:
      return {...state, films: [...state.films, ...action.payload]};
    case REQUIRED_AUTH:
      return {...state, authorizationStatus: action.payload};
    case SET_USER:
      return {...state, user: {name: action.payload.name, avatar: action.payload.avatar_url}};
    default: return state;
  }
};

export default reducer;
