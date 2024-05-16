"use client";
import Image from "next/image";

import { useRouter } from "next/navigation";

const OptionButtonMore = ({ title, icon }) => {
  const router = useRouter();

  const navigateToPage = () => {
    if (title === "My Activity") {
      router.push(`/home/activity`);
    } 
    else if (title === "Social Media Compaign") {
      router.push(`/home/social-media-compaign`);
    }
    else if (title === "Featured Properties") {
      router.push(`/home/Featured-Properties`);
    }else {
      router.push(`/home/${title.toLowerCase().replace(" ", "-")}`);
    }
  };
  return (
    <button
      onClick={() => navigateToPage()}
      className="flex w-full items-center justify-between px-4 hover:bg-primary hover:bg-opacity-20"
    >
      <div className="flex items-center gap-2 py-3 text-primary">
        <div className="flex w-7 items-center justify-center">{icon}</div>
        <p className="font-semibold text-[#5E6278]">{title}</p>
      </div>
      <Image src="/svgs/chevronright.svg" width={5} height={4} alt="svg" />
    </button>
  );
};

export default OptionButtonMore;
