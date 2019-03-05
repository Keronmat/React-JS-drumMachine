import * as ActionTypes from "./ActionTypes";

export const togglePower = currentState => {
  return {
    type: ActionTypes.POWER,
    payload: !currentState
  };
};
export const toggleVolume = newVolume => {
  return {
    type: ActionTypes.VOLUME,
    payload: newVolume
  };
};
export const toggleDisplay = newDisplay => {
  return {
    type: ActionTypes.DISPLAY,
    payload: newDisplay
  };
};
