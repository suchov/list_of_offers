import {
  CHANGE_SEARCH_FIELD,
  REQUEST_CARS_PENDING,
  REQUEST_CARS_SUCESS,
  REQUEST_CARS_FAILED
} from "./constants.js";

const initialStateSearch = {
  searchField: ""
};

export const searchCars = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload }); //return { ...state, searchField: action.payload } as an option
    default:
      return state;
  }
};

const initialStateCars = {
  isPending: false,
  cars: [],
  error: ""
};

export const requestCars = (state = initialStateCars, action = {}) => {
  switch (action.type) {
    case REQUEST_CARS_PENDING:
      return Object.assign({}, state, { isPending: true })
    case REQUEST_CARS_SUCESS:
      return Object.assign({}, state, { cars: action.payload, isPending: false})
    case REQUEST_CARS_FAILED:
      return Object.assign({}, state, { error: action.payload, isPending: false})
    default:
      return state;
  }
}