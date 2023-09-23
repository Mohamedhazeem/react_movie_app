import { useParams } from "react-router-dom";

export const Details = () => {
  const { mediaType, id } = useParams();
  return (
    <>
      {" "}
      card media type is {mediaType} and id is {id}
    </>
  );
};
