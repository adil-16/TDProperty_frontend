import CompanyLogo from "../Logos/CompanyLogo";
import DarkModeToggleButton from "../Buttons/DarkModeToggleButton";
import NotificationDropdown from "../Dropdowns/NotificationDropdown";
import CompanyProfileDropdown from "../Dropdowns/CompanyProfileDropdown";
import ComTopBarButton from "../Buttons/ComTopBarButton";
import Image from "next/image";

const CompanyNavbar = () => {
  return (
    <nav className="flex justify-between px-24 shadow-[0px_5px_34px_0px_rgba(0,0,0,0.05)]">
      <CompanyLogo />
      <div className="flex justify-evenly items-center text-black w-full pl-20 pr-10">
        <ComTopBarButton title="Home" />
        <ComTopBarButton title="Listing" />
        <ComTopBarButton title="Community" />
        <ComTopBarButton title="Membership" />
        

       
      </div>
      <div className="flex items-center justify-center gap-5">
        <DarkModeToggleButton />
        <Image src="/svgs/aiface.svg" width={26} height={25} alt="svg" />
        <div className="w-10 h-10 flex items-center justify-end">
          <NotificationDropdown />
        </div>
        <CompanyProfileDropdown />
      </div>
    </nav>
  );
};

export default CompanyNavbar;
