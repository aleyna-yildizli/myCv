import { legacy_createStore as createStore } from 'redux';
import { DARK_MODE, darkMode } from './action.js'


//localim null ise false değilse localdekini yaz.

const localDarkMode = localStorage.getItem('darkMode');
const initialState = {
    darkMode: localDarkMode !== null ? JSON.parse(localDarkMode) : false,
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