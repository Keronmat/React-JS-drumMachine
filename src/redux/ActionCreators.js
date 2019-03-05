import * as ActionTypes from "./ActionTypes";
import { BUTTONDATA } from "../shared/data";

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

export const fetchData = () => dispatch => {
  dispatch(dataLoading(true));

  setTimeout(() => {
    dispatch(addData(BUTTONDATA));
  }, 2000);
};

export const dataLoading = () => ({
  type: ActionTypes.DATA_LOADING
});

export const dataFailed = errmess => ({
  type: ActionTypes.DATA_FAILED,
  payload: errmess
});

export const addData = dataObj => ({
  type: ActionTypes.ADD_DATA,
  payload: dataObj
});
