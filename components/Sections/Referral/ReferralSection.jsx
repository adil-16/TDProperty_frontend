"use client";

import CopyTextSvg from "@/components/Svgs/CopyTextSvg";
import Image from "next/image";
import React, { useState } from "react";

const ReferralSection = () => {
  const [alertText, setAlertText] = useState("");
  const copyToClipboard = () => {
    const copyText = document.getElementById("referralLink");
    navigator.clipboard.writeText(copyText.value);
    setAlertText("Copied!");
    setTimeout(() => {
      setAlertText("");
    }, 1500);
  };
  return (
    <div className="max-w-5xl flex flex-col w-full justify-center items-center">
      <h1 className="text-5xl font-extrabold px-5 mt-16">
        Invite your friends and family
      </h1>
      <div className="w-fit flex flex-col items-center px-36 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08),0px_-4px_10px_0px_rgba(0,0,0,0.05)] py-6 my-10 rounded-xl">
        <h2 className="text-lg font-medium leading-7 text-secondary text-center">
          Get your referral link to give to your friends and family <br />
          Helping them to buy their a dream home
        </h2>
        <div className="flex flex-col w-full">
          <div className="text-darkgray mt-10 font-semibold px-4">
            Copy Referral Link
          </div>
          <div className="rounded-full border-2 border-[rgba(0,0,0,0.1)] mt-2 px-5 py-2">
            <div className="flex items-center justify-between gap-3">
              <input
                className="text-[14px] font-medium outline-none"
                id="referralLink"
                value="https://katelin.com"
              />
              <div className="flex">
                <div className="text-themetext font-medium" id="alertCopy">
                  {alertText}
                </div>
                <button onClick={() => copyToClipboard()}>
                  <CopyTextSvg />
                </button>
              </div>
            </div>
          </div>
        </div>
        <h1 className="mt-10 text-center font-semibold text-darkgray text-xl">OR</h1>
        <h3 className="mt-8 mb-2 text-center font-semibold text-darkgray">
          Invite now by using:
        </h3>
        <div className="flex items-center justify-between gap-10 w-fit">
          <button>
            <Image src="/svgs/facebook.svg" width={45} height={45} />
          </button>
          <button>
            <Image src="/svgs/instagram.svg" width={45} height={45} />
          </button>
          <button>
            <Image src="/svgs/threads.svg" width={45} height={45} />
          </button>
          <button>
            <Image src="/svgs/whatsapp.svg" width={45} height={45} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReferralSection;
