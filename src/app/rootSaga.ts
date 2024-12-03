import { selectResultTest } from "@features/testResult/testResultSaga";
import { authSaga } from "@features/auth/authSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([authSaga(), selectResultTest()]);
}
