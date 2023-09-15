type cardData = {
  poster: string;
  title: string;
  date: string;
};

export const Card = ({ poster, title, date }: cardData) => {
  return (
    <div className="flex flex-col justify-center items-center w-32">
      <img
        src={`https://image.tmdb.org/t/p/original${poster}`}
        alt={title}
        className="h-auto w-full"
      />

      <p className="max-w-[60%] text-left whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </p>
      <p>{date.slice(0, 4)}</p>
    </div>
  );
};
