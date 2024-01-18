import { configureStore } from "@reduxjs/toolkit";
import PizzaReducer from "../Redux/ReduxSlices";

export const store = configureStore({
  reducer: {
    pizza: PizzaReducer,
  },
});
