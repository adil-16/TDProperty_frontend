"use client";

import BackButton from "@/components/Buttons/BackButton";
import AdRequestsTable from "@/components/Tables/AdRequestsTable";
import { useRouter } from "next/navigation";


const AdsRequestPage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col p-5 gap-3">
      <BackButton />
      <div className="flex justify-between mt-3">
        <h1 className="text-3xl font-bold pb-10">Ad Requests</h1>
      </div>
      <AdRequestsTable />
    </div>
  );
};

export default AdsRequestPage;
