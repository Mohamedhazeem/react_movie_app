import { useOutletContext } from "react-router";
import { CardCreate } from "../components/CardCreate";
import { movieType, searchType } from "../api/fetchTypes";

export const SearchResults = () => {
  const data = useOutletContext<searchType>();

  const movie = () => {
    return data.results.filter((result) => result.media_type === "movie");
  };
  console.log(movie());
  const tv = () => {
    return data.results.filter((result) => result.media_type === "tv");
  };
  return (
    <div>
      <p className="text-center text-3xl font-semibold text-orange-500">
        MOVIES
      </p>
      {movie().map((result) => (
        <CardCreate searchType={result} isSearchCard={false} />
      ))}

      <p className="text-center text-3xl font-semibold text-orange-500">
        SERIES
      </p>
      {tv().map((result) => (
        <CardCreate searchType={result} isSearchCard={false} />
      ))}
    </div>
  );
};
