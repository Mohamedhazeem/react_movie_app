import axios from "axios";
import { movieType } from "./fetchTypes.ts";

export default function fetchTrendingMovies () {
    const url =
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  const options = {
    //method: "GET",
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_AUTHORIZATION,
    },
  };
//    return fetch(url, options)
//     .then((res) => res.json())
    return axios.get<movieType>(url, options).then((res) => res.data);
}