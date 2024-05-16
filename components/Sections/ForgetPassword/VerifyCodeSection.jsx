"use client";

import BackButton from "@/components/Buttons/BackButton";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import OTPInput from "react-otp-input";

const VerifyCodeSection = () => {
  const email = useSearchParams().get("email");
  const [otp, setOtp] = useState("");
  return (
    <div className="flex flex-col items-center py-20 px-10">
      <div className="bg-[#DEDEDE] w-[160px] h-[5px] rounded-full">
        <div className="bg-primary w-2/3 h-[5px] rounded-full"></div>
      </div>
      <div className="w-full mt-10">
        <BackButton />
      </div>
      <div className="w-full text-[#525252] px-2 text-lg mt-3">
        Enter the 4 digit code that we just sent to <br />
        <b>{email}</b>
      </div>
      <div className="w-full mt-5">
        <form
          className="flex flex-col justify-center items-center mt-5 pr-12"
          action="/login/forgetpassword/verifycode/newpassword"
        >
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span>&nbsp;&nbsp;&nbsp;</span>}
            renderInput={(props) => <input {...props} />}
            inputStyle={{
              justifyContent: "center",
              width: "70px",
              height: "70px",
              backgroundColor: "#E6E6E6",
              borderRadius: "6px",
              outlineColor: "#FFAA45",
            }}
          />
          <div className="flex justify-between items-center gap-1 rounded-full py-2 px-4 text-xs font-semibold mt-5 bg-[#E6E6E6]">
            <Image
              src="/svgs/otpclock.svg"
              alt="otpclock"
              width={13}
              height={13}
            />
            <p>00.21</p>
          </div>
          <div className="text-themetext mt-5">
            Did not receive the OTP?
            <span className="text-primary font-medium"> Resend Code</span>
          </div>
          <input
            className="bg-primary w-full mt-7 rounded-full font-bold py-3 text-sm"
            type="submit"
            value="Next"
          />
        </form>
      </div>
    </div>
  );
};

export default VerifyCodeSection;
