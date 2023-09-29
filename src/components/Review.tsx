import { reviewType } from "../api/fetchTypes";

type ReviewType = {
  review: reviewType;
};
export const Review = ({ review }: ReviewType) => {
  return (
    <div className="flex flex-col gap-6 bg-slate-300 p-10 mt-9 rounded-3xl">
      {review.results?.map((data, index) => (
        <section className="bg-slate-700 rounded-lg p-8">
          <div className="flex flex-row gap-8 items-center">
            <p className="text-yellow-400  text-2xl font-extrabold">
              {data.author_details.rating}/10
            </p>
            <div>
              <p className="text-xl text-slate-300 font-semibold">
                {data.author_details.username}
              </p>
            </div>
          </div>
          <p className="text-justify text-lg font-semibold">{data.content}</p>
        </section>
      ))}
    </div>
  );
};
