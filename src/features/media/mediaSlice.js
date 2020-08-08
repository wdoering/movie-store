import { createSlice } from "@reduxjs/toolkit";
import { getMovies } from "../../services/movie";
import { showSpinner, hideSpinner } from "../loading/loadingSlicer";
import { fetchGenreList } from "../genre/genreSlice";
export const mediaSlice = createSlice({
  name: "media",
  initialState: {
    selectedMedia: {},
    list: [],
  },
  reducers: {
    selectMedia: (state, action) => {
      state.selectedMedia = action.payload;
    },
    setMediaList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { selectMedia, setMediaList } = mediaSlice.actions;

export const fetchMediaList = (genreId, genre) => async (dispatch) => {
  try {
    let genreIDFinal = genreId;
    // in case the user inputs via URL the category, this will be needed
    if (!genreId) {
      await dispatch(fetchGenreList());
    }

    dispatch(showSpinner());
    const apiResponse = await getMovies(genreIDFinal);
    if (!apiResponse) return;
    dispatch(setMediaList(apiResponse.data.results));
    dispatch(hideSpinner());
  } catch (error) {
    dispatch(hideSpinner());
    console.error(error);
  }
};

export const selectMediaList = (state) => {
  return state.media.list;
};

export default mediaSlice.reducer;
