"use client";

import React, { useState } from "react";
import DarkModeSvg from "../Svgs/DarkModeSvg";

const DarkModeToggleButton = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div
      className={`flex ${
        !darkMode && "justify-end"
      } w-[83.3px] h-[40px] rounded-[14.2px] bg-[#f5f5f5] py-[5.42px] px-[6.25px] transition-all ease-in-out duration-300 delay-300`}
      onClick={() => setDarkMode(!darkMode)}
    >
      <div
        className={`flex items-center justify-center ${
          darkMode ? "bg-secondary text-white" : "bg-primary"
        } rounded-full w-[29.2px]`}
      >
        <DarkModeSvg />
      </div>
    </div>
  );
};

export default DarkModeToggleButton;
