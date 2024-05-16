"use client";

import CommentLikeSvg from "@/components/Svgs/CommentLikeSvg";
import Image from "next/image";
import React, { useState } from "react";

const CommentInstance = () => {
  const [liked, setLiked] = useState(false);
  return (
    <div>
      <div className="flex gap-3 items-center">
        <Image src="/imgs/profile-2.png" width={34} height={34} />
        <div className="font-semibold">Jane Doe</div>
      </div>
      <div className="w-full leading-7 py-2 text-sm font-light">
        I really appreciate the insights and perspective shared in this article.
        It's definitely given me something to think about and has helped me see
        things from a different angle. Thank you for writing and sharing!
      </div>
      <div className="flex justify-between w-full">
        <p className="text-thememutedtext font-bold text-xs">5 mins ago</p>
        <CommentLikeSvg liked={liked} setLiked={setLiked} />
      </div>
    </div>
  );
};

export default CommentInstance;
