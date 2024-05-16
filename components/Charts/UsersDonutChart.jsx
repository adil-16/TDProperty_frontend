"use client";
import PieDonutChart from "@garvae/react-pie-donut-chart";
import React, { useRef } from "react";

const UsersDonutChart = () => {
  const usersData = [
    { color: "#FFAA45", value: 12, order: 1, id: "001" },
    { color: "#0086FF", value: 12, order: 1, id: "001" },
    { color: "#C40101", value: 12, order: 1, id: "001" },
    { color: "#51C878", value: 12, order: 1, id: "001" },
    { color: "#001749", value: 12, order: 1, id: "001" },
  ];
  const chartRef = useRef(null);
  return (
    <div className="flex w-[182px] h-[182px]" ref={chartRef}>
      <PieDonutChart
        data={usersData}
        parentRef={chartRef}
        donutThickness={35}
        text=" "
      />
    </div>
  );
};

export default UsersDonutChart;
