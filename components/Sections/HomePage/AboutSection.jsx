import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <div className="relative flex select-none justify-center overflow-hidden pb-[140px] pt-[70px]">
      <Image
        className="absolute bottom-24 left-16"
        src="/imgs/true-daar-no-bg.png"
        width={577}
        height={306}
      />
      <div className="flex h-[488px] w-[1244px] flex-col items-center rounded-[26px] bg-secondary py-6 text-center text-white">
        <h1 className="text-[36px] font-semibold text-primary">
          About TrueDar
        </h1>
        <p className="mt-3 text-[18px]">
          Born from the rich Emirati legacy, TrueDar simplifies your property
          <br /> search in the UAE's dynamic landscape.
        </p>
        <h1 className="mt-[34px] text-[36px] font-semibold text-primary">
          Why Choose Us?
        </h1>
        <h2 className="mt-3 text-[18px] font-medium">
          Local Roots, Global Reach
        </h2>
        <p className="text-[14px] text-[rgba(255,255,255,0.75)]">
          Deeply rooted in Emirati values, connecting you to opportunities
          across the nation
        </p>
        <h2 className="mt-5 text-[18px] font-medium">Feature-Rich Platform</h2>
        <p className="text-[14px] text-[rgba(255,255,255,0.75)]">
          Beyond listings - analytics, a vibrant community, and seamless
          communication tools <br /> at your fingertips.
        </p>
        <h2 className="mt-5 text-[18px] font-medium">Your Property Ally</h2>
        <p className="text-[14px] text-[rgba(255,255,255,0.75)]">
          Whether listing or looking, do it yourself or lean on our experts.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
