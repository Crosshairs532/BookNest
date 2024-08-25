/* eslint-disable @typescript-eslint/no-unused-vars */
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/features/auth/authSlice";
import { baseAPi } from "./api/baseApi";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "auth",
  storage,
};

export const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    [baseAPi.reducerPath]: baseAPi.reducer,
    auth: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseAPi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
