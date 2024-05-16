
import ViewMembershipHistoryButton from "../Modals/ViewMembershipHistoryButton";

const ExpiryStatusCard = () => {
  return (
    <div className="w-full shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] p-4 rounded-lg">
      <div className="flex justify-between items-start">
        <div className="bg-primary bg-opacity-20 text-primary px-2 py-1 text-xs font-semibold rounded">
          Single Listing
        </div>
        <div className="flex items-start text-primary">
          <span className="font-semibold text-sm mt-1 mx-1">$</span>
          <span className="text-4xl font-bold">99</span>
          <span className="text-themetext self-end">/ month</span>
        </div>
      </div>
      <ul className="list-disc list-inside flex flex-col gap-1 mt-3">
        <li className="text-black font-semibold">
          Registration Date:{" "}
          <span className="text-themetext font-normal">02 Jan 2023</span>
        </li>
        <li className="text-black font-semibold">
          Expiry Date:{" "}
          <span className="text-themetext font-normal">02 Dec 2023</span>
        </li>
      </ul>
      <div className="flex justify-between text-themetext font-semibold mt-7">
        <span>Days</span>
        <span>26 to 30 days</span>
      </div>
      <div className="w-full h-2 bg-[rgba(0,0,0,0.1)] rounded-full mt-5">
        <div className="w-[78%] h-full bg-primary rounded-full"></div>
      </div>
      <div className="text-themetext text-sm mt-2 font-medium">
        4 days remaining
      </div>
      <div className="flex flex-col justify-center items-center mt-5 w-full">
        <ViewMembershipHistoryButton />
        <button className="rounded-full py-2 mt-5 px-10 bg-primary flex items-center justify-center text-md font-semibold shadow-[0px_4px_14px_0px_rgba(115,103,240,0.38)]">

            <p className="font-semibold">Upgrade</p>
        </button>
      </div>
    </div>
  );
};

export default ExpiryStatusCard;
