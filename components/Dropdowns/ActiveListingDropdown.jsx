"use client";

import React, { useEffect, useRef, useState } from "react";
import Dropdown from "./Dropdown";

const ActiveListingDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
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
        <button className="rounded-full py-3 px-4 bg-primary flex items-center justify-center text-sm font-semibold shadow-[0px_4px_14px_0px_rgba(115,103,240,0.38)]">
          Active Listing (14)
        </button>
      }
      dropContent={
        <div className="flex flex-col absolute w-full shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] bg-white top-12 text-xs font-medium rounded">
          <div className="p-2 text-primary border-b border-[rgba(0,0,0,0.05)]">
            Active Listing (14)
          </div>
          <div className="p-2 border-b border-[rgba(0,0,0,0.05)]">
            Inactive Listing (2)
          </div>
          <div className="p-2">Drafts (1)</div>
        </div>
      }
      showDropdown={showDropdown}
      setShowDropdown={setShowDropdown}
      dropRef={ref}
    />
  );
};

export default ActiveListingDropdown;
