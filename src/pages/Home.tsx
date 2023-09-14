import { useState } from "react";

type moveiType = {
  page: number;
  results: [
    {
      adult: boolean;
      backdrop_path: string;
      id: number;
      title: string;
      original_language: string;
      original_title: string;
      overview: string;
      poster_path: string;
      media_type: string;
      genre_ids: number[];
      popularity: number;
      release_date: string;
      video: false;
      vote_average: number;
      vote_count: number;
    }
  ];
};

export const Home = () => {
  const [data, setData] = useState<moveiType>();
  function Check() {
    const url =
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_AUTHORIZATION,
      },
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((data: moveiType) => setData(data))
      .catch((err) => console.error(err));
  }

  return (
    <div>
      <button onClick={() => Check()}>CHECK</button>
      {data?.results.map((data) => (
        <>
          <p>{data.title}</p>
          <p>{data.id}</p>
          <p>{`https://image.tmdb.org/t/p/original${data.poster_path}`}</p>
          <img
            src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
            alt=""
          />
        </>
      ))}
    </div>
  );
};
