import { useEffect, useState } from "react";
import { movieType, seriesType } from "../api/fetchTypes.ts";
import { Card } from "../components/Card.tsx";
import fetchPopularMovies from "../api/fetchPopularMovies.ts";
import fetchPopularSeries from "../api/fetchPopularSeries.ts";
import { CardCreate } from "../components/CardCreate.tsx";

export const Home = () => {
  const [popularMovie, setPopularMovie] = useState<movieType>();
  const [popularSeries, setPopularSeries] = useState<seriesType>();

  useEffect(() => {
    PopularMovies();
    PopularSeries();
  }, []);

  function PopularMovies() {
    fetchPopularMovies()
      .then((data: movieType) => {
        setPopularMovie(data);
      })
      .catch((err) => console.error(err));
  }
  function PopularSeries() {
    fetchPopularSeries()
      .then((data: seriesType) => {
        setPopularSeries(data);
      })
      .catch((err) => console.error(err));
  }

  return (
    <div>
      <p className="text-center text-3xl font-semibold text-orange-500">
        POPULAR MOVIES
      </p>
      <CardCreate popularMovie={popularMovie} isSearchCard={false} />
      <p className="text-center text-3xl font-semibold text-orange-500">
        POPULAR SERIES
      </p>
      <CardCreate popularSeries={popularSeries} isSearchCard={false} />
    </div>
  );
};
