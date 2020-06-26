import { createStore, combineReducers, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";

// get reducers from their files
import animalReducer from "./AnimalReducers/AnimalDataReducer";

const rootReducer = combineReducers({
  //put reducers here
  animal: animalReducer,
});

export default createStore(rootReducer, applyMiddleware(promiseMiddleware)); //export all reducers and apply Promise middleware for async action creators
