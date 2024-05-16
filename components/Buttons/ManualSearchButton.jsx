"use client";

import { useRouter } from "next/navigation";
import ManualSearchIcon from "../Svgs/home/ManualSearchIcon";

const ManualSearchButton = () => {
  const router = useRouter();
  return (
    <button
      className="flex w-[313px] items-center justify-center gap-2 rounded-full bg-white py-4 text-[20px] font-medium text-primary"
      onClick={() => router.push("/home/manual-search")}
    >
      <ManualSearchIcon />
      Manual Search
    </button>
  );
};

export default ManualSearchButton;
