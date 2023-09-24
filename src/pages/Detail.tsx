import { useParams } from "react-router-dom";
import { fetchDetails } from "../api/fetchDetails";
import { useState } from "react";
import { details } from "../api/fetchTypes";

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
  return (
    <>
      {" "}
      {/*card media type is {mediaType} and id is {id}*/}
      {mediaType == "movie" && getBaseDetails("movie")}
      {mediaType == "tv" && getBaseDetails("tv")}
      {/* create detail page below */}
      {detail?.overview}
    </>
  );
};
