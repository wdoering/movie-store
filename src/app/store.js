import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import genreReducer from "../features/genre/genreSlice";
import mediaReducer from "../features/media/mediaSlice";
import loadingReducer from "../features/loading/loadingSlicer";

export default configureStore({
  reducer: {
    counter: counterReducer,
    genre: genreReducer,
    media: mediaReducer,
    loading: loadingReducer,
  },
});
