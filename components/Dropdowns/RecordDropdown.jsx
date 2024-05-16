"use client";

import React, { useEffect, useRef, useState } from "react";
import SortSvg from "../Svgs/SortSvg";
import Dropdown from "./Dropdown";

const RecordButton = ({ size, rowCount, setRowCount }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const records = [10, 20, 30, 40, 50];
  const handleSetRowCount = (rec) => {
    setRowCount(rec);
    setShowDropdown(false);
  };

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
        >
          {/* <p className="font-semibold">{rowCount} Record</p> */}
          <p className="font-semibold">Filter</p>
          <SortSvg width={15} height={15} />
        </button>
      }
      dropContent={
        <div
          className={`absolute top-9 flex w-full flex-col gap-1 rounded bg-white p-1 shadow-md ${
            size === "lg" ? "mt-2" : "mt-1"
          }`}
        >
          {records.map((rec, index) => (
            <button
              className={`w-full px-2 py-1 text-sm ${
                rowCount === rec
                  ? "bg-primary bg-opacity-10 font-bold text-primary"
                  : "hover:bg-[rgba(0,0,0,0.05)]"
              } text-left`}
              key={index}
              onClick={() => handleSetRowCount(rec)}
            >
              {rec} Record
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

export default RecordButton;
