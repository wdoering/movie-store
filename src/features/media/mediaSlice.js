import { createSlice } from "@reduxjs/toolkit";
import { getMovies } from "../../services/movie";
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

export const fetchMediaList = (genreId) => async (dispatch) => {
  try {
    if (!genreId) return;
    const apiResponse = await getMovies(genreId);

    dispatch(setMediaList(apiResponse.data.results));
  } catch (error) {
    console.error(error);
  }
};

export const selectMediaList = (state) => {
  return state.media.list;
};

export default mediaSlice.reducer;
