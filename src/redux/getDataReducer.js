import * as ActionTypes from "./ActionTypes";

export const Data = (
  state = { isLoading: true, errMess: null, data: [], playing: false },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_DATA:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        data: action.payload
      };

    case ActionTypes.DATA_LOADING:
      return { ...state, isLoading: true, errMess: null, data: [] };

    case ActionTypes.DATA_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    case ActionTypes.IS_PLAYING:
      return {
        ...state, // copy the state (level 0)
        data: {
          ...state.data, // copy the nested object (level 1)
          playing: action.payload
        }
      };

    default:
      return state;
  }
};
