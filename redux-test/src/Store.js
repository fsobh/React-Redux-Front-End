import { createStore, combineReducers } from 'redux'
import promiseMiddleware from 'redux-promise-middleware';


// get reducers from their files

let rootReducer = combineReducers({

    //put reducers here


})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware)); //export all reducers and apply Promise middleware for async action creators

