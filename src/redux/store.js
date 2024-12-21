import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { cartSlice } from './feature/cart/cartSlice';
import userSlice from './feature/user/userSlice';

const cartPersistConfig = {
  key: 'cart',
  version: 1,
  storage,
};

const userPersistConfig = {
  key: 'user',
  version: 1,
  storage,
};

const persistedCartReducer = persistReducer(
  cartPersistConfig,
  cartSlice.reducer
);

const persistedUserReducer = persistReducer(userPersistConfig, userSlice);
const store = configureStore({
  reducer: {
    cartReducer: persistedCartReducer,
    userSlice: persistedUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

let persistor = persistStore(store);

export { store, persistor };
