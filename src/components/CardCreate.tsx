import { movieType, seriesType } from "../api/fetchTypes";
import { Card } from "./Card";

type cardCreateType = {
  popularMovie?: movieType;
  popularSeries?: seriesType;
  isSearchCard: boolean;
};
export const CardCreate = ({
  popularMovie,
  popularSeries,
  isSearchCard,
}: cardCreateType) => {
  return (
    <div className="flex flex-wrap my-9 gap-x-20 gap-y-10 justify-center">
      {popularMovie?.results.map((data) => (
        <>
          <Card
            title={data.title}
            poster={data.poster_path}
            date={data.release_date}
            isSearchCard={isSearchCard}
          />
        </>
      ))}
      {popularSeries?.results.map((data) => (
        <>
          <Card
            title={data.name}
            poster={data.poster_path}
            date={data.first_air_date}
            isSearchCard={isSearchCard}
          />
        </>
      ))}
    </div>
  );
};
