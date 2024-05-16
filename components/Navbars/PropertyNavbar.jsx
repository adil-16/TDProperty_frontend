"use client";
import { usePathname } from "next/navigation";

import PropertyNavbarButton from "../Buttons/PropertyNavbarButton";

const PropertyNavbar = ({ id, redirectUrl }) => {
  return (
    <div className="flex gap-6 text-[#6E6B7B]">
      <PropertyNavbarButton
        title="Description"
        id={id}
        redirectUrl={redirectUrl}
      />
      <PropertyNavbarButton
        title="Information"
        id={id}
        redirectUrl={redirectUrl}
      />
      <PropertyNavbarButton
        title="Amenities"
        id={id}
        redirectUrl={redirectUrl}
      />
      <PropertyNavbarButton title="Nearby" id={id} redirectUrl={redirectUrl} />
      <PropertyNavbarButton
        title="Regulatory Information"
        id={id}
        redirectUrl={redirectUrl}
      />
    </div>
  );
};

export default PropertyNavbar;
