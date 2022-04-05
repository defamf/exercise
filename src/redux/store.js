import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slice";

export default configureStore({
  reducer: {
    search: searchReducer,
  },
});
