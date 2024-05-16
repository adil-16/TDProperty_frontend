import { Manrope, Montserrat } from "next/font/google";
import Image from "next/image";
import React from "react";

const montserrat = Montserrat({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });

const ImportantNewsCard = () => {
  return (
    <div className={montserrat.className}>
      <div className="flex w-[438px] flex-col gap-[18px] pb-[20px]">
        <Image src="/imgs/imp-news.png" width={438} height={282} alt="img" />
        <div className="flex items-center">
          <Image
            src="/svgs/imp-news/date.svg"
            width={24}
            height={24}
            alt="svg"
          />
          <span className="px-5 text-xs font-light text-[#747474]">
            24 Oct, 2021
          </span>
          <Image
            src="/svgs/imp-news/verticalline.svg"
            width={2}
            height={15}
            alt="svg"
          />
        </div>
        <div className="text-[22px] font-semibold">
          Hymn to the United Nations
        </div>
        <p className="border-b pb-4 leading-[25px] text-[#747474]">
          Get inspired by this revived W.H. Auden’s Hymn to the United Nations.
          "Let music for peace Be the paradigm, For peace means to change At the
          right time, As the World-Clock, Goes Tick and Tock.So may the story Of
          our human city Presently move
        </p>
        <div className={manrope.className}>
          <div className="flex justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/imgs/profile-2.png"
                width={40}
                height={40}
                alt="img"
              />
              <span className="font-semibold text-[#747474]">Windy Bond</span>
            </div>
            <div className="flex h-[50px] items-center gap-[10px] rounded-lg bg-primary px-[15px] py-[10px]">
              <span className="font-bold text-white">Read more</span>
              <Image
                src="/svgs/imp-news/rightarrow.svg"
                width={24}
                height={24}
                alt="svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportantNewsCard;
