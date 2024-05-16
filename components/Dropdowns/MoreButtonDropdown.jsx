"use client";

import Image from "next/image";
import Dropdown from "./Dropdown";
import { useEffect, useRef, useState } from "react";
import OptionButtonMore from "../Buttons/OptionButtonMore";
import MyActivitySvg from "../Svgs/moreoptions/MyActivitySvg";
import MediaCompaignSvg from "../Svgs/moreoptions/MediaCompaignSvg";
import FeaturedPropSvg from "../Svgs/moreoptions/FeaturedPropSvg";
import MembersSvg from "../Svgs/moreoptions/MembersSvg";
import SuggestionsSvg from "../Svgs/moreoptions/SuggestionsSvg";
import FaqSvg from "../Svgs/moreoptions/FaqSvg";
import PolicySvg from "../Svgs/moreoptions/PolicySvg";

const MoreButtonDropdown = () => {
  const [show, setShow] = useState(false);
  const ref = useRef(null);
  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setShow(false);
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
        <button className="flex w-fit items-center gap-2 text-white hover:font-semibold">
          <p>More</p>
          <Image
            className="mt-1"
            src="/svgs/chevrondownwhite.svg"
            height={7}
            width={12}
            alt="svg"
          />
        </button>
      }
      dropContent={
        <div className="absolute right-0 top-7 flex w-[279px] flex-col gap-2 rounded bg-white shadow">
          <OptionButtonMore title="My Activity" icon={<MyActivitySvg />} />
          <OptionButtonMore
            title="Social Media Compaign"
            icon={<MediaCompaignSvg />}
          />
          <OptionButtonMore
            title="Featured Properties"
            icon={<FeaturedPropSvg />}
          />
          <OptionButtonMore title="TrueDar Members" icon={<MembersSvg />} />
          <OptionButtonMore title="Suggestions" icon={<SuggestionsSvg />} />
          <OptionButtonMore title="FAQs" icon={<FaqSvg />} />
          <OptionButtonMore title="Privacy Policy" icon={<PolicySvg />} />
        </div>
      }
      showDropdown={show}
      setShowDropdown={setShow}
      dropRef={ref}
    />
  );
};

export default MoreButtonDropdown;
