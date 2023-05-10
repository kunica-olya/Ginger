import { configureStore } from '@reduxjs/toolkit';
import cardsSlice from './slices/cards/slice';

const store = configureStore({
  reducer: {
    cards: cardsSlice
  }
});

export default store;
