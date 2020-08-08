import axios from "axios";
import { API_KEY } from "../Constants";
export const getMovies = async (genreId, pageNumber) => {
  if (!genreId) {
    console.error("genre undefined");
    return;
  }
  return axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_genres=${genreId}`
  );
};
