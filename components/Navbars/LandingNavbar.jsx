import DarkModeToggleButton from "../Buttons/DarkModeToggleButton";
import LandingTopBarButton from "../Buttons/LandingTopBarButton";
import LandingLogo from "../Logos/LandingLogo";
import LandingNotificationDropdown from "../Dropdowns/LandingNotificationDropdown";
import LandingProfileDropdown from "../Dropdowns/LandingProfileDropdown";
import MoreButtonDropdown from "../Dropdowns/MoreButtonDropdown";

const LandingNavbar = () => {
  return (
    <nav className="flex justify-between bg-secondary px-24 py-4 text-white shadow-[0px_5px_34px_0px_rgba(0,0,0,0.05)]">
      <LandingLogo />
      <div className="flex w-full items-center justify-evenly pl-20 pr-10">
        <LandingTopBarButton title="Home" />
        <LandingTopBarButton title="Listing" />
        <LandingTopBarButton title="Community" />
        <LandingTopBarButton title="Membership" />
        <MoreButtonDropdown />
        <div className="">
          <DarkModeToggleButton />
        </div>
      </div>
      <div className="flex items-center justify-center gap-5">
        <div className="flex h-10 w-10 items-center justify-end">
          <LandingNotificationDropdown />
        </div>
        <LandingProfileDropdown />
      </div>
    </nav>
  );
};

export default LandingNavbar;
