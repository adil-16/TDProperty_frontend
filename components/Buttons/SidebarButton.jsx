"use client";
import { usePathname, useRouter } from "next/navigation";


const SidebarButton = ({ title, icon }) => {
  const pathname = usePathname();
  const router = useRouter();

  const navigateToPage = () => {
    if (title.toLowerCase() === "dashboards") {
      router.push(`/admin`);
    } else {
      router.push(`/admin/${title.toLowerCase().split(" ").join("")}`);
    }
  };

  return (
    <div
      className={`flex items-center gap-2 hover:bg-primary hover:text-black rounded w-[13.4rem] h-10 px-5 cursor-pointer ${
        title.toLowerCase() == pathname.substring(1, title.length + 1)
          ? "bg-primary text-black"
          : ""
      } ${
        pathname === "/" &&
        title.toLowerCase() === "dashboards" &&
        "bg-primary text-black"
      }`}
      onClick={() => navigateToPage()}
    >
      {icon}
      <span className="font-medium">{title}</span>
    </div>
  );
};

export default SidebarButton;
