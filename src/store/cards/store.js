import { configureStore } from '@reduxjs/toolkit';
import cards from './reduсers';

const store = configureStore({
    reducer: {
        cards
    }
});

export default store;
