import axios from "axios";
import { creditType, details, searchResult, searchType } from "./fetchTypes";


export const BasicDetails =  (mediaType: string ,id: number) => {
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

  export const SimilarDetails =  (mediaType: string ,id: number) => {
    const url = mediaType == 'movie' ?
      `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1` :  `https://api.themoviedb.org/3/tv/${id}/similar?language=en-US`;
    const options = {
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_AUTHORIZATION,
      },
    };
    return axios.get<searchType>(url, options).then(response=> response.data);
  };

  export const CreditDetails =  (mediaType: string ,id: number) => {
    const url = mediaType == 'movie' ?
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US&page=1` :  `https://api.themoviedb.org/3/tv/${id}/credits?language=en-US`;
    const options = {
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_AUTHORIZATION,
      },
    };
    return axios.get<creditType>(url, options).then(response=> response.data);
  };