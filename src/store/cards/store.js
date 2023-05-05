import { configureStore } from '@reduxjs/toolkit';
import cards from './reducers';

const store = configureStore({
  reducer: {
    cards
  }
});

export default store;
