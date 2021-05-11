import * as actions from "./actionTypes";

export const initialState = {
  count: 0,
};

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.COUNTER_INC:
      return { ...state, count: state.count + 1 };
    case actions.COUNTER_DEC:
      return { ...state, count: state.count - 1 };
    case actions.COUNTER_ADD:
      return { ...state, count: state.count + action.payload.value };
    case actions.COUNTER_SUB:
      return { ...state, count: state.count - action.payload.value };
    default:
      return state;
  }
};
