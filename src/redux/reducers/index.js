import * as actionTypes from './actionTypes';

const favouriteReducer = (state = { list: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_FAVOURITE:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case actionTypes.REMOVE_FROM_FAVOURITE:
      return {
        ...state,
        list: state.list.filter((fav) => fav !== action.payload),
      };
    default:
      return state;
  }
};

const searchResultsReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_SEARCH_RESULTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export { favouriteReducer, searchResultsReducer };
