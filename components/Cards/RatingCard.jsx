
import Star from "../Svgs/Star";
import RatingProgressBar from "../Progress/RatingProgressBar";

const RatingCard = () => {
  return (
    <div className="w-[495px] border-[1.362px] border-[rgba(0,0,0,0.10)] px-6 py-7 rounded-2xl">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="flex">
            <Star filled />
            <Star filled />
            <Star filled />
            <Star filled />
            <Star />
          </div>
          <div className="font-semibold text-xl">4 out of 5</div>
        </div>
        <div className="text-themetext font-medium">12 Reviews</div>
      </div>
      <div className="flex flex-col gap-2 mt-5">
        <div className="flex justify-center items-center gap-2">
          <p className="font-semibold w-[15%] whitespace-nowrap">5 stars</p>
          <RatingProgressBar value={80} maxValue={100} />
          <p className="font-medium w-[10%]">80%</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <p className="font-semibold w-[15%] whitespace-nowrap">4 stars</p>
          <RatingProgressBar value={12} maxValue={100} />
          <p className="font-medium w-[10%]">12%</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <p className="font-semibold w-[15%] whitespace-nowrap">3 stars</p>
          <RatingProgressBar value={6} maxValue={100} />
          <p className="font-medium w-[10%]">6%</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <p className="font-semibold w-[15%] whitespace-nowrap">2 stars</p>
          <RatingProgressBar value={2} maxValue={100} />
          <p className="font-medium w-[10%]">2%</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <p className="font-semibold w-[15%] whitespace-nowrap">1 stars</p>
          <RatingProgressBar value={0} maxValue={100} />
          <p className="font-medium w-[10%]">0%</p>
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
