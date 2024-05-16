"use client";


import { usePathname, useRouter } from "next/navigation";

const CommunityProfileButton = ({ title, icon }) => {
  const router = useRouter();
  const pathname = usePathname();
  const getCurrentPath = () => {
    if (pathname.includes("dashboard")) {
      return (
        pathname.split("/")[1] +
        "/" +
        pathname.split("/")[2] +
        "/" +
        pathname.split("/")[3] +
        "/" +
        pathname.split("/")[4]
      );
    } else if (pathname.includes("admin")) {
      return (
        pathname.split("/")[1] +
        "/" +
        pathname.split("/")[2] +
        "/" +
        pathname.split("/")[3]
      );
    }
  };
  const checkSelected = () => {
    if (title === "timeline" && pathname.endsWith("/community/profile")) {
      return true;
    } else if (
      pathname.endsWith(
        "/community/profile/" + title.split(" ").join("").toLowerCase()
      )
    ) {
      return true;
    } else {
      return false;
    }
  };
  const handleNavigation = () => {
    if (title === "timeline") {
      router.push("/" + getCurrentPath());
    } else {
      router.push(
        "/" + getCurrentPath() + "/" + title.split(" ").join("").toLowerCase()
      );
    }
  };
  return (
    <button
      className={`flex gap-1 py-3 items-center hover:text-secondary ${
        checkSelected()
          ? "text-secondary border-t-2 border-primary"
          : "text-[#8E8E8E]"
      } text-sm uppercase font-semibold`}
      onClick={() => handleNavigation()}
    >
      {icon}
      <span>{title}</span>
    </button>
  );
};

export default CommunityProfileButton;
