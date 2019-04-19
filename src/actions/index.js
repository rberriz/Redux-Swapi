// we'll need axios
import axios from "axios";
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING_CHAR = "FETCHING_CHAR";
export const FETCHING_CHAR_SUCCESS = "FETCHING_CHAR_SUCCESS";
export const FETCHING_CHAR_FAILURE = "FETCHING_CHAR_FAILURE";

export const fetchChars = () => dispatch => {
  dispatch({ type: FETCHING_CHAR });
  axios
    .get("https://swapi.co/api/people/")
    .then(response => {
      dispatch({ type: FETCHING_CHAR_SUCCESS, payload: response.data.results });
    })
    .catch(error => {
      dispatch({ type: FETCHING_CHAR_FAILURE, payload: error });
    });
};

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
