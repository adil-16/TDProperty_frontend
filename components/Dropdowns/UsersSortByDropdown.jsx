"use client";

import React, { useEffect, useRef, useState } from "react";
import SortSvg from "../Svgs/SortSvg";
import Dropdown from "./Dropdown";

const SortByButton = ({ size }) => {
  const [sort, setSort] = useState("Sort By");
  const [showDropdown, setShowDropdown] = useState(false);
  const sorts = [
    "All",
    "Company",
    "Property Owner",
    "Property Broker",
    "Normal User",
  ];

  const ref = useRef(null);
  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <Dropdown
      dropButton={
        <button
          className={`flex w-40 cursor-pointer items-center justify-center gap-2 rounded-full border border-[rgba(0,0,0,0.20)] px-5 py-2 hover:border-[rgba(0,0,0,0.50)] ${
            size === "lg" ? "text-sm" : "text-xs"
          }`}
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <p className="font-semibold">{sort}</p>
          <SortSvg width={15} height={15} />
        </button>
      }
      dropContent={
        <div className="absolute top-9 mt-2 flex w-full flex-col gap-1 rounded bg-white p-1 shadow-md">
          <div className="mb-1 border-b border-[rgba(0,0,0,0.2)] px-2 pb-2 text-sm font-semibold">
            Sort By
          </div>
          {sorts.map((rec, index) => (
            <button
              className={`w-full px-2 py-1 text-sm ${
                sort === rec
                  ? "bg-primary bg-opacity-10 font-bold text-primary"
                  : "hover:bg-[rgba(0,0,0,0.05)]"
              } text-left`}
              key={index}
              onClick={() => {
                setSort(rec);
                setShowDropdown(false);
              }}
            >
              {rec}
            </button>
          ))}
        </div>
      }
      showDropdown={showDropdown}
      setShowDropdown={setShowDropdown}
      dropRef={ref}
    />
  );
};

export default SortByButton;
