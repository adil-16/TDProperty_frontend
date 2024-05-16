"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Dropdown from "./Dropdown";

const LanguageDropdown = () => {
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
    <div className="flex text-xs items-center">
      <Dropdown
        dropButton={
          <div className="flex items-center gap-2 relative">
            <Image src="/svgs/globe.svg" height={18} width={18} alt="svg" />
            <p>ENG</p>
          </div>
        }
        dropContent={
          <div className="flex flex-col p-1 bg-white shadow-md w-[120px] absolute top-6 rounded-lg">
            <div className="border-b p-2">ENG</div>
            <div className="p-2">ARA</div>
          </div>
        }
        showDropdown={showDropdown}
        setShowDropdown={setShowDropdown}
        dropRef={ref}
      />
    </div>
  );
};

export default LanguageDropdown;
