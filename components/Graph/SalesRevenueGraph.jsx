"use client";

import { useState } from "react";
import ProgressBar from "./ProgressBar";

const SalesRevenueGraph = () => {
  const tabs = ["Daily", "Weekly", "Monthly", "Yearly"];
  const [selectedTab, setSelectedTab] = useState(tabs[3]);
  return (
    <div className="flex flex-col px-10 py-4 shadow-[0px_1.78114px_42.74738px_0px_rgba(0,0,0,0.06)]">
      {/* Graph Header */}
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <p className="font-semibold text-secondary text-lg tracking-[0.891px]">
            Sales Revenue
          </p>
          <small className="text-[10px] mt-1 text-[#64636C]">
            Updated 2 days ago
          </small>
        </div>
        <div className="flex gap-5">
          {tabs.map((tab, index) => (
            <p
              className={` text-sm font-semibold cursor-pointer ${
                selectedTab == tab
                  ? "text-primary border-b border-primary"
                  : "text-thememutedtext"
              }`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </p>
          ))}
        </div>
      </div>
      {/* Graph */}
      <div className="flex gap-10">
        {/* Y-axis */}
        <div className="flex flex-col justify-between items-center text-sm h-56 my-8">
          <span className="text-secondary" key={1}>$600</span>
          <span className="text-secondary" key={2}>$500</span>
          <span className="text-secondary" key={3}>$400</span>
          <span className="text-secondary" key={4}>$300</span>
          <span className="text-secondary" key={5}>$200</span>
          <span className="text-secondary" key={6}>$100</span>
        </div>
        {/* Progress Bars */}
        <div className="flex justify-between w-full">
          <ProgressBar title="Jan" currentValue={400} maxValue={680} />
          <ProgressBar title="Feb" currentValue={550} maxValue={680} />
          <ProgressBar title="Mar" currentValue={350} maxValue={680} />
          <ProgressBar title="Apr" currentValue={500} maxValue={680} />
          <ProgressBar title="May" currentValue={650} maxValue={680} />
          <ProgressBar title="Jun" currentValue={350} maxValue={680} />
          <ProgressBar title="Jul" currentValue={300} maxValue={680} />
          <ProgressBar title="Aug" currentValue={370} maxValue={680} />
          <ProgressBar title="Sep" currentValue={200} maxValue={680} />
          <ProgressBar title="Oct" currentValue={550} maxValue={680} />
          <ProgressBar title="Nov" currentValue={300} maxValue={680} />
          <ProgressBar title="Dec" currentValue={150} maxValue={680} />
        </div>
      </div>
    </div>
  );
};

export default SalesRevenueGraph;
