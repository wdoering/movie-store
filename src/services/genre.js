import axios from "axios";
import { API_KEY } from "../Constants";
export const getGenres = async () => {
  return axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );
};
