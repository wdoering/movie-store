import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import genreReducer from "../features/genre/genreSlice";
import mediaReducer from "../features/media/mediaSlice";
import loadingReducer from "../features/loading/loadingSlicer";
import shoppingCartReducer from "../features/shoppingCart/shoppingCartSlice";
import logger from "../middlewares/logger";
export default configureStore({
  reducer: {
    counter: counterReducer,
    genre: genreReducer,
    media: mediaReducer,
    loading: loadingReducer,
    shoppingCart: shoppingCartReducer,
  },
  middleware: [...getDefaultMiddleware(), logger],
});
