import { legacy_createStore as createStore } from 'redux';
import { DARK_MODE } from './action.js'


const initialState = {
    darkMode: false,
  }
  
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "DARK_MODE":
        return { 
            ...state,
            darkMode: !state.darkMode,
         };
   
      default:
        return state;
    }
  };


export const myStore = createStore(reducer);