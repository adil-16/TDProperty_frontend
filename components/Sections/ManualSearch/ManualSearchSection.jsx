import Image from "next/image";
import React from "react";

const ManualSearchSection = () => {
  return (
    <div className="flex justify-between w-full px-6">
      <div className="flex items-center gap-3">
        <div className="flex h-[70px] w-[460px] items-center gap-3 rounded-full border-2 border-[rgba(0,0,0,0.2)] px-7">
          <Image
            src="/svgs/manual-search/location.svg"
            width={15}
            height={19}
            alt="svg"
          />
          <input
            type="text"
            placeholder="Location"
            className="h-full w-full border-none text-[20px] outline-none"
          />
        </div>
        <div className="flex gap-3 h-[70px] w-[200px] items-center justify-center rounded-full border-2 border-[rgba(0,0,0,0.2)]">
          <Image
            src="/svgs/manual-search/filter.svg"
            width={22}
            height={14}
            alt="svg"
          />
          <span className="text-[20px] text-darkgray">Filters</span>
        </div>
      </div>
      <button className="bg-primary w-[247px] h-[70px] rounded-full text-[20px] text-white">Search Now</button>
    </div>
  );
};

export default ManualSearchSection;
