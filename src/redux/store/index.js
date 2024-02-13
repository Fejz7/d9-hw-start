import { configureStore } from '@reduxjs/toolkit';
import { favouriteReducer, searchResultsReducer } from '../reducers';

const store = configureStore({
  reducer: {
    favourite: favouriteReducer,
    searchResults: searchResultsReducer,
  },
});

export default store;
