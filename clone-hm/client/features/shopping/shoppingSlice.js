import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    addShopping: {
      reducer(state, action) {
        console.log(action);
        state.push(action.payload);
      },
      prepare(name, price, imageSrc) {
        return {
          payload: {
            id: nanoid(),
            name,
            price,
            imageSrc,
          },
        };
      },
    },
  },
});

export const shoppingReducer = shoppingSlice.reducer;
export const { addShopping } = shoppingSlice.actions;
