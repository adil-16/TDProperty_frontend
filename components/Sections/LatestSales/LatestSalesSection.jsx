
import LatestSale from "./LatestSale";

const LatestSalesSection = () => {
  return (
    <div className="flex flex-col gap-y-6 shadow-[0px_8.81px_35.51px_0px_rgba(51,38,174,0.08)] px-4 py-3">
      <p className="text-base font-semibold text-secondary">Latest Sales</p>
      <LatestSale />
      <LatestSale />
      <LatestSale />
      <LatestSale />
    </div>
  );
};

export default LatestSalesSection;
