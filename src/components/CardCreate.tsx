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
        <Card
          id={data.id}
          key={data.id}
          mediaType={data.media_type || "movie"}
          title={data.title}
          poster={data.poster_path}
          date={data.release_date}
          isSearchCard={isSearchCard}
        />
      ))}
      {popularSeries?.results.map((data) => (
        <Card
          id={data.id}
          key={data.id}
          mediaType={data.media_type || "tv"}
          title={data.name}
          poster={data.poster_path}
          date={data.first_air_date}
          isSearchCard={isSearchCard}
        />
      ))}
      {searchType && (
        <Card
          id={searchType.id}
          key={searchType.id}
          mediaType={searchType.media_type}
          title={searchType.name || searchType.title || ""}
          poster={searchType.poster_path}
          date={searchType.first_air_date || searchType.release_date || ""}
          isSearchCard={isSearchCard}
        />
      )}
    </div>
  );
};
