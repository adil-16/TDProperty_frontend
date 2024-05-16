"use client";
import React, { useState } from "react";

const ToggleButton = () => {
  const [on, setOn] = useState(false);
  return (
    <div
      className={`flex ${
        !on && "justify-end"
      } w-[42px] h-[24px] rounded-[14.2px] bg-primary py-[5.42px] px-[6.25px] transition-all ease-in-out duration-300 delay-300`}
      onClick={() => setOn(!on)}
    >
      <div
        className={`flex items-center justify-center bg-white rounded-full w-[14px]`}
      ></div>
    </div>
  );
};

export default ToggleButton;
