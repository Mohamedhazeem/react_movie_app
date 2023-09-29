import { reviewType } from "../api/fetchTypes";

type ReviewType = {
  review?: reviewType;
};
export const Review = ({ review }: ReviewType) => {
  return (
    <div className="flex flex-col gap-6 bg-slate-300 p-10 mt-9 rounded-t-2xl">
      {review?.total_results == 0 && (
        <p className="text-center text-black text-2xl font-extrabold">
          NO REVIEWS FOUND
        </p>
      )}
      {review?.total_results != 0 &&
        review?.results?.map((data, index) => (
          <section className="bg-slate-700 rounded-lg p-8">
            <p className="text-yellow-400  text-2xl font-extrabold">
              {data.author_details.rating | 0}/10
            </p>
            <p className="text-justify text-lg font-semibold">{data.content}</p>
            <p className="text-xl text-slate-300 font-semibold">
              -by {data.author_details.username}
            </p>
          </section>
        ))}
    </div>
  );
};
