import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import reducer from './reducer.js';



export const myStore = createStore(reducer, applyMiddleware(thunk, logger));


