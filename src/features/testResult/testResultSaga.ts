import { call, fork, put, take } from "redux-saga/effects";
import { testResultAction } from "./testResultSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { Result } from "@interfaces/model/TestResult";

function* handleSelectTestResult(payload: {
  results: Result;
  onSuccess?: () => void;
  onFailure?: () => void;
}) {
  try {
    const { results, onSuccess } = payload;
    if (results) {
      yield put(testResultAction.selectSuccess(results));
      if (onSuccess) {
        yield call(onSuccess);
      }
    }
  } catch (error) {
    yield put(testResultAction.selectFailure());
    if (payload.onFailure) {
      yield call(payload.onFailure);
    }
  }
}
function* watchSelectTestResult() {
  while (true) {
    const action: PayloadAction<{
      results: Result;
      onSuccess?: () => void;
      onFailure?: () => void;
    }> = yield take(testResultAction.selectTestResult.type);

    yield fork(handleSelectTestResult, action.payload);
  }
}

export function* selectResultTest() {
  yield fork(watchSelectTestResult);
}
