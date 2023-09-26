import { useParams } from "react-router-dom";
import { BasicDetails, SimilarDetails } from "../api/fetchDetails";
import { useState } from "react";
import { details, searchType } from "../api/fetchTypes";

import not_found_image from "../assets/not_found.jpg";
import { SimilarCard } from "../components/SimilarCard";

export const Details = () => {
  const { mediaType, id } = useParams();

  const [detail, setDetail] = useState<details>();
  const [similarDetails, setSimilarDetails] = useState<searchType>({
    page: 0,
    results: [],
  });

  // assign this details to state
  const getBaseDetails = (mediaType: string) => {
    BasicDetails(mediaType, Number(id))
      .then((data: details) => {
        setDetail(data);
      })
      .catch((error) => console.log(error));
  };
  const getSimilarDetails = (mediaType: string) => {
    SimilarDetails(mediaType, Number(id))
      .then((data: searchType) => {
        setSimilarDetails(data);
      })
      .catch((error) => console.log(error));
  };
  const getDetails = (mediaType: string) => {
    getBaseDetails(mediaType);
    getSimilarDetails(mediaType);
  };
  mediaType == "movie" && getDetails("movie");
  mediaType == "tv" && getDetails("tv");

  return (
    <div className="h-screen bg-gray-500">
      <div className="pt-20 pl-44 flex flex-row">
        <img
          src={`${
            detail?.poster_path != null
              ? `https://image.tmdb.org/t/p/original${detail.poster_path}`
              : `${not_found_image}`
          }`}
          alt=""
          className={"w-72 border-white border-8"}
        />
        <div className="basis-[40%] pl-9 pt-9 text-left text-white">
          <p className="text-2xl font-bold mb-5">{detail?.title}</p>
          <p className="text-xl font-bold ">
            Release Date : {detail?.release_date}
          </p>
          <div className="flex flex-row text-xl font-bold">
            {detail?.genres.map((value, id) =>
              id === 0 ? (
                <p key={id}>{value.name}</p>
              ) : (
                <p key={id}>/{value.name}</p>
              )
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-start font-semibold text-2xl text-yellow-200">{`Similar ${
            mediaType || ""
          }`}</p>
          <div className="grid grid-cols-2 grid-rows-2 gap-3 pt-5 mb-16 items-center">
            {similarDetails.results.map(
              (result, index) =>
                index < 4 && (
                  <SimilarCard
                    id={result.id}
                    key={result.id}
                    mediaType={result.media_type}
                    title={result.name || result.title || ""}
                    poster={result.poster_path}
                    isSearchCard={false}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
