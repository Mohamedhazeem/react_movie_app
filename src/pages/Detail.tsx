import { useParams } from "react-router-dom";
import { fetchDetails } from "../api/fetchDetails";
import { useState } from "react";
import { details } from "../api/fetchTypes";

import not_found_image from "../assets/not_found.jpg";

export const Details = () => {
  const { mediaType, id } = useParams();

  const [detail, setDetail] = useState<details>();

  // assign this details to state
  const getBaseDetails = (mediaType: string) => {
    fetchDetails(mediaType, Number(id))
      .then((data: details) => {
        setDetail(data);
      })
      .catch((error) => console.log(error));
  };
  mediaType == "movie" && getBaseDetails("movie");
  mediaType == "tv" && getBaseDetails("tv");
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
        <div className="basis-[50%] pl-9 pt-9 text-left text-white">
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

        <p className="text-2xl font-bold ">{detail?.title}</p>
      </div>
    </div>
  );
};
