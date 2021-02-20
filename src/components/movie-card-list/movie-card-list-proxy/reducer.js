const initialState = {
  to: 8
};

const ActionType = {
  SHOW_MORE: `SHOW_MORE`,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ActionType.SHOW_MORE:
      return {...state, to: state.to * 2};
    default:
      return state;
  }
};

export default {
  ActionType,
  initialState,
  reducer
};
