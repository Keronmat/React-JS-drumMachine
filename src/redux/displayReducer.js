import * as ActionTypes from "./ActionTypes";

const DisplayReducer = (
  state = { display: "React-JS Drum-machine" },
  action
) => {
  switch (action.type) {
    case ActionTypes.DISPLAY:
      return {
        ...state,
        display: action.payload
      };

    default:
      return state;
  }
};
export default DisplayReducer;
