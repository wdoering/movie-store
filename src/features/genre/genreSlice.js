import { createSlice } from "@reduxjs/toolkit";
import { getGenres } from "../../services/genre";
import { showSpinner, hideSpinner } from "../loading/loadingSlicer";
export const genreSlice = createSlice({
  name: "genre",
  initialState: {
    selectedGenre: {},
    list: [],
  },
  reducers: {
    selectGenre: (state, action) => {
      state.selectedGenre = action.payload;
    },
    setGenreList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { selectGenre, setGenreList } = genreSlice.actions;

export const fetchGenreList = () => async (dispatch) => {
  try {
    dispatch(showSpinner());
    const apiResponse = await getGenres();
    dispatch(setGenreList(apiResponse.data.genres));
    dispatch(hideSpinner());
  } catch (error) {
    dispatch(hideSpinner());
    console.error(error);
  }
};

export const selectGenres = (state) => {
  return state.genre.list;
};

export const getGenreId = (state, genreName) => {
  const genre = state.genre.list.find((item) => item.name === genreName);
  if (genre) return genre.id;
};

export default genreSlice.reducer;
