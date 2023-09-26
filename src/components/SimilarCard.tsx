import not_found_image from "../assets/not_found.jpg";
import { Link } from "react-router-dom";
type cardData = {
  id: number;
  mediaType: string;
  poster: string;
  title: string;
  date?: string;
  isSearchCard: boolean;
};

export const SimilarCard = ({ poster, id, mediaType }: cardData) => {
  return (
    <Link to={`/details/${mediaType}/${id}`}>
      <img
        src={`${
          poster != null
            ? `https://image.tmdb.org/t/p/original${poster}`
            : `${not_found_image}`
        }`}
        alt=""
        className={"w-28"}
      />
    </Link>
  );
};
