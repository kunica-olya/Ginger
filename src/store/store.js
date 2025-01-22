import { configureStore } from '@reduxjs/toolkit';
import extendedApi from './apis/extendedApi';

const store = configureStore({
  reducer: {
    [extendedApi.reducerPath]: extendedApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat([
      extendedApi.middleware
    ])
});
export default store;
