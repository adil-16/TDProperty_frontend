import Image from "next/image";
import React from "react";

const ServiceCard = () => {
  return (
    <div className="flex justify-between w-[300px] h-[389px] flex-col overflow-hidden rounded-[22px] bg-secondary">
      <h1 className="px-3 pt-6 text-[28px] font-bold leading-[34px] text-primary">
        TrueDar <br />
        Community
      </h1>
      <p className="h-[150px] w-[95%] px-[0.55rem] pt-3 leading-normal text-white">
        Dive into our exclusive real estate community right here. Connect,
        explore, and elevate your property journey with like-minded enthusiasts!
      </p>
      <Image src="/imgs/service-bg.png" width={300} height={141} />
    </div>
  );
};

export default ServiceCard;
