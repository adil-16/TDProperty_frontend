"use client";

import { useEffect, useRef, useState } from "react";
import Dropdown from "./Dropdown";
import Image from "next/image";

const AddEmployeeRoleDropdown = ({ roles, selectedRole, setSelectedRole }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const ref = useRef(null);
  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setShowDropdown(false);
    }
  };

  const handleSelectedRole = (role) => {
    setSelectedRole(role);
    setShowDropdown(false);
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
        <button className="flex w-full items-center justify-between rounded-full border border-[rgba(0,0,0,0.1)] px-5 py-2 text-left">
          <span className="text-sm font-medium">{selectedRole}</span>
          <Image src="/svgs/chevrondown.svg" width={12} height={7} alt="down" />
        </button>
      }
      dropContent={
        <div className="absolute top-12 flex w-full flex-col rounded-md bg-white p-1">
          {roles.map((role, index) => (
            <button
              key={index}
              onClick={() => handleSelectedRole(role)}
              className={`w-full rounded px-7 py-3 text-left text-sm font-semibold text-secondary hover:bg-primary hover:bg-opacity-20 ${
                selectedRole === role ? "bg-primary bg-opacity-50" : ""
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      }
      showDropdown={showDropdown}
      setShowDropdown={setShowDropdown}
      dropRef={ref}
      fullWidth
    />
  );
};

export default AddEmployeeRoleDropdown;
