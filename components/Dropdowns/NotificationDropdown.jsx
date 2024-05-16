"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import NotificationLink from "../Links/NotificationLink";
import Dropdown from "./Dropdown";
import ToggleButton from "../Buttons/ToggleButton";

const NotificationDropdown = () => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef(null);

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setDropdown(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  return (
    <div className="h-fit">
      <Dropdown
        dropButton={
          <Image src="/svgs/bellicon.svg" width={18} height={20} alt="svg" />
        }
        dropContent={
          <div className="absolute flex flex-col justify-between w-[400px] h-[374px] bg-white shadow left-[-370px] top-[40px] rounded">
            <div className="flex justify-between items-center border-b border-[#EBE9F1] px-5 py-4">
              <span className="text-lg font-medium text-[#5E5873]">
                Notification
              </span>
              <span className="rounded-full bg-[rgba(255,182,72,0.30)] text-primary font-bold h-[18px] px-2 text-xs pt-[1px]">
                6 new
              </span>
            </div>
            <div className="flex flex-col h-[232px] overflow-scroll">
              <NotificationLink
                img="/imgs/profile.png"
                text="Congratulate Sam for work update 🎉"
                datetime="Mar 15 12:50pm"
              />
              <NotificationLink
                img="/imgs/profile.png"
                text="Congratulate Sam for work update 🎉"
                datetime="Mar 15 12:50pm"
              />
              <NotificationLink
                img="/imgs/profile.png"
                text="Congratulate Sam for work update 🎉"
                datetime="Mar 15 12:50pm"
              />
              <NotificationLink
                img="/imgs/profile.png"
                text="Congratulate Sam for work update 🎉"
                datetime="Mar 15 12:50pm"
              />
            </div>
            <div>
              <div className="flex justify-between items-center border-b border-[#EBE9F1] px-5">
                <span className="text-[#5E5873] text-[14px] font-bold py-2">
                  Notification Alert
                </span>
                <ToggleButton />
              </div>
              <div className="flex justify-center px-5 py-5">
                <button className="bg-darkgray text-white w-full rounded py-2 text-sm font-semibold">
                  Read All Notifications
                </button>
              </div>
            </div>
          </div>
        }
        showDropdown={dropdown}
        setShowDropdown={setDropdown}
        dropRef={ref}
      />
    </div>
  );
};

export default NotificationDropdown;
