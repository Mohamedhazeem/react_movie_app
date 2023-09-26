import not_found_image from "../assets/not_found.jpg";
type castType = {
  profile: string;
  name: string;
  character: string;
};
export const CastCredit = ({ profile, name, character }: castType) => {
  return (
    <div className="flex flex-row gap-3 lg:py-3 py-2 items-center">
      <img
        className="w-10 rounded-lg"
        src={`${
          profile != null
            ? `https://image.tmdb.org/t/p/original${profile}`
            : `${not_found_image}`
        }`}
        alt=""
      />
      <p>
        {name} as {character}
      </p>
    </div>
  );
};
