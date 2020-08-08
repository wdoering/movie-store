import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import genreReducer from "../features/media/genre/genreSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    genre: genreReducer,
  },
});
