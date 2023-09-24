import axios from "axios";
import { details } from "./fetchTypes";


export const fetchDetails =  (mediaType: string ,id: number) => {
    const url = mediaType == 'movie' ?
      `https://api.themoviedb.org/3/movie/${id}?language=en-US` :  `https://api.themoviedb.org/3/tv/${id}?language=en-US`;
    const options = {
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_AUTHORIZATION,
      },
    };
    return axios.get<details>(url, options).then(response=> response.data);
  };
  