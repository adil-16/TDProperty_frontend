import Image from "next/image";
import React from "react";
import MessageIcon from "../Svgs/members/MessageIcon";
import PhoneIcon from "../Svgs/members/PhoneIcon";
import WhatsappIcon from "../Svgs/members/WhatsappIcon";

const MemberCard = () => {
  return (
    <div className="flex h-[332px] items-end">
      <div className="flex h-[252px] w-[202px] flex-col items-center bg-primary px-4 pt-4 pb-2">
        <div className="relative h-[178px] w-full bg-white">
          <Image
            src="/imgs/staffman.png"
            width={187}
            height={273}
            alt="img"
            className="absolute -left-5 bottom-0"
          />
        </div>
        <p className="pt-1 font-bold text-secondary">Dylan Paul</p>
        <div className="flex items-center gap-1">
          <MessageIcon />
          <PhoneIcon />
          <WhatsappIcon />
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
