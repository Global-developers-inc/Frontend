import * as TYPES from "../types/types";

export const colorReducer = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export const colorActualReducer = (state = {color:"rgb(46, 46, 46)",nameColor:'BlackMATE'}, action) => {
  switch (action.type) {
    case TYPES.COLOR_MAIN:
      return action.payload;
    case TYPES.COLOR_SECOND:
      return action.payload;
    case TYPES.COLOR_THIRD:
      return action.payload;
    default:
      return state;
  }
};
