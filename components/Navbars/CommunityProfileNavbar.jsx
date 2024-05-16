import Image from "next/image";

import MessageSvg from "../Svgs/MessageSvg";
import TimelineSvg from "../Svgs/communityprofile/TimelineSvg";
import CommunityProfileButton from "../Buttons/CommunityProfileButton";
import VideoSvg from "../Svgs/communityprofile/VideoSvg";
import BlogSvg from "../Svgs/communityprofile/BlogSvg";
import HomeSvg from "../Svgs/communityprofile/HomeSvg";

const CommunityProfileNavbar = () => {
  return (
    <div className="max-w-6xl w-full py-8 px-5">
      <div className="flex flex-col">
        <div className="flex gap-10 border-b pb-4">
          <div className="w-fit h-fit">
            <Image
              src="/imgs/profile-3.png"
              height={150}
              width={150}
              alt="profile"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-semibold my-2">terrylucas</h1>
            <div className="flex gap-10 text-lg">
              <p>1258 posts</p>
              <p>
                <b>4M</b> followers
              </p>
              <p>190 following</p>
            </div>
            <div className="text-[#959595] font-semibold text-lg">
              @terrylucas@gmail.com
            </div>
            <div className="flex gap-4 py-2">
              <button className="bg-primary px-14 py-[0.4rem] font-bold rounded-full">
                Follow
              </button>
              <button className="flex gap-2 items-center border-2 border-[rgba(0,0,0,0.1)] px-8 py-[0.4rem] font-bold rounded-full text-secondary">
                <MessageSvg />
                Message
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <div className="flex justify-between w-full px-10 max-w-3xl">
            <CommunityProfileButton title="timeline" icon={<TimelineSvg />} />
            <CommunityProfileButton
              title="images and videos"
              icon={<VideoSvg />}
            />
            <CommunityProfileButton title="my blog" icon={<BlogSvg />} />
            <CommunityProfileButton
              title="listed properties"
              icon={<HomeSvg />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityProfileNavbar;
