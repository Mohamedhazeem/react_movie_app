import { creditType, details } from "../api/fetchTypes";
import { CastCredit } from "./CastCredit";

type OverviewAndCastType = {
  detail: details;
  credit: creditType;
};

export const OverviewAndCast = ({ detail, credit }: OverviewAndCastType) => {
  return (
    <section className="lg:px-36 px-10 py-10 text-justify ">
      <div>
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
  );
};
