import { createSlice } from "@reduxjs/toolkit";

type TAuthState = {
  current_user: string | null;
  token: string | null;
};

const initialValue: TAuthState = {
  current_user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialValue,
  reducers: {
    setUser: (state, { payload }) => {
      state.current_user = payload.current_user;
      state.token = payload.token;
    },
  },
});
export const loginState = (state) => state.auth;
export const { setUser } = authSlice.actions;
export default authSlice.reducer;
