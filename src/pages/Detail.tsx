import { useParams } from "react-router-dom";
import {
  BasicDetails,
  CreditDetails,
  SimilarDetails,
} from "../api/fetchDetails";
import { useState } from "react";
import { creditType, details, searchType } from "../api/fetchTypes";

import not_found_image from "../assets/not_found.jpg";
import { SimilarCard } from "../components/SimilarCard";
import { CastCredit } from "../components/CastCredit";

export const Details = () => {
  const { mediaType, id } = useParams();

  const [detail, setDetail] = useState<details>();
  const [credit, setCredit] = useState<creditType>();
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
  const getCreditDetails = (mediaType: string) => {
    CreditDetails(mediaType, Number(id))
      .then((data: creditType) => {
        setCredit(data);
      })
      .catch((error) => console.log(error));
  };
  const getDetails = (mediaType: string) => {
    getBaseDetails(mediaType);
    getSimilarDetails(mediaType);
    getCreditDetails(mediaType);
  };
  mediaType == "movie" && getDetails("movie");
  mediaType == "tv" && getDetails("tv");

  return (
    <div className="w-full h-full bg-gray-500">
      <section className="flex md:flex-row flex-col pt-20 lg:pl-36 pl-10 ">
        <img
          src={`${
            detail?.poster_path != null
              ? `https://image.tmdb.org/t/p/original${detail.poster_path}`
              : `${not_found_image}`
          }`}
          alt=""
          className={"lg:w-72 w-32 border-white border-8"}
        />
        <div className="lg:basis-[40%] md:[pl-9 pt-9] pt-5 text-left text-white">
          <p className="text-2xl font-bold mb-5">
            {detail?.title || detail?.name}
          </p>
          <p className="text-xl font-bold ">
            Release Date : {detail?.release_date || detail?.first_air_date}
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
        <div className="lg:flex hidden flex-col ">
          <p className="text-start font-semibold text-2xl text-yellow-200">{`SIMILAR ${
            mediaType?.toLocaleUpperCase() || ""
          }`}</p>
          <div className="grid grid-cols-2 grid-rows-2 gap-3 pt-5 mb-16 items-center">
            {similarDetails.results.map(
              (result, index) =>
                index < 4 && (
                  <SimilarCard
                    id={result.id}
                    key={result.id}
                    mediaType={mediaType!}
                    title={result.name || result.title || ""}
                    poster={result.poster_path}
                    isSearchCard={false}
                  />
                )
            )}
          </div>
        </div>
      </section>

      <section className="lg:px-36 px-10 py-10 text-justify ">
        <div className="">
          <p className="text-black font-bold underline text-xl">PLOT SUMMARY</p>
          <p>{detail?.overview}</p>
        </div>
        <div>
          <p className="font-bold text-xl py-5 text-yellow-200">CAST</p>
          {credit?.cast.map(
            (credit, index) =>
              index < 4 && (
                <CastCredit
                  profile={credit.profile_path}
                  name={credit.name}
                  character={credit.character}
                />
              )
          )}
        </div>
      </section>

      <div className="lg:hidden flex-col px-5">
        <p className="font-semibold text-2xl text-yellow-200">{`SIMILAR ${
          mediaType?.toLocaleUpperCase() || ""
        }`}</p>
        <div className="flex flex-row gap-10 pt-5">
          {similarDetails.results.map(
            (result, index) =>
              index < 4 && (
                <SimilarCard
                  id={result.id}
                  key={result.id}
                  mediaType={mediaType!}
                  title={result.name || result.title || ""}
                  poster={result.poster_path}
                  isSearchCard={false}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};
