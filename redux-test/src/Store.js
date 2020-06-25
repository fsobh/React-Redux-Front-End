import { createStore, combineReducers, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";

// get reducers from their files
import AnimalReducer from "./AnimalReducers/AnimalDataReducer";

const rootReducer = combineReducers({
  //put reducers here
  animal: AnimalReducer,
});

export default createStore(rootReducer, applyMiddleware(promiseMiddleware)); //export all reducers and apply Promise middleware for async action creators
