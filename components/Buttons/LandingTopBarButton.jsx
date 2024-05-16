"use client";

import { usePathname, useRouter } from "next/navigation";


const ComTopBarButton = ({ title }) => {
  const router = useRouter();
  const pathname = usePathname();

  const navigateToPage = () => {
    if (title.toLowerCase() === "home") {
      router.push(`/home`);
    } else if (title.toLowerCase() === "listing") {
      router.push(`/home/listing`);
    } else if (title.toLowerCase() === "community") {
      router.push(`/home/community`);
    } else if (title.toLowerCase() === "membership") {
      router.push(`/home/membership`);
    }
  };

  const checkIfSelected = () => {
    if (title.toLowerCase() === "home" && pathname === "/home") {
      return true;
    } else if (
      title.toLowerCase() === "listing" &&
      pathname === "/home/listing"
    ) {
      return true;
    }
    if (title.toLowerCase() === "community" && pathname === "/home/community") {
      return true;
    } else if (
      title.toLowerCase() === "membership" &&
      pathname === "/home/membership"
    ) {
      return true;
    }
  };

  return (
    <button
      className={`w-fit hover:font-semibold ${
        checkIfSelected() && "font-semibold text-primary"
      }`}
      onClick={() => navigateToPage()}
    >
      {title}
    </button>
  );
};

export default ComTopBarButton;
