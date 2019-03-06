import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";
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

/* to be used only if getting data from server
export const fetchData = () => dispatch => {
  dispatch(dataLoading(true));

  return fetch(baseUrl + "BUTTONDATA")
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );

          error.response = response;
          console.log(error);
          throw error;
        }
      },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    .then(data => dispatch(addData(data)))
    .catch(error => dispatch(dataFailed(error.message)));
};
*/
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
export const toggleIsPlaying = id => ({
  type: ActionTypes.IS_PLAYING,
  payload: id
});
