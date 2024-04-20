export const TOGGLE_THEME = 'TOGGLE_THEME';
export const TOGGLE_LANGUAGE = 'TOGGLE_LANGUAGE';
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_LOADING = "FETCH_LOADING";
import axios from "axios";



export const theme = () => {
    return { type: TOGGLE_THEME};
}

export const languageTr = () => {
    return { type: TOGGLE_LANGUAGE };
}

export const fetchSuccess = (data) => {
    return { type: FETCH_SUCCESS, payload: data };
};


export const fetchLoading = (boolean) => {
    return { type: FETCH_LOADING, payload: boolean  };
};


export const fetchAnother = () => (dispatch) => {
    dispatch(fetchLoading(true));
    axios
      .get(
        "https://65bfb6c325a83926ab958094.mockapi.io/api/v1/data")
      .then((res) => {
       dispatch(fetchSuccess(res.data))
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      })
      .finally(() => {
        dispatch(fetchLoading(false));
      });
      
  };