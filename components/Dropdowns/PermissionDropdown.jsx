"use client";

import Image from "next/image";
import Dropdown from "./Dropdown";
import { useEffect, useRef, useState } from "react";

const PermissionDropdown = ({ roles, selectedRole, setSelectedRole }) => {
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

  const handleSelected = (role) => {
    setSelectedRole(role);
    setShowDropdown(false);
  };
  return (
    <Dropdown
      dropButton={
        <button className="w-full flex justify-between items-center px-5 py-3 rounded-full border border-[rgba(0,0,0,0.1)]">
          <p className="text-sm font-medium">{selectedRole}</p>
          <Image
            src="/svgs/chevrondown.svg"
            width={12}
            height={7}
            alt="dropicon"
          />
        </button>
      }
      dropContent={
        <div className="w-full shadow flex flex-col absolute rounded-lg top-12 bg-white overflow-hidden">
          {roles.map((role, index) => (
            <button
              key={index}
              className="w-full px-5 py-3 hover:bg-[rgba(0,0,0,0.1)] text-sm text-start border-b border-[rgba(0,0,0,0.1)]"
              onClick={() => handleSelected(role)}
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

export default PermissionDropdown;
