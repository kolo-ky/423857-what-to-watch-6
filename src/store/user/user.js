// actions
import {REQUIRED_AUTH, SET_USER} from "../actions";

const initialState = {
  authorizationStatus: false,
  user: {
    name: null,
    avatar: null
  }
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case REQUIRED_AUTH:
      return {...state, authorizationStatus: action.payload};
    case SET_USER:
      return {...state, user: {name: action.payload.name, avatar: action.payload.avatar_url}};
  }

  return state;
};

export {user};
