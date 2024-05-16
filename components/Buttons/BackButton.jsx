"use client";


import BackArrowSvg from "../Svgs/BackArrowSvg";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[rgba(0,0,0,0.1)]"
      onClick={() => router.back()}
    >
      <BackArrowSvg />
    </button>
  );
};

export default BackButton;
