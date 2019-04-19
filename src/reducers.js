import { CHANGE_SEARCH_FIELD } from "./constants.js";

const initialState = {
  searchField: ""
};

export const searchCars = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload }); //return { ...state, searchField: action.payload } as an option
    default:
      return state;
  }
};
