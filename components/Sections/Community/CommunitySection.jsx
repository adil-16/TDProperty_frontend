import CommunityBottomBar from "@/components/Navbars/CommunityBottomBar";
import Image from "next/image";

import CommunityPost from "./Post";
import PeopleYouMayKnowCard from "@/components/Cards/PeopleYouMayKnowCard";
import FeatureMembersCard from "@/components/Cards/FeatureMembersCard";

const CommunitySection = () => {
  return (
    <div className="flex py-8">
     
     
      <div className="w-3/4 px-10 flex flex-col items-end gap-8">
      
        <div className="flex flex-col gap-4">
        <div className="w-3/4 px-2 flex ">
        <Image src="/imgs/profile-2.png" width={34} height={34} />
        <input
            className="focus:outline-none outline-none w-full text-sm ml-3 px-4 bg-gray-100 border rounded-2xl"
            type="text"
            name="commentdraft"
            id="commentdraft"
            placeholder="What's on your mind, Eric?"
          />
          
        </div>
        
        <div class="flex items-center justify-start w-full mb-5">
          <label for="dropzone-file" class="flex items-start justify-start w-full border-2 border-gray-100 border-dashed rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-100 dark:bg-gray-100 dark:border-gray-100 dark:hover:bg-gray-100">
              <div class="flex items-center justify-start p-2">
                  <svg class="w-8 text-zinc-500 dark:text-gray-400 color-black mr-3" aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                  </svg>
                  <p class="text-sm text-gray-600 dark:text-gray-600 mr-2"> 
                      <span class="font-semibold">Photo/Video</span>
                  </p>
              </div>
              <input id="dropzone-file" type="file" class="hidden" />
          </label>



        </div>
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
    </div>
  );
};

export default CommunitySection;
