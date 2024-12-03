import Cookies from "universal-cookie";
import { PayloadAction } from "@reduxjs/toolkit";
import { call, fork, put, take } from "redux-saga/effects";
import { LoginPayload } from "../../interfaces/model/User";
import { authActions } from "./authSlice";

const cookies = new Cookies();
function* handleLogin(payload: LoginPayload) {
  try {
    cookies.set("accessToken", "test");
    yield put(
      authActions.loginSuccess({
        id: 1,
        name: "Joginder Singh",
        image:
          "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-10.jpg",
        email: "khanhce171115@fpt.edu.vn",
      }),
    );
  } catch (error: any) {
    yield put(authActions.loginFailed(error.message));
  }
}
function* handleLogout() {
  cookies.remove("accessToken");
}
function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(cookies.get("accessToken"));
    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(
        authActions.login.type,
      );
      yield fork(handleLogin, action.payload);
    }
    yield take(authActions.logout.type);
    yield call(handleLogout);
  }
}

export function* authSaga() {
  yield fork(watchLoginFlow);
}
