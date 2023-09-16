import { useState } from "react";
import { movieType } from "../api/fetchTypes.ts";
import fetchTrendingMovies from "../api/fetchTrending.ts";
import { Card } from "../components/Card.tsx";

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

      <div className="flex flex-wrap gap-x-20 gap-y-10 justify-center">
        {data?.results.map((data) => (
          <>
            <Card
              title={data.title}
              poster={data.poster_path}
              date={data.release_date}
              isSearchCard={false}
            />
          </>
        ))}
      </div>
    </div>
  );
};
