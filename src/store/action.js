export const TOGGLE_THEME = 'TOGGLE_THEME';
export const TOGGLE_LANGUAGE = 'TOGGLE_LANGUAGE';
export const SET_DATA = 'SET_DATA';



export const theme = () => {
    return { type: TOGGLE_THEME};
}

export const languageTr = () => {
    return { type: TOGGLE_LANGUAGE };
}

export const data = () => {
    return { type: SET_DATA };
}

