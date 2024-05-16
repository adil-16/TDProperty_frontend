import CommunityBottomBar from "@/components/Navbars/CommunityBottomBar";
import Image from "next/image";

import CommunityPost from "./Post";
import PeopleYouMayKnowCard from "@/components/Cards/PeopleYouMayKnowCard";
import FeatureMembersCard from "@/components/Cards/FeatureMembersCard";

const SavedPostsSection = () => {
  return (
    <div className="flex py-8">
      <div className="w-3/4 px-10 flex flex-col items-end gap-8">
        <h1 className="max-w-[750px] w-full font-bold text-3xl">Saved Posts</h1>
        <div className="flex flex-col gap-10 items-end">
          <CommunityPost />
          <CommunityPost />
          <CommunityPost />
        </div>
      </div>
      <div className="w-1/4 px-5 flex flex-col gap-6">
        <div className="w-full flex flex-col rounded-lg shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)]">
          <div className="relative">
            <Image
              src="/imgs/coverprofile.png"
              width={250}
              height={82}
              className="w-full"
              alt="pic"
            />
            <Image
              className="absolute bottom-[-22px] left-3"
              src="/imgs/profile.png"
              width={44}
              height={44}
              alt="pic"
            />
          </div>
          <div className="w-full flex pt-1 pb-3 border-b border-[rgba(0,0,0,0.1)]">
            <div className="flex flex-col pl-16">
              <p className="text-sm">Karim Saif</p>
              <p className="text-xs leading-3 text-[rgba(0,0,0,0.5)]">Admin</p>
            </div>
          </div>
          <div className="py-2 px-5">
            <span className="text-[rgba(0,0,0,0.5)] text-xs">
              karimsaif@gmail.com
            </span>
          </div>
        </div>
        <FeatureMembersCard />
        <PeopleYouMayKnowCard />
      </div>
      <CommunityBottomBar />
    </div>
  );
};

export default SavedPostsSection;
