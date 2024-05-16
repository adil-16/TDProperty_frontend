"use client";

import BackButton from "@/components/Buttons/BackButton";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AdRequestPage = () => {
  const options = ["Facebook", "Instagram", "Twitter", "Whatsapp"];
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleSelected = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };
  return (
    <div className="flex items-center justify-center py-5">
      <div className="flex flex-col justify-center items-center p-5 max-w-7xl w-full">
        <div className="flex justify-between w-full my-6">
          <div className="flex items-center gap-3">
            <BackButton />
            <div className="text-2xl font-semibold">Ad Request</div>
          </div>
          <button className="border rounded-full px-10 py-2 font-semibold text-sm">
            Discard
          </button>
        </div>
        <form
          onSubmit={(event) => event.preventDefault()}
          className="w-full flex flex-col gap-2"
        >
          <div className="text-sm py-2">Property</div>
          <button className="border rounded-full px-10 py-2 font-semibold text-sm w-fit">
            Choose from listing
          </button>
          <div className="text-sm py-2">Budget</div>
          <input
            type="number"
            className="border rounded-full px-4 py-2  text-sm w-[350px]"
            placeholder="Any Amount"
          />
          <div className="text-sm py-2">Number of days</div>
          <input
            type="number"
            className="border rounded-full px-4 py-2  text-sm w-[350px]"
            placeholder="Any days"
          />
          <div className="text-sm py-2">
            Platform <span className="text-[10px]">(2 selected)</span>
          </div>
          <div className="flex flex-wrap max-w-md gap-3">
            {options.map((option, index) => (
              <button
                className={`flex gap-2 items-center p-5 border ${
                  selectedOptions.includes(option)
                    ? "border-primary bg-primary bg-opacity-10 relative"
                    : "border-[rgba(0,0,0,0.1)]"
                } rounded-lg`}
                onClick={() => handleSelected(option)}
                key={index}
              >
                <Image
                  src={`/svgs/${option}.svg`}
                  width={22}
                  height={22}
                  alt="icon"
                />
                <span className="text-sm">{option}</span>
                <div className="rounded-full absolute -right-1 -top-1 bg-white p-1 ">
                  <Image
                    src="/svgs/yellowtick.svg"
                    width={12}
                    height={12}
                    alt="tick"
                  />
                </div>
              </button>
            ))}
          </div>
          <button
            className="text-secondary text-sm py-3 underline w-fit"
            onClick={() => setSelectedOptions([])}
          >
            Unselect all
          </button>
          <div className="flex justify-end">
            <button className="bg-primary rounded-full px-20 py-2 font-semibold text-sm">
              Publish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdRequestPage;
