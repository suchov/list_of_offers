import {
  CHANGE_SEARCH_FIELD,
  ON_BUTTON_CLICK,
  REQUEST_CARS_PENDING,
  REQUEST_CARS_SUCESS,
  REQUEST_CARS_FAILED
} from "./constants.js";

export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export const setButtonClick = text => ({
  type: ON_BUTTON_CLICK,
  payload: text
})

export const requestCars = () => dispatch => {
  dispatch({ type: REQUEST_CARS_PENDING });
  fetch("https://content.sixt.io/codingtasks/offers.json")
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_CARS_SUCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_CARS_FAILED, payload: error }));
};
