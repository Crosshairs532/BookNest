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
    logout: (state) => {
      state.current_user = null;
      state.token = null;
    },
  },
});
export const loginState = (state: any) => state.auth;
export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
export const getUser = (state: any) => {
  return { token: state.auth.token };
};
