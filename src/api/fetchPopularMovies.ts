import axios from "axios";
import { movieType } from "./fetchTypes";

export default function fetchPopularMovies(){
    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: import.meta.env.VITE_AUTHORIZATION
  }
};
 return axios.get<movieType>(url, options).then((response) => response.data);
}