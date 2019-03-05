import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Data } from "./getDataReducer";
import PowerReducer from "./powerReducer";
import DisplayReducer from "./displayReducer";
import VolumeReducer from "./volumeReducer";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      data: Data,
      power: PowerReducer,
      display: DisplayReducer,
      volume: VolumeReducer
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
