"use client";
import { usePathname, useRouter } from "next/navigation";

const ComNavButton = ({ icon, title, showDropdown, setShowDropdown }) => {
  const pathname = usePathname();
  const router = useRouter();

  const currentPageName = pathname.split("/")[2];

  const navigateToPage = () => {
    if (title.toLowerCase() === "profile") {
      router.push(`/dashboard/${currentPageName}/profile`);
    } else if (title.toLowerCase() === "dashboard") {
      router.push(`/dashboard/${currentPageName}`);
    } else if (title.toLowerCase() === "employees") {
      router.push(`/dashboard/${currentPageName}/employees`);
    } else if (title.toLowerCase() === "messaging") {
      router.push(`/dashboard/${currentPageName}/messaging`);
    } else if (title.toLowerCase() === "ad management") {
      router.push(`/dashboard/${currentPageName}/admanagement`);
    } else if (title.toLowerCase() === "work") {
      router.push(`/dashboard/${currentPageName}/work`);
    } else if (title.toLowerCase() === "customer support") {
      router.push(`/dashboard/${currentPageName}/customersupport`);
    } else if (title.toLowerCase() === "schedule times") {
      router.push(`/dashboard/${currentPageName}/work/scheduletimes`);
    } else if (title.toLowerCase() === "appointments") {
      router.push(`/dashboard/${currentPageName}/work/appointments`);
    } else if (title.toLowerCase() === "notes") {
      router.push(`/dashboard/${currentPageName}/work/notes`);
    }
    setShowDropdown(false);
  };
  const checkSelected = () => {
    if (
      title.toLowerCase() === "dashboard" &&
      pathname === `/${currentPageName}`
    ) {
      return true;
    }
    if (title.toLowerCase() === "schedule times") {
      return pathname.endsWith(`/${currentPageName}/work/scheduletimes`);
    }
    if (title.toLowerCase() === "appointments") {
      return pathname.endsWith(`/${currentPageName}/work/appointments`);
    }
    if (title.toLowerCase() === "notes") {
      return pathname.endsWith(`/${currentPageName}/work/notes`);
    }
    return pathname.endsWith(
      `/${currentPageName}/${title.toLowerCase().replace(" ", "")}`,
    );
  };
  return (
    <button
      className={`flex w-full gap-1 px-4 py-2 ${
        checkSelected()
          ? "bg-primary bg-opacity-10 text-primary"
          : "text-themetext hover:bg-primary hover:bg-opacity-10 hover:text-primary"
      }`}
      onClick={() => navigateToPage()}
    >
      {icon}
      <span className="font-medium">{title}</span>
    </button>
  );
};

export default ComNavButton;
