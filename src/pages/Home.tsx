import { useState } from "react";
import { movieType } from "../api/fetchTypes.ts";
import fetchTrendingMovies from "../api/fetchTrending.ts";

export const Home = () => {
  const [data, setData] = useState<movieType>();

  function Check() {
    fetchTrendingMovies()
      .then((data: movieType) => {
        setData(data);
      })
      .catch((err) => console.error(err));
  }

  return (
    <div>
      <button onClick={() => Check()}>CHECK</button>
      {data?.results.map((data) => (
        <>
          <p>{data.title}</p>
          <p>{data.id}</p>
          <img
            src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
            alt=""
          />
        </>
      ))}
    </div>
  );
};
