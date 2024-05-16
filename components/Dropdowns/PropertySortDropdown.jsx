"use client";

import React, { useState } from "react";
import Dropdown from "./Dropdown";
import SortSvg from "../Svgs/SortSvg";

const PropertySortDropdown = () => {
  const [sort, setSort] = useState("All");
  const [show, setShow] = useState(false);
  const sorts = [
    "Latest First",
    "A - Z",
    "Z - A",
    "highest to lowest",
    "lowest to highest",
  ];
  return (
    <Dropdown
      dropButton={
        <button className="flex h-11 w-40 items-center justify-center gap-1 rounded-full border border-[1px_solid_rgba(0,0,0,0.20)] text-xs font-semibold">
          <span>Sort</span>
          <SortSvg />
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
                setShow(false);
              }}
            >
              {rec}
            </button>
          ))}
        </div>
      }
    />
  );
};

export default PropertySortDropdown;
