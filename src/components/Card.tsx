import not_found_image from "../assets/not_found.jpg";
import { Link } from "react-router-dom";
type cardData = {
  id: number;
  poster: string;
  title: string;
  date: string;
  isSearchCard: boolean;
};

export const Card = ({ poster, title, date, isSearchCard, id }: cardData) => {
  return (
    <Link
      to={`/details/${id}`}
      className={`flex ${
        isSearchCard
          ? "flex-row items-center gap-4 min-w-[250px] max-w-[250px]"
          : "flex-col justify-center items-center lg:w-48 md:w-40 w-32"
      }  `}
    >
      <img
        src={`${
          poster != null
            ? `https://image.tmdb.org/t/p/original${poster}`
            : `${not_found_image}`
        }`}
        alt=""
        className={`${isSearchCard ? "w-12" : "h-auto w-full"} `}
      />
      <div
        className={`${isSearchCard ? "flex flex-col" : "w-full text-center"}`}
      >
        <p
          className={`${
            isSearchCard
              ? "w-full leading-none"
              : "whitespace-nowrap overflow-hidden text-ellipsis"
          } `}
        >
          {title}
        </p>
        <p>{date.slice(0, 4)}</p>
      </div>
    </Link>
  );
};
