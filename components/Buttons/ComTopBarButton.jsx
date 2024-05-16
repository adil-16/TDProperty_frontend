"use client";

import { usePathname, useRouter } from "next/navigation";


const ComTopBarButton = ({ title }) => {
  const router = useRouter();
  const pathname = usePathname();
  console.log(title)

  const currentPageName = pathname.split("/")[2];

  const navigateToPage = () => {
    if (title.toLowerCase() === "home") {
      router.push(`/dashboard/${currentPageName}`);
    } else if (title.toLowerCase() === "listing") {
      router.push(`/dashboard/${currentPageName}/listing`);
    } else if (title.toLowerCase() === "community") {
      router.push(`/dashboard/${currentPageName}/community`);
    } else if (title.toLowerCase() === "membership") {
      router.push(`/dashboard/${currentPageName}/membership`);
    }
  };
  return (
    <button
      className="hover:font-semibold w-fit"
      onClick={() => navigateToPage()}
    >
      {title}
    </button>
  );
};

export default ComTopBarButton;
