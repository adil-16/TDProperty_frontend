"use client";

import BackButton from "@/components/Buttons/BackButton";
import AdsTable from "@/components/Tables/AdsTable";
import { useRouter } from "next/navigation";

const AdsManagementPage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-3 p-5">
      <BackButton />
      <div className="mt-3 flex justify-between">
        <h1 className="text-3xl font-bold">Ads Management</h1>
        <button
          className="rounded-full border border-[rgba(0,0,0,0.4)] px-8 py-3 font-semibold"
          onClick={() => router.push("/adsmanagement/adrequests")}
        >
          Ad Requests
        </button>
      </div>
      <AdsTable />
    </div>
  );
};

export default AdsManagementPage;
