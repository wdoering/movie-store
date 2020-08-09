import { createSlice } from "@reduxjs/toolkit";
import { getMovies, getMovie } from "../../services/movie";
import { showSpinner, hideSpinner } from "../loading/loadingSlicer";
import { fetchGenreList } from "../genre/genreSlice";
export const mediaSlice = createSlice({
  name: "media",
  initialState: {
    selectedMedia: null,
    list: [],
    pageNumber: 1,
  },
  reducers: {
    setSelectedMedia: (state, action) => {
      state.selectedMedia = action.payload;
    },
    setMediaList: (state, action) => {
      state.list = action.payload;
    },
    addMedia: (state, action) => {
      state.list = state.list.concat(action.payload);
    },
    incrementPageNumber: (state) => {
      state.pageNumber += 1;
    },
    clearMedia: (state) => {
      // state = state.initialState;
      // no success with above approach
      state.list = [];
      state.selectedMedia = null;
      state.pageNumber = 1;
    },
  },
});

export const {
  setSelectedMedia,
  setMediaList,
  incrementPageNumber,
  addMedia,
  clearMedia,
} = mediaSlice.actions;

export const fetchMediaList = (genreId, pageNumber) => async (dispatch) => {
  try {
    // in case the user inputs via URL the category, this will be needed
    if (!genreId) {
      await dispatch(fetchGenreList());
    }

    dispatch(showSpinner());
    const apiResponse = await getMovies(genreId, pageNumber);
    if (!apiResponse) return;

    dispatch(addMedia(apiResponse.data.results));
    dispatch(incrementPageNumber());
    dispatch(hideSpinner());
  } catch (error) {
    dispatch(hideSpinner());
    console.error(error);
  }
};

export const fetchMedia = (mediaId) => async (dispatch) => {
  try {
    dispatch(showSpinner());
    const apiResponse = await getMovie(mediaId);
    dispatch(setSelectedMedia(apiResponse.data));
    dispatch(hideSpinner());
    return apiResponse.data;
  } catch (error) {
    dispatch(hideSpinner());
    console.error(error);
  }
};

export const selectMediaList = (state) => {
  return state.media.list;
};

export const selectPageNumber = (state) => {
  return state.media.pageNumber;
};
export const selectMedia = (state, mediaId) => {
  if (state.media.selectedMedia) return state.media.selectedMedia;
  return state.media.list.find((media) => {
    return media.id === mediaId;
  });
};

export default mediaSlice.reducer;
