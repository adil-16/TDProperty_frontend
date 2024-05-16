"use client";

import React, { useEffect, useRef, useState } from "react";
import Dropdown from "./Dropdown";
import EditPenSvg from "../Svgs/EditPenSvg";
import ThreeDotSvg from "../Svgs/ThreeDotSvg";
import DeleteUserModal from "../Modals/DeleteUserModal";
import DeactivateUserModal from "../Modals/DeactivateUserModal";

const ActionDropdown = () => {
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
        <div className="hover:bg-[rgba(0,0,0,0.10)] w-6 h-6 flex justify-center rounded-full items-center py-1 cursor-pointer">
          <ThreeDotSvg height={15} />
        </div>
      }
      dropContent={
        <div className="absolute top-5 right-0 flex flex-col bg-white shadow w-40 z-30">
          <div className="flex items-center gap-1 p-2 border-b border-[rgba(0,0,0,0.05)] cursor-pointer">
            <EditPenSvg width={10} height={10} />
            <p className="font-medium text-xs">Edit</p>
          </div>
          <DeactivateUserModal />
          <DeleteUserModal />
        </div>
      }
      showDropdown={showDropdown}
      setShowDropdown={setShowDropdown}
    />
  );
};

export default ActionDropdown;
