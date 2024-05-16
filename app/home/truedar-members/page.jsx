import BackButton from "@/components/Buttons/BackButton";
import MemberCard from "@/components/Cards/MemberCard";
import React from "react";

const TrueDarMembers = () => {
  return (
    <div className="flex flex-col px-[100px] py-[80px]">
      <BackButton />
      <div className="flex flex-col px-3 ">
        <h1 className="text-[32px] font-bold">TrueDar Members</h1>
      </div>
      <div className="flex flex-wrap gap-x-[60px]">
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
      </div>
    </div>
  );
};

export default TrueDarMembers;
