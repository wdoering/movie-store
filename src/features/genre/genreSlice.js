import { createSlice } from "@reduxjs/toolkit";
import { getGenres } from "../../services/genre";
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
    const apiResponse = await getGenres();
    dispatch(setGenreList(apiResponse.data.genres));
  } catch (error) {
    console.error(error);
  }
};

export const selectGenres = (state) => {
  return state.genre.list;
};

export default genreSlice.reducer;
