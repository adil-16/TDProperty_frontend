

const RatingProgressBar = ({ value, maxValue }) => {
  const progressWidth = (value / maxValue) * 100;
  return (
    <div className="w-full bg-[#F0F0F0] h-[12px] rounded-full">
      <div
        className="bg-[#FDCC0D] h-[12px] rounded-full"
        style={{ width: `${progressWidth}%` }}
      ></div>
    </div>
  );
};

export default RatingProgressBar;
