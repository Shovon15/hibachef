import { combineReducers } from "@reduxjs/toolkit";
import loaderReducer from "./slices/loaderSlice";
import toastReducer from "./slices/toastSlice";
import navigationReducer from "./slices/navigationSlice";
import productReducer from "./slices/productSlice";
import settingsReducer from "./slices/settingsSlice";
import searchResultReducer from "./slices/searchResultSlice";

const RootReducer = combineReducers({
  loader: loaderReducer,
  toast: toastReducer,
  product: productReducer,
  navigation: navigationReducer,
  settings: settingsReducer,
  searchResult: searchResultReducer,
});

export default RootReducer;
