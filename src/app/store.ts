// import from library
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { connectRouter, routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
// import from source
import rootSaga from "./rootSaga";
import authReducer from "@features/auth/authSlice";
import { history } from "@utils";
import testResultReducer from "@features/testResult/testResultSlice";

const rootReducer = combineReducers({
  router: connectRouter(history),
  auth: authReducer,
  testResult: testResultReducer,
});
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    rootReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware, routerMiddleware(history)),
});
sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
