import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../components/redux/todoSlice";

export const store = configureStore({
  reducer: {
    // put the reducers here
    todo: todoReducer,
  },
});
