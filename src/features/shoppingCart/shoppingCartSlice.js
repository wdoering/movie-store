import { createSlice } from "@reduxjs/toolkit";
import { showSpinner, hideSpinner } from "../loading/loadingSlicer";
export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      if (
        !state.items.some((item) => {
          return item.id === action.payload.id;
        })
      )
        state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => {
        return item.id !== action.payload.id;
      });
    },
  },
});

export const { addItem, removeItem } = shoppingCartSlice.actions;

//Thunk example with loading mock
export const addItemAsync = (item) => (dispatch) => {
  dispatch(showSpinner());
  // setTimeout(() => {
  dispatch(addItem(item));
  dispatch(hideSpinner());
  // }, 2000);
};

//selector function
export const selectShoppingCartList = (state) => {
  return state.shoppingCart.items;
};

export default shoppingCartSlice.reducer;
