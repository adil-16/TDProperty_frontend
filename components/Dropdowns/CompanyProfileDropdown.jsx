"use client";

import React, { useEffect, useRef, useState } from "react";
import Dropdown from "./Dropdown";
import Image from "next/image";
import ComDashboardSvg from "../Svgs/companydashboard/ComDashboardSvg";
import ComNavButton from "../Buttons/ComNavButton";
import ComProfileSvg from "../Svgs/companydashboard/ComProfileSvg";
import ComEmployeeSvg from "../Svgs/companydashboard/ComEmployeeSvg";
import ComMessagingSvg from "../Svgs/companydashboard/ComMessagingSvg";
import WorkNestedDropdown from "./WorkNestedDropdown";

const CompanyProfileDropdown = () => {
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
        <button className="h-[44px] w-[44px]">
          <Image src="/imgs/profile-2.png" width={44} height={44} alt="svg" />
        </button>
      }
      dropContent={
        <div className="absolute right-0 top-12 z-50 flex w-[280px] flex-col rounded bg-white shadow-md">
          <div className="flex w-full gap-2 border-b border-[rgba(0,0,0,0.1)] px-6 py-5">
            <Image
              className="h-[60px] w-[60xp]"
              src="/imgs/profile-2.png"
              width={60}
              height={60}
              alt="svg"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold">John Doe</p>
              <div className="text-sm text-thememutedtext">Company</div>
            </div>
          </div>
          <div className="flex flex-col gap-2 py-2">
            <ComNavButton
              icon={<ComProfileSvg />}
              title="Profile"
              showDropdown={showDropdown}
              setShowDropdown={setShowDropdown}
            />
            <ComNavButton
              icon={<ComDashboardSvg />}
              title="Dashboard"
              showDropdown={showDropdown}
              setShowDropdown={setShowDropdown}
            />
            <ComNavButton
              icon={<ComEmployeeSvg />}
              title="Employees"
              showDropdown={showDropdown}
              setShowDropdown={setShowDropdown}
            />
            <ComNavButton
              icon={<ComMessagingSvg />}
              title="Messaging"
              showDropdown={showDropdown}
              setShowDropdown={setShowDropdown}
            />
            <ComNavButton
              icon={<ComEmployeeSvg />}
              title="Ad Management"
              showDropdown={showDropdown}
              setShowDropdown={setShowDropdown}
            />
            <WorkNestedDropdown
              outerShowDropdown={showDropdown}
              outerSetShowDropdown={setShowDropdown}
            />
            <ComNavButton
              icon={<ComEmployeeSvg />}
              title="Customer Support"
              showDropdown={showDropdown}
              setShowDropdown={setShowDropdown}
            />
          </div>
        </div>
      }
      showDropdown={showDropdown}
      setShowDropdown={setShowDropdown}
      dropRef={ref}
    />
  );
};

export default CompanyProfileDropdown;
