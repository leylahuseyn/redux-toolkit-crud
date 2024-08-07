import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './Slices/categoriesSlice';
import favoritesReducer from './Slices/favoritesSlice';
import basketReducer from './Slices/basketSlice'; 
const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    favorites: favoritesReducer,
    basket: basketReducer, 
  },
});

export default store;
