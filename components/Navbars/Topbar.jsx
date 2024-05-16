
import Image from "next/image";
import SearchIconSvg from "../Svgs/SearchIconSvg";
import DarkModeToggleButton from "../Buttons/DarkModeToggleButton";
import LanguageDropdown from "../Dropdowns/LanguageDropdown";
import NotificationDropdown from "../Dropdowns/NotificationDropdown";
import ProfileDropdown from "../Dropdowns/ProfileDropdown";

const Topbar = () => {
  return (
    <nav className="flex items-center justify-between w-full h-20 shadow-[0px_3.99707px_9.99267px_0px_rgba(0,0,0,0.08)] px-[30px]">
      <div className="flex items-center gap-3 px-[15px] py-[9px] rounded-full shadow-[0px_1.99853px_7.99413px_0px_rgba(153,153,153,0.20)]">
        <SearchIconSvg width={15} height={15} />
        <form action="">
          <input
            className="outline-none focus:border-none bg-transparent"
            type="search"
            name="search"
            id="search"
            placeholder="Search"
          />
        </form>
      </div>
      <div className="flex gap-7 select-none">
        <Image src="/svgs/chatbot.svg" width={40} height={40} alt="svg" />
        <DarkModeToggleButton />
        <LanguageDropdown />
        <div className="mt-3">
          <NotificationDropdown />
        </div>
        <ProfileDropdown />
      </div>
    </nav>
  );
};

export default Topbar;
