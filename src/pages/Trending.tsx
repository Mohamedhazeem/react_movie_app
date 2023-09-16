import { useEffect, useState } from "react";
import { movieType, seriesType } from "../api/fetchTypes.ts";
import { CardCreate } from "../components/CardCreate.tsx";
import {
  fetchTrendingMovies,
  fetchTrendingSeries,
} from "../api/fetchTrending.ts";

export const Trending = () => {
  const [trendingMovie, setTrendingMovie] = useState<movieType>();
  const [trendingSeries, setTrendingSeries] = useState<seriesType>();

  useEffect(() => {
    PopularMovies();
    PopularSeries();
  }, []);

  function PopularMovies() {
    fetchTrendingMovies()
      .then((data: movieType) => {
        setTrendingMovie(data);
      })
      .catch((err) => console.error(err));
  }
  function PopularSeries() {
    fetchTrendingSeries()
      .then((data: seriesType) => {
        setTrendingSeries(data);
      })
      .catch((err) => console.error(err));
  }

  return (
    <div>
      <p className="text-center text-3xl font-semibold text-orange-500">
        TRENDING MOVIES
      </p>
      <CardCreate popularMovie={trendingMovie} isSearchCard={false} />
      <p className="text-center text-3xl font-semibold text-orange-500">
        TRENDING SERIES
      </p>
      <CardCreate popularSeries={trendingSeries} isSearchCard={false} />
    </div>
  );
};
