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
      prepare(username, role, jwt) {
        return {
          payload: {
            username,
            jwt,
            role,
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
    changed(state, action) {
      state.user = {
        ...state.user,
        status: action.payload,
      };
    },
  },
});

export const userReducer = userSlice.reducer;
export const { login, logout, changed } = userSlice.actions;
