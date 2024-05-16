"use client";
import { usePathname, useRouter } from "next/navigation";

const LandingNavButton = ({ icon, title, showDropdown, setShowDropdown }) => {
  const pathname = usePathname();
  const router = useRouter();

  const navigateToPage = () => {
    if (title.toLowerCase() === "profile") {
      router.push(`/home/profile`);
    } else if (title.toLowerCase() === "dashboard") {
      router.push(`/home`);
    } else if (title.toLowerCase() === "employees") {
      router.push(`/home/employees`);
    } else if (title.toLowerCase() === "messaging") {
      router.push(`/home/messaging`);
    } else if (title.toLowerCase() === "ad management") {
      router.push(`/home/admanagement`);
    } else if (title.toLowerCase() === "work") {
      router.push(`/home/work`);
    } else if (title.toLowerCase() === "customer support") {
      router.push(`/home/customersupport`);
    }
    setShowDropdown(false);
  };
  const checkSelected = () => {
    return pathname.endsWith(`/${title.toLowerCase().replace(" ", "")}`);
  };
  return (
    <button
      className={`flex gap-1 px-4 py-2 ${
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

export default LandingNavButton;
