"use client";

import BackButton from "@/components/Buttons/BackButton";
import AffiliateMarketingTable from "@/components/Tables/AffiliateMarketingTable";
import { useRouter } from "next/navigation";


const AffiliateMarketingPage = () => {
  const router = useRouter;
  return (
    <div className="flex flex-col p-5 gap-3">
      <BackButton />
      <div className="flex justify-between mt-3">
        <h1 className="text-3xl font-bold">Affiliate Marketing</h1>
      </div>
      <AffiliateMarketingTable />
    </div>
  );
};

export default AffiliateMarketingPage;
