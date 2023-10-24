import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authReducer";
import { dataApi } from "./query/query";

const RootReducer = combineReducers({
  authReducer,
  [dataApi.reducerPath]: dataApi.reducer,
});

export const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataApi.middleware),
});
