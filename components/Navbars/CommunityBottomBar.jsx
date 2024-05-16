"use client";


import BottomBarHomeSvg from "@/components/Svgs/BottomBarHomeSvg";
import FindPeopleSvg from "@/components/Svgs/FindPeopleSvg";
import SavedSvg from "@/components/Svgs/SavedSvg";
import VideoPostsSvg from "@/components/Svgs/VideoPostsSvg";
import AddPostModal from "../Modals/AddPostModal";
import { usePathname, useRouter } from "next/navigation";
import FindPeopleModal from "../Modals/FindPeopleModal";

const CommunityBottomBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const dashboardBaseUrl =
    pathname.split("/")[1] + "/" + pathname.split("/")[2];
  const adminBaseUrl = pathname.split("/")[1];
  const navigateToPage = (pagename) => {
    if (pathname.includes("dashboard")) {
      router.push(`/${dashboardBaseUrl}/${pagename}`);
    } else {
      router.push(`/${adminBaseUrl}/${pagename}`);
    }
  };
  return (
    <div className="fixed bottom-0 left-0 pointer-events-none w-screen flex items-center justify-center pb-8">
      <div className="flex bg-black px-8 py-3 rounded-full gap-2 pointer-events-auto">
        <button
          className="flex flex-col gap-1 items-center justify-center w-[76px] py-2"
          onClick={() => navigateToPage("/community")}
        >
          <BottomBarHomeSvg
            color={pathname.endsWith("community") ? "#FFAA45" : "#ffffff"}
          />
          <p
            className={`text-xs ${
              pathname.endsWith("community") ? "text-primary" : "text-[#9DB2CE]"
            }`}
          >
            Home
          </p>
        </button>
        <FindPeopleModal />
        <button
          className="flex flex-col gap-1 items-center justify-center w-[73px] py-2"
          onClick={() => navigateToPage("/community/savedposts")}
        >
          <SavedSvg
            color={pathname.endsWith("savedposts") ? "#FFAA45" : "#ffffff"}
          />
          <p
            className={`text-xs ${
              pathname.endsWith("savedposts")
                ? "text-primary"
                : "text-[#9DB2CE]"
            }`}
          >
            Saved
          </p>
        </button>
        <button
          className="flex flex-col gap-1 items-center justify-center w-[100px] py-2"
          onClick={() => navigateToPage("/community/videoposts")}
        >
          <VideoPostsSvg
            color={pathname.endsWith("videoposts") ? "#FFAA45" : "#ffffff"}
          />
          <p
            className={`text-xs ${
              pathname.endsWith("videoposts")
                ? "text-primary"
                : "text-[#9DB2CE]"
            }`}
          >
            Video Posts
          </p>
        </button>
      </div>
      <div className="absolute -top-6">
        <AddPostModal />
      </div>
    </div>
  );
};

export default CommunityBottomBar;
