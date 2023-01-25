import { configureStore } from "@reduxjs/toolkit";
import { shoppingReducer } from "../features/shopping/shoppingSlice";
import { createWrapper } from "next-redux-wrapper";

const store = () =>
  configureStore({
    reducer: {
      shopping: shoppingReducer,
    },
  });

export const wrapper = createWrapper(store);
