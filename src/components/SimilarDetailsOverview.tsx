import { searchType } from "../api/fetchTypes";
import { SimilarCard } from "./SimilarCard";

type SimilarDetailsType = {
  screenType: string;
  mediaType: string;
  similarDetails: searchType;
};
export const SimilarDetailsOverview = ({
  mediaType,
  similarDetails,
  screenType,
}: SimilarDetailsType) => {
  return (
    <div
      className={` ${
        screenType == "big"
          ? "lg:flex hidden flex-col"
          : "lg:hidden flex-col px-5"
      }`}
    >
      <p
        className={` ${
          screenType == "big" ? "text-start " : ""
        }font-semibold text-2xl text-yellow-200"`}
      >{`SIMILAR ${mediaType?.toLocaleUpperCase() || ""}`}</p>
      <div
        className={`${
          screenType == "big"
            ? "grid grid-cols-2 grid-rows-2 gap-3 pt-5 mb-16 items-center"
            : "flex flex-row gap-10 pt-5"
        }`}
      >
        {similarDetails.results.map(
          (result, index) =>
            index < 4 && (
              <SimilarCard
                id={result.id}
                key={result.id}
                mediaType={mediaType}
                title={result.name || result.title || ""}
                poster={result.poster_path}
                isSearchCard={false}
              />
            )
        )}
      </div>
    </div>
  );
};
