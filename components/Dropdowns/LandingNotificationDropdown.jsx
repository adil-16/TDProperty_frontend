"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import NotificationLink from "../Links/NotificationLink";
import Dropdown from "./Dropdown";
import ToggleButton from "../Buttons/ToggleButton";

const LandingNotificationDropdown = () => {
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
          <Image
            src="/svgs/belliconwhite.svg"
            width={18}
            height={20}
            alt="svg"
          />
        }
        dropContent={
          <div className="absolute left-[-370px] top-[40px] flex h-[374px] w-[400px] flex-col justify-between rounded bg-white shadow">
            <div className="flex items-center justify-between border-b border-[#EBE9F1] px-5 py-4">
              <span className="text-lg font-medium text-[#5E5873]">
                Notification
              </span>
              <span className="h-[18px] rounded-full bg-[rgba(255,182,72,0.30)] px-2 pt-[1px] text-xs font-bold text-primary">
                6 new
              </span>
            </div>
            <div className="flex h-[232px] flex-col overflow-scroll">
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
              <div className="flex items-center justify-between border-b border-[#EBE9F1] px-5">
                <span className="py-2 text-[14px] font-bold text-[#5E5873]">
                  Notification Alert
                </span>
                <ToggleButton />
              </div>
              <div className="flex justify-center px-5 py-5">
                <button className="w-full rounded bg-darkgray py-2 text-sm font-semibold text-white">
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

export default LandingNotificationDropdown;
