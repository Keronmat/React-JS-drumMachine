import * as ActionTypes from "./ActionTypes";

const VolumeReducer = (state = { volume: 0.5 }, action) => {
  switch (action.type) {
    case ActionTypes.VOLUME:
      return {
        ...state,
        volume: action.payload
      };

    default:
      return state;
  }
};
export default VolumeReducer;
