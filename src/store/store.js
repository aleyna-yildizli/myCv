import { legacy_createStore as createStore } from 'redux';

const globalReducer = (state, action) => {
    return state;
  }
  

export const myStore = createStore(globalReducer);