import ImportantNewsCard from "@/components/Cards/ImportantNewsCard";
import React from "react";

const ImportantNewsSections = () => {
  return (
    <div className="flex flex-col pl-[100px] py-[70px]">
      <h1 className="text-[38px] font-extrabold text-primary">
        Important News
      </h1>
      <p className="px-2 py-4 text-[20px] font-medium">-- 24 Oct 2021</p>
      <div className="flex gap-[57px] overflow-x-auto">
        <ImportantNewsCard />
        <ImportantNewsCard />
        <ImportantNewsCard />
        <ImportantNewsCard />
      </div>
    </div>
  );
};

export default ImportantNewsSections;
