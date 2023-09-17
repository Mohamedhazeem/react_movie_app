import axios from "axios";
import { searchType } from "./fetchTypes";

export const search = (query: string) => {
  const url =
    `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`;
  const options = {
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_AUTHORIZATION,
    },
  };
  return axios.get<searchType>(url, options).then(response=> response.data);
};
