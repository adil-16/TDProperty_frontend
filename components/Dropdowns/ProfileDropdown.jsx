"use client";

import Image from "next/image";
import React, { useState } from "react";

const ProfileDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="h-[44px] w-[44px]">
      <Image src="/imgs/profile.png" width={44} height={44} alt="svg" />
    </div>
  );
};

export default ProfileDropdown;
