import * as ActionTypes from "./ActionTypes";

export const togglePower = currentState => {
  return {
    type: ActionTypes.POWER,
    power: !currentState
  };
};
export const toggleVolume = newVolume => {
  return {
    type: ActionTypes.VOLUME,
    volume: newVolume
  };
};
export const toggleDisplay = newDisplay => {
  return {
    type: ActionTypes.DISPLAY,
    display: newDisplay
  };
};
