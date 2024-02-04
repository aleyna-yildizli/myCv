import { legacy_createStore as createStore } from 'redux';
import { DARK_MODE, LANGUAGE_TR, darkMode } from './action.js'


//localim null ise false değilse localdekini (dark) yaz.

const localDarkMode = localStorage.getItem('darkMode');
const localLanguage = localStorage.getItem('language');
const initialState = {
    darkMode: localDarkMode !== null ? JSON.parse(localDarkMode) : false,
    language: localLanguage === null ? "EN" : JSON.parse(localLanguage),
    }
  
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "DARK_MODE":
        return { 
            ...state,
            darkMode: !state.darkMode,
         };
         case "LANGUAGE_TR":
        return { 
            ...state,
            language: state.language === "EN" ? "TR" : "EN",
         };
      default:
        return state;
    }
  };


export const myStore = createStore(reducer);