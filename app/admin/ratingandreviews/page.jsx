import RatingCard from "@/components/Cards/RatingCard";
import ReviewCard from "@/components/Cards/ReviewCard";
import Star from "@/components/Svgs/Star";


const RatingAndReviews = () => {
  return (
    <div className="p-7 flex flex-col gap-6">
      <h1 className="font-bold text-3xl">Rating and Reviews</h1>
      <RatingCard />
      <div className="flex gap-5">
        <button className="min-w-[135px] border border-[rgba(0,0,0,0.1)] px-3 py-2 rounded-full">
          Latest first
        </button>
        <button className="min-w-[135px] border border-[rgba(0,0,0,0.1)] px-3 py-2 rounded-full flex items-center justify-center gap-2">
          <span>1</span>
          <Star filled />
        </button>
        <button className="min-w-[135px] border border-[rgba(0,0,0,0.1)] px-3 py-2 rounded-full flex items-center justify-center gap-2">
          <span>2</span>
          <Star filled />
        </button>
        <button className="min-w-[135px] border border-[rgba(0,0,0,0.1)] px-3 py-2 rounded-full flex items-center justify-center gap-2">
          <span>3</span>
          <Star filled />
        </button>
        <button className="min-w-[135px] border border-[rgba(0,0,0,0.1)] px-3 py-2 rounded-full flex items-center justify-center gap-2">
          <span>4</span>
          <Star filled />
        </button>
        <button className="min-w-[135px] border border-[rgba(0,0,0,0.1)] px-3 py-2 rounded-full flex items-center justify-center gap-2">
          <span>5</span>
          <Star filled />
        </button>
      </div>
      <div className="flex flex-wrap w-full gap-x-10 gap-y-5">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
};

export default RatingAndReviews;
