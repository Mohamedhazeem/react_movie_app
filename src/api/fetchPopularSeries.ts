import axios from "axios";
import { seriesType } from "./fetchTypes";

export default function fetchPopularSeries(){
    const url = 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: import.meta.env.VITE_AUTHORIZATION
  }
};
 return axios.get<seriesType>(url, options).then((response) => response.data);
}