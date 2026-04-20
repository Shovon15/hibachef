import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./rootReducer";
import { ENV } from "../../secret";

export const store = configureStore({
  reducer: RootReducer,
  devTools: ENV.NODE_ENV !== "production",
});

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
