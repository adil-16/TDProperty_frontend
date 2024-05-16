"use client";

import BackButton from "@/components/Buttons/BackButton";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import AdsTable from "@/components/Tables/AdsTable";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AdsManagementPage = () => {
  const router = useRouter();
  const options = ["Facebook", "Instagram", "Twitter", "Whatsapp"];
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleSelected = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };
  return (
    <div className="w-full px-20 py-10">
      <h1 className="text-4xl font-bold">Ad Management</h1>
      <div className="flex justify-between pt-10 pb-3">
        <h2 className="text-2xl font-bold">Running Ads</h2>
        <button
          className="bg-primary rounded-full font-bold text-xs px-10 py-3"
          onClick={() => router.push("./admanagement/adrequest")}
        >
          + Ad Request
        </button>
      </div>
      <AdsTable />
    </div>
  );
};

export default AdsManagementPage;
