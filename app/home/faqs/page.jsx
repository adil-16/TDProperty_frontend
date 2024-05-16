import BackButton from "@/components/Buttons/BackButton";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import React from "react";

const monsterrat = Montserrat({ subsets: ["latin"] });

const FaqPage = () => {
  return (
    <div className="flex flex-col">
      <div className="px-[100px] py-[70px]">
        <BackButton />
        <div className="px-3">
          <div className="my-5 text-[32px] font-bold">FAQs</div>
        </div>
      </div>
      <div className="mb-40 flex h-[940px] w-full items-center justify-center bg-[rgba(0,23,73,0.55)] bg-[url('/imgs/faq-bg.png')] bg-cover bg-no-repeat">
        <div className="flex h-[732px] w-[941px] flex-col items-center justify-center rounded-[24px] bg-secondary px-[200px] py-5">
          <h1 className="text-[48px] font-extrabold text-primary">FAQs</h1>
          <h2 className="mt-1 text-[40px] tracking-[-0.5px] text-white">
            <span className={monsterrat.className}>
              Your Questions Answered
            </span>
          </h2>
          <p className="mt-5 px-5 font-light text-white">
            Explore our frequently asked questions to find answers to common
            inquiries about TechNippon Solutions, our technology offerings, and
            how we can empower your business. If you have any additional
            questions or require further information, please don't hesitate to
            reach out to our knowledgeable team.
          </p>
          <div className="mt-[60px] flex w-full flex-col px-5 text-white">
            <div className="flex h-[60px] w-full items-center justify-between border-b border-[rgba(255,255,255,0.15)]">
              What industries do we serve?
              <Image
                src="/svgs/chevronrightwhite.svg"
                width={14}
                height={22}
                alt="svg"
                className="mt-1"
              />
            </div>
            <div className="flex h-[60px] w-full items-center justify-between border-b border-[rgba(255,255,255,0.15)]">
              What industries do we serve?
              <Image
                src="/svgs/chevronrightwhite.svg"
                width={14}
                height={22}
                alt="svg"
                className="mt-1"
              />
            </div>
            <div className="flex h-[60px] w-full items-center justify-between border-b border-[rgba(255,255,255,0.15)]">
              What industries do we serve?
              <Image
                src="/svgs/chevronrightwhite.svg"
                width={14}
                height={22}
                alt="svg"
                className="mt-1"
              />
            </div>
            <div className="flex h-[60px] w-full items-center justify-between border-b border-[rgba(255,255,255,0.15)]">
              What industries do we serve?
              <Image
                src="/svgs/chevronrightwhite.svg"
                width={14}
                height={22}
                alt="svg"
                className="mt-1"
              />
            </div>
            <div className="flex h-[60px] w-full items-center justify-between">
              What industries do we serve?
              <Image
                src="/svgs/chevronrightwhite.svg"
                width={14}
                height={22}
                alt="svg"
                className="mt-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
