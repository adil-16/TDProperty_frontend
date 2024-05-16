import React, { useState } from "react";
import BoldSvg from "@/components/Svgs/BoldSvg";
import ItalicSvg from "@/components/Svgs/ItalicSvg";
import DropdownSvg from "@/components/Svgs/DropdownSvg";
const PropertyForm = ({ onNext }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const cleanedInputValue = event.target.value
      .replace(/[^0-9.]/g, "")
      .replace(/(\..*)\./g, "$1");
    setInputValue("$" + cleanedInputValue);
  };

  const handleOptionChange2 = (value) => {
    setSelectedOption2(value);
  };
  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };
  const handleOptionChange3 = (value) => {
    setSelectedOption3(value);
  };
  return (
    <div className="justify mx-8 flex w-full flex-col ">
      <form className=" flex gap-x-52 gap-y-4" action="#">
        <div>
          <div className="mx-4 mt-4 text-sm text-[#959595]	">Recommendation</div>
          <div className="ml-1 mt-3">
            <label className="text-sm">
              <input
                type="radio"
                value="Rent"
                className="mr-1 "
                checked={selectedOption === "Rent"}
                onChange={() => handleOptionChange("Rent")}
              />
              Rent
            </label>

            <label className=" ml-20 text-sm">
              <input
                type="radio"
                value="Sale"
                className="mr-1 "
                checked={selectedOption === "Sale"}
                onChange={() => handleOptionChange("Sale")}
              />
              Sale
            </label>
          </div>
          <div className="flex flex-col">
            <label className="mb-6 ml-2 mt-5 font-manrope text-base font-medium leading-6 text-[rgba(0,0,0,0.8)]">
              Title
            </label>
            <input
              className=" -mt-5 h-[41px] w-[450px] rounded-full border border-black  border-opacity-10 bg-transparent px-4 font-manrope text-sm font-medium  outline-none   focus:border focus:border-[rgba(0,0,0,0.30)]"
              type="text"
              id="Title"
              placeholder="ex: Boston Villa"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-6 ml-2 mt-5 font-manrope text-base font-medium leading-6 text-[rgba(0,0,0,0.8)]">
              Description
            </label>
            <textarea
              className=" -mt-5 h-[112px] w-[450px] resize-none rounded-xl border-x border-t  border-black border-opacity-10 bg-transparent px-4 font-manrope text-sm  font-medium outline-none"
              type="text"
              id="Title"
              placeholder="Write description about the property"
            />
            <div className=" -mt-2 flex h-[41px]  w-[450px] items-center justify-end gap-2 rounded-b-xl border border-black  border-opacity-10 bg-transparent px-4  font-manrope text-sm font-medium  outline-none   focus:border focus:border-[rgba(0,0,0,0.30)]">
              <BoldSvg className="" />
              <ItalicSvg />
            </div>
          </div>
          <div className="ml-1 mt-5">
            <label className="text-sm">
              <input
                type="radio"
                value="Residential"
                className="mr-1 "
                checked={selectedOption2 === "Residential"}
                onChange={() => handleOptionChange2("Residential")}
              />
              Residential
            </label>
            <label className=" ml-20 text-sm">
              <input
                type="radio"
                value="Commercial"
                className="mr-1 "
                checked={selectedOption2 === "Commercial"}
                onChange={() => handleOptionChange2("Commercial")}
              />
              Commercial
            </label>
          </div>
          <div className="flex w-[450px] flex-col">
            <label className="mb-2 ml-2  mt-6 font-manrope text-base font-medium leading-6 text-[rgba(0,0,0,0.8)]">
              Property Type
            </label>
            <div className=" relative inline-block w-full">
              <select
                className="h-[41px]  w-full appearance-none rounded-full border border-black border-opacity-10 px-4 font-manrope text-sm font-medium outline-none focus:border focus:border-[rgba(0,0,0,0.30)]"
                id="PropertyType"
              >
                <option value="individual">Individual</option>
                <option value="corporate">Corporate</option>
                <option value="Freehold" selected>
                  Freehold
                </option>
                <option value="Villa" selected>
                  Villa
                </option>
              </select>
              <div className="pointer-events-none absolute right-2 top-[1.1rem] flex items-center px-2">
                {/* Replace the following lie with your custom dropdown icon */}
                <DropdownSvg className="h-5 w-5 text-black" />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="mb-6 ml-2 mt-7 font-manrope text-base font-medium leading-6 text-[rgba(0,0,0,0.8)]">
              No. of Bedrooms
            </label>
            <input
              className="-mt-4 h-[41px] w-[450px] rounded-full border border-black  border-opacity-10 bg-transparent px-4 font-manrope text-sm font-medium  outline-none focus:border focus:border-[rgba(0,0,0,0.30)]"
              type="text"
              id="BedNum"
              placeholder="ex: 14"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-6 ml-2 mt-7 font-manrope text-base font-medium leading-6 text-[rgba(0,0,0,0.8)]">
              No. of living rooms
            </label>
            <input
              className="-mt-4 h-[41px] w-[450px] rounded-full border border-black  border-opacity-10 bg-transparent px-4 font-manrope text-sm font-medium  outline-none focus:border focus:border-[rgba(0,0,0,0.30)]"
              type="text"
              id="livingNum"
              placeholder="ex: 14"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-6 ml-2 mt-7 font-manrope text-base font-medium leading-6 text-[rgba(0,0,0,0.8)]">
              No. of toilets
            </label>
            <input
              className="-mt-4 h-[41px] w-[450px] rounded-full border border-black  border-opacity-10 bg-transparent px-4 font-manrope text-sm font-medium  outline-none focus:border focus:border-[rgba(0,0,0,0.30)]"
              type="text"
              id="toiletNum"
              placeholder="ex: 14"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-6 ml-2 mt-7 font-manrope text-base font-medium leading-6 text-[rgba(0,0,0,0.8)]">
              Floor number (Optional)
            </label>
            <input
              className="-mt-4 h-[41px] w-[450px] rounded-full border border-black  border-opacity-10 bg-transparent px-4 font-manrope text-sm font-medium  outline-none focus:border focus:border-[rgba(0,0,0,0.30)]"
              type="text"
              id="BedNum"
              placeholder="ex: 14"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-6 ml-2 mt-7 font-manrope text-base font-medium leading-6 text-[rgba(0,0,0,0.8)]">
              No. of floors (Optional)
            </label>
            <input
              className="-mt-4 h-[41px] w-[450px] rounded-full border border-black  border-opacity-10 bg-transparent px-4 font-manrope text-sm font-medium  outline-none focus:border focus:border-[rgba(0,0,0,0.30)]"
              type="text"
              id="FloorNum"
              placeholder="ex: 14"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-6 ml-2 mt-7 font-manrope text-base font-medium leading-6 text-[rgba(0,0,0,0.8)]">
              Age of the property (Optional){" "}
            </label>
            <input
              className="-mt-4 h-[41px] w-[450px] rounded-full border border-black  border-opacity-10 bg-transparent px-4 font-manrope text-sm font-medium  outline-none focus:border focus:border-[rgba(0,0,0,0.30)]"
              type="text"
              id="PropertyAge"
              placeholder="ex: 14"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col">
            <label className="mb-6 ml-2 mt-10 font-manrope text-base font-medium leading-6 text-[rgba(0,0,0,0.8)]">
              Price{" "}
            </label>
            <input
              className="-mt-4 h-[41px] w-[450px] rounded-full border border-black border-opacity-10 bg-transparent px-4 font-manrope text-sm font-medium"
              type="text"
              id="Price"
              placeholder="$ 0.00"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <div className="ml-2 mt-4">
            <label className="text-sm">
              <input
                type="radio"
                value="Weekly"
                className="mr-1 "
                checked={selectedOption3 === "Weekly"}
                onChange={() => handleOptionChange3("Weekly")}
              />
              Weekly
            </label>

            <label className=" ml-20 text-sm">
              <input
                type="radio"
                value="Monthly"
                className="mr-1 "
                checked={selectedOption3 === "Monthly"}
                onChange={() => handleOptionChange3("Monthly")}
              />
              Monthly
            </label>
            <label className=" ml-20 text-sm">
              <input
                type="radio"
                value="Yearly"
                className="mr-1 "
                checked={selectedOption3 === "Yearly"}
                onChange={() => handleOptionChange3("Yearly")}
              />
              Yearly
            </label>
          </div>
          <div className="flex w-[450px] flex-col">
            <label className="mb-2 ml-2  mt-9 font-manrope text-base font-medium leading-6 text-[rgba(0,0,0,0.8)]">
              Completion
            </label>
            <div className=" relative inline-block w-full">
              <select
                className="h-[41px]  w-full appearance-none rounded-full border border-black border-opacity-10 px-4 font-manrope text-sm font-medium outline-none focus:border focus:border-[rgba(0,0,0,0.30)]"
                id="Completion"
              >
                <option value="individual">Individual</option>
                <option value="corporate">Corporate</option>
                <option value="Ready" selected>
                  Ready
                </option>
              </select>
              <div className="pointer-events-none absolute right-2  top-[1.1rem] flex items-center px-2">
                {/* Replace the following lie with your custom dropdown icon */}
                <DropdownSvg className="h-5 w-5 text-black" />
              </div>
            </div>
          </div>
          <div className="flex w-[450px] flex-col">
            <label className="mb-2 ml-2  mt-9 font-manrope text-base font-medium leading-6 text-[rgba(0,0,0,0.8)]">
              Furnishing (Optional)
            </label>
            <div className=" relative inline-block w-full">
              <select
                className="h-[41px]  w-full appearance-none rounded-full border border-black border-opacity-10 px-4 font-manrope text-sm font-medium outline-none focus:border focus:border-[rgba(0,0,0,0.30)]"
                id="Furnishing"
              >
                <option value="individual">Individual</option>
                <option value="corporate">Corporate</option>
                <option value="Freehold" selected>
                  Furnished
                </option>
              </select>
              <div className="pointer-events-none absolute right-2 top-[1.1em] flex items-center px-2">
                {/* Replace the following lie with your custom dropdown icon */}
                <DropdownSvg className="h-5 w-5 text-black" />
              </div>
            </div>
            <div className=" mt-9  flex h-[34px]   w-[450px]  items-center  bg-[#FFF5E9] px-3  text-sm	font-semibold text-primary outline-none">
              Uploading 3D Model
            </div>
            <div className=" via-opacity-1  flex   h-[34px]  w-[450px]  items-center 	 border border-[#FFF5E8] bg-[#FFF5E9] bg-gradient-to-b  from-[#FFAA451F] to-[#FFF5E9] px-3 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.02)] ">
              <span className="font-manrope text-sm   font-normal">
                Please make 360° video of property and upload.
              </span>
              <span className="text-sm font-semibold"> Watch Video!</span>
            </div>
          </div>
          <div className="flex h-[212px] w-[450px] flex-col">
            <label className="mb-2 ml-2  mt-9 font-manrope text-base font-medium leading-6 text-[rgba(0,0,0,0.8)]">
              Media
            </label>
            <div className=" h-[178px] w-[450px]  border-2 border-dotted border-[#CCCCCC]"></div>
          </div>
        </div>
      </form>
      <div className="flex w-[93%] justify-end ">
        <button
          onClick={onNext}
          className="flex items-center justify-center rounded-full  border  border-[rgba(0,0,0,0.10)] bg-primary   px-[5.4rem] py-3 font-manrope text-sm font-semibold "
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default PropertyForm;
