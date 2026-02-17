import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '@/app/services/cryptoApi';
import { cryptoNewsApi } from '@/app/services/cryptoNewsApi'; // Your new API

export const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      cryptoApi.middleware,
      cryptoNewsApi.middleware
    ),
});