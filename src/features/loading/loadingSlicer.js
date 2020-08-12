import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "loading",
  initialState: {
    isLoading: false,
    isDarkTheme: "dark",
  },
  reducers: {
    block: (state) => {
      state.isLoading = true;
    },
    release: (state) => {
      state.isLoading = false;
    },
    changeTheme: (state) => {
      state.isDarkTheme = state.isDarkTheme === "dark" ? "light" : "dark";
    },
  },
});

export const { block, release, changeTheme } = counterSlice.actions;

export const showSpinner = () => (dispatch) => {
  dispatch(block());
};
export const hideSpinner = () => (dispatch) => {
  dispatch(release());
};
export const toggleDarkMode = () => (dispatch) => {
  dispatch(changeTheme());
};

export const selectLoading = (state) => state.loading.isLoading;
export const selectDarkTheme = (state) => state.loading.isDarkTheme;
export default counterSlice.reducer;
