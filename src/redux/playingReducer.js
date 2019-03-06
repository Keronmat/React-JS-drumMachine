import * as ActionTypes from "./ActionTypes";

const PlayingReducer = (state = { playing: null }, action) => {
  switch (action.type) {
    case ActionTypes.IS_PLAYING:
      return {
        ...state,
        playing: action.payload
      };

    default:
      return state;
  }
};
export default PlayingReducer;
