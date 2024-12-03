import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoginPayload, User } from "../../interfaces/model/User";

export interface AuthState {
  isLoggedIn: boolean;
  logging?: boolean;
  currentUser?: User;
}
const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  currentUser: undefined,
};
//
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>) {
      state.logging = true;
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.isLoggedIn = true;
      state.logging = false;
      state.currentUser = action.payload;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.logging = false;
    },
    logout(state) {
      state.logging = false;
      state.currentUser = undefined;
    },
  },
});

// actions
export const authActions = authSlice.actions;

// selectors
export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
export const selectLogging = (state: any) => state.auth.logging;
// Reducers
const authReducer = authSlice.reducer;
export default authReducer;
