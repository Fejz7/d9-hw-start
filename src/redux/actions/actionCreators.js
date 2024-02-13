import * as actionTypes from './actionTypes';

export const addToFavourite = (companyName) => ({
  type: actionTypes.ADD_TO_FAVOURITE,
  payload: companyName,
});

export const removeFromFavourite = (companyName) => ({
  type: actionTypes.REMOVE_FROM_FAVOURITE,
  payload: companyName,
});

export const fetchSearchResultsSuccess = (results) => ({
  type: actionTypes.FETCH_SEARCH_RESULTS_SUCCESS,
  payload: results,
});

export const fetchSearchResults = (query) => {
  return async (dispatch) => {
    try {
      const baseEndpoint = 'https://strive-benchmark.herokuapp.com/api/jobs?search=';
      const response = await fetch(baseEndpoint + query + '&limit=20');

      if (response.ok) {
        const { data } = await response.json();
        dispatch(fetchSearchResultsSuccess(data));
      } else {
        alert('Error fetching results');
      }
    } catch (error) {
      console.log(error);
    }
  };
};
