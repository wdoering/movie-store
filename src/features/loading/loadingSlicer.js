import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "loading",
  initialState: {
    isLoading: false,
  },
  reducers: {
    block: (state) => {
      state.isLoading = true;
    },
    release: (state) => {
      state.isLoading = false;
    },
  },
});

export const { block, release } = counterSlice.actions;

export const showSpinner = () => (dispatch) => {
  dispatch(block());
};
export const hideSpinner = () => (dispatch) => {
  dispatch(release());
};
export const selectLoading = (state) => state.loading.isLoading;

export default counterSlice.reducer;
