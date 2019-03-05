import * as ActionTypes from "./ActionTypes";

const PowerReducer = (state = { power: false }, action) => {
  switch (action.type) {
    case ActionTypes.POWER:
      return {
        ...state,
        power: action.payload
      };

    default:
      return state;
  }
};
export default PowerReducer;
