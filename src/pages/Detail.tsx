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
import { OverviewAndCast } from "../components/OverviewAndCast";
import { SimilarDetailsOverview } from "../components/SimilarDetailsOverview";

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
        <SimilarDetailsOverview
          screenType={"big"}
          mediaType={mediaType!}
          similarDetails={similarDetails}
        />
      </section>

      <OverviewAndCast detail={detail!} credit={credit!} />

      <SimilarDetailsOverview
        screenType={"small"}
        mediaType={mediaType!}
        similarDetails={similarDetails}
      />
    </div>
  );
};
