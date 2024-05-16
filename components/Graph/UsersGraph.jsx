
import UsersDonutChart from "../Charts/UsersDonutChart";

const UsersGraph = () => {
  return (
    <div className="flex flex-col gap-2 items-center shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] w-full">
      <div className="flex justify-between items-center w-full px-4 pt-4">
        <p className="text-semibold text-secondary">Users</p>
        <select className="border border-[rgba(0,0,0,0.10)] text-[10px] text-darkgray p-1">
          <option>Monthly</option>
          <option>Weekly</option>
          <option>Daily</option>
        </select>
      </div>
      <UsersDonutChart />
      <div className="grid grid-cols-2 gap-x-3 gap-y-1 mt-3 text-[10px] pb-4">
        <div className="flex gap-2 items-center">
          <div className="h-2 w-2 rounded-full bg-primary"></div>
          <p className="text-secondary font-medium">Companies</p>
        </div>
        <div className="flex gap-2 items-center">
          <div className="h-2 w-2 rounded-full bg-secondary"></div>
          <p className="text-secondary font-medium">Property Owners</p>
        </div>
        <div className="flex gap-2 items-center">
          <div className="h-2 w-2 rounded-full bg-[#C40101]"></div>
          <p className="text-secondary font-medium">Normal Users</p>
        </div>
        <div className="flex gap-2 items-center">
          <div className="h-2 w-2 rounded-full bg-[#51C878]"></div>
          <p className="text-secondary font-medium">Property Broker</p>
        </div>
        <div className="flex gap-2 items-center col-span-2">
          <div className="h-2 w-2 rounded-full bg-[#0086FF]"></div>
          <p className="text-secondary font-medium">Number of visitors</p>
        </div>
      </div>
    </div>
  );
};

export default UsersGraph;
