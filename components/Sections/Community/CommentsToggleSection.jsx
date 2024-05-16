"use client";
import CommentLikeSvg from "@/components/Svgs/CommentLikeSvg";
import HeartSvg from "@/components/Svgs/HeartSvg";
import Image from "next/image";
import React, { useState } from "react";
import CommentInstance from "./CommentInstance";

const CommentsToggleSection = () => {
  const [showComments, setShowComments] = useState(false);
  return (
    <div>
      <button className="pb-4" onClick={() => setShowComments(!showComments)}>
        <p className="font-medium text-sm text-thememutedtext">
          {showComments ? "Hide Comments" : "View all 123 comments"}
        </p>
      </button>
      {showComments && (
        <div className="flex flex-col gap-5 pb-8 pt-2">
          <CommentInstance />
          <CommentInstance />
        </div>
      )}
    </div>
  );
};

export default CommentsToggleSection;
