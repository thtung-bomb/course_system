import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TestResultState {
  question: number;
  falseNumber: number;
  trueNumber: number;
}

const initialState: TestResultState = {
  question: 0,
  falseNumber: 0,
  trueNumber: 0,
};
const testResultSlice = createSlice({
  name: "testResult",
  initialState,
  reducers: {
    selectTestResult: (
      state,
      action: PayloadAction<{
        results: TestResultState;
        onSuccess?: () => void;
        onFailure?: () => void;
      }>,
    ) => {},
    selectSuccess: (state, action: PayloadAction<TestResultState>) => {
      state.question = action.payload.question;
      state.falseNumber = action.payload.falseNumber;
      state.trueNumber = action.payload.trueNumber;
    },
    selectFailure: (state) => {
      state.question = 0;
      state.falseNumber = 0;
      state.trueNumber = 0;
    },
  },
});
export const testResultAction = testResultSlice.actions;

export const selectTestResult = (state: any) => state;

// Reducers
const testResultReducer = testResultSlice.reducer;
export default testResultReducer;
