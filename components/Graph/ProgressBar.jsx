

const ProgressBar = ({ title, currentValue, maxValue }) => {
  currentValue = currentValue || 0;
  maxValue = maxValue || 100;

  return (
    <div className="flex flex-col justify-end items-center gap-2 min-w-[34px]">
      <div className="h-60 w-2 bg-[#F7F7F7] cursor-pointer rounded-t-full flex flex-col justify-end items-center p-0 group">
        <div
          className="rounded-t-full w-full bg-primary group-hover:bg-secondary transition-all duration-300"
          style={{
            height: `${(currentValue / maxValue) * 100}%`,
            maxHeight: "100%",
          }}
        ></div>
      </div>
      <span className="text-secondary">{title}</span>
    </div>
  );
};

export default ProgressBar;
