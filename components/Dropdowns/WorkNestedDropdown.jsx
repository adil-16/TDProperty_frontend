"use client";

import { useEffect, useRef, useState } from "react";
import Dropdown from "./Dropdown";
import ComWorkSvg from "../Svgs/companydashboard/ComWorkSvg";
import ComNavButton from "../Buttons/ComNavButton";

const WorkNestedDropdown = ({ outerDropdown, outerSetShowDropdown }) => {
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
        <button className="flex w-full gap-1 px-4 py-2 text-themetext hover:bg-primary hover:bg-opacity-10 hover:text-primary">
          <ComWorkSvg />
          <span className="font-medium">Work</span>
        </button>
      }
      dropContent={
        <div className="absolute right-[280px] flex w-full flex-col gap-1 rounded bg-white py-3 shadow">
          <ComNavButton
            title={"Schedule Times"}
            showDropdown={outerDropdown}
            setShowDropdown={outerSetShowDropdown}
          />
          <ComNavButton
            title={"Appointments"}
            showDropdown={outerDropdown}
            setShowDropdown={outerSetShowDropdown}
          />
          <ComNavButton
            title={"Notes"}
            showDropdown={outerDropdown}
            setShowDropdown={outerSetShowDropdown}
          />
        </div>
      }
      showDropdown={showDropdown}
      setShowDropdown={setShowDropdown}
      fullWidth
    />
  );
};

export default WorkNestedDropdown;
