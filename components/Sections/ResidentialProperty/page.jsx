
import LocationWithoutBorderSvg from "@/components/Svgs/LocationWithoutBorderSvg";
import NextButtonRoundedSvg from "@/components/Svgs/NextButtonRoundedSvg";
const ResidentialProperty = ({ name, location }) => {
  return (
    <div className="top-428 mx-auto mt-2 h-[85px] w-[552px] rounded-2xl border border-solid border-gray-100 bg-[#F5F4F8] ">
      <div className="ml-4 mt-4 flex w-[514px] flex-row justify-between">
        <div className="flex text-base font-medium">{name}</div>
        <div className="flex font-medium text-primary ">Sale</div>
      </div>
      <div className="border-[rgba(0, 0, 0, 0.05)] ml-4 w-[515px] border-t border-opacity-20 shadow-md "></div>
      <div className="ml-4 mt-2 flex w-[514px] flex-row justify-between">
        <div className="flex flex-row">
          <div>
            <LocationWithoutBorderSvg />
          </div>
          <div className="ml-1 font-manrope text-xs text-[#001749] ">
            {location}
          </div>
        </div>
        <div>
          <NextButtonRoundedSvg />
        </div>
      </div>
    </div>
  );
};

export default ResidentialProperty;
