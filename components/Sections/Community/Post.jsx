"use client";

import Bookmark2Svg from "@/components/Svgs/Bookmark2Svg";
import CommentMsgSvg from "@/components/Svgs/CommentMsgSvg";
import HeartSvg from "@/components/Svgs/HeartSvg";
import ShareSvg from "@/components/Svgs/ShareSvg";
import Image from "next/image";
import React, { useState } from "react";
import CommentsToggleSection from "./CommentsToggleSection";
import { usePathname, useRouter } from "next/navigation";

const CommunityPost = ({ isBlog }) => {
  const pathname = usePathname();
  const router = useRouter();
  const dashboardName = pathname.split("/")[2];
  const goToProfileLink = () => {
    if (pathname.includes("dashboard")) {
      router.push(`/dashboard/${dashboardName}/community/profile`);
    } else {
      return router.push("/admin/community/profile");
    }
  };

  return (
    <div className="flex max-w-[750px] flex-col gap-3 w-full shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] px-3 pt-2 rounded-lg">
      <div className="flex gap-3 items-center">
        <Image src="/imgs/profile-3.png" height={54} width={54} />
        <div className="flex flex-col">
          <div className="flex gap-2">
            <button onClick={() => goToProfileLink()} className="font-bold">
              Slingshot
            </button>
            <button className="text-primary text-sm font-semibold">
              Follow
            </button>
          </div>
          <div className="flex gap-1 text-[rgba(0,0,0,0.5)] font-medium">
            <p>@useslingshot</p>
            <p>. 1h</p>
          </div>
        </div>
      </div>
      <div className="text-lg">
        Everyone loves giving away company swag, until its taking up your spare
        bedroom and dominating your schedule. <br />
        Schedule a quick demo where well show you how our platform has helped
        companies like Adobe use swag giveaways to clear out their swag closets
        and give them back their time. <br /> <br />
        <div className="text-blue-500">useslingshot.com</div>
      </div>
      {!isBlog && (
        <Image
          className="w-full rounded-2xl"
          src="/imgs/prop-1.png"
          width={623}
          height={326}
        />
      )}
      <div className="px-3 py-4">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <HeartSvg />
            <CommentMsgSvg />
            <ShareSvg />
          </div>
          <Bookmark2Svg />
        </div>
        <div className="py-4">
          <p className="font-bold text-sm">12,456 Likes</p>
        </div>
        <CommentsToggleSection />
        <div className="flex gap-3">
          <Image src="/imgs/profile-2.png" width={34} height={34} />
          <input
            className="focus:outline-none outline-none w-full text-sm"
            type="text"
            name="commentdraft"
            id="commentdraft"
            placeholder="Add a comment ..."
          />
          <div className="flex items-center gap-3">
            <button>
              <Image src="/svgs/heart.svg" alt="heart" width={20} height={20} />
            </button>
            <button>
              <Image src="/svgs/hands.svg" alt="hands" width={25} height={25} />
            </button>
            <button>
              <Image
                src="/svgs/graypluscircle.svg"
                alt="hands"
                width={25}
                height={25}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPost;
