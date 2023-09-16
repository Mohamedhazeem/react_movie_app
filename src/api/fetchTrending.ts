import axios from "axios";
import { movieType, seriesType } from "./fetchTypes.ts";

export  function fetchTrendingMovies () {
    const url =
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
    const options = {
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_AUTHORIZATION,
    },
  };
    return axios.get<movieType>(url, options).then((res) => res.data);
}
export  function fetchTrendingSeries () {
  const url =
  "https://api.themoviedb.org/3/trending/tv/day?language=en-US";
  const options = {
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_AUTHORIZATION,
  },
};
  return axios.get<seriesType>(url, options).then((res) => res.data);
}