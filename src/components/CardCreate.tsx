import { movieType, searchResult, seriesType } from "../api/fetchTypes";
import { Card } from "./Card";

type cardCreateType = {
  popularMovie?: movieType;
  popularSeries?: seriesType;
  searchType?: searchResult;
  isSearchCard: boolean;
};
export const CardCreate = ({
  popularMovie,
  popularSeries,
  searchType,
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
      {searchType && (
        <Card
          title={searchType.name || searchType.title || ""}
          poster={searchType.poster_path}
          date={searchType.first_air_date || searchType.release_date || ""}
          isSearchCard={isSearchCard}
        />
      )}
    </div>
  );
};
