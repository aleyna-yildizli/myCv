import { TOGGLE_THEME, TOGGLE_LANGUAGE } from './action.js';

const localTheme = localStorage.getItem('theme');
const localLanguage = localStorage.getItem('language');

const initialState = {
    theme: localTheme !== null ? JSON.parse(localTheme) : "light",
    language: localLanguage === null ? "EN" : JSON.parse(localLanguage),
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return {
                ...state,
                theme: state.theme === "light" ? "dark" : "light",
            };
        case TOGGLE_LANGUAGE:
            return {
                ...state,
                language: state.language === "EN" ? "TR" : "EN",
            };

        default:
            return state;
    }
};

export default reducer;
