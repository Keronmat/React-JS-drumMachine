import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { GetData } from "./getDataReducer";
import PowerReducer from "./powerReducer";
import DisplayReducer from "./displayReducer";
import VolumeReducer from "./volumeReducer";
import PlayingReducer from "./playingReducer";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dataObj: GetData,
      power: PowerReducer,
      display: DisplayReducer,
      volume: VolumeReducer,
      playing: PlayingReducer
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
