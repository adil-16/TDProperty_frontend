"use client";

import { usePathname, useRouter } from "next/navigation";


const PropertyNavbarButton = ({ title, id, redirectUrl }) => {
  const pathname = usePathname();
  const router = useRouter();
  const currentPageName = pathname.split("/")[1];

  const navigateToPage = () => {
    if (title.toLowerCase() === "description") {
      router.push(`/${currentPageName}/${redirectUrl}/${id}`);
    }
    else if (title.toLowerCase() === "regulatory information") {
      router.push(
        `/${currentPageName}/${redirectUrl}/${id}/regulatoryinformation`
      );
    } else {
      router.push(
        `/${currentPageName}/${redirectUrl}/${id}/${title.toLowerCase()}`
      );
    }
  };
  return (
    <button
      className={`${
        pathname.split("/").pop() === title.toLowerCase().replace(" ", "")
          ? "border-b-[3px] border-secondary text-black"
          : ""
      } py-2 font-semibold ${
        pathname.endsWith(id) && title.toLowerCase() === "description"
          ? "border-b-[3px] border-secondary text-black"
          : ""
      }`}
      onClick={() => navigateToPage()}
    >
      {title}
    </button>
  );
};

export default PropertyNavbarButton;
