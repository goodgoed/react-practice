import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  user: {
    username: "",
    jwt: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: {
      reducer(state, action) {
        state.user = action.payload;
      },
      prepare(username, id, role, jwt) {
        return {
          payload: {
            username,
            jwt,
            role,
            id,
            status: "idle",
          },
        };
      },
    },
    logout(state, action) {
      state.user = {
        username: "",
        jwt: "",
      };
    },
  },
});

export const userReducer = userSlice.reducer;
export const { login, logout } = userSlice.actions;
