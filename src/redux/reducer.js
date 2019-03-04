import * as ActionTypes from "./ActionTypes";

const Reducer = (
  state = { power: false, volume: 0.5, display: "FCC Drum Machine" },
  action
) => {
  switch (action.type) {
    case ActionTypes.POWER:
      return {
        ...state,
        power: action.power
      };
    case ActionTypes.VOLUME:
      return {
        ...state,
        volume: action.volume
      };
    case ActionTypes.DISPLAY:
      return Object.assign({}, state, { display: action.display });

    default:
      return state;
  }
};
export default Reducer;
