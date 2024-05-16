
import Statistic from "../Statistic";

const CompanyStats = () => {
  return (
    <div className="flex flex-col shadow-[0px_8.81px_35.51px_0px_rgba(51,38,174,0.08)] p-7">
      <div className="flex justify-between">
        <p className="text-lg text-[#5E5873] font-medium">Statistics</p>
        <small className="text-[#6E6B7B]">Updated 1 month ago</small>
      </div>
      <div className="flex w-full  justify-between pr-10 mt-10">
        <Statistic
          title="230k"
          subtitle="Properties Sold"
          icon="/svgs/home-stat.svg"
          bgcolor="#EA54551F"
        />
        <Statistic
          title="8.459k"
          subtitle="Rented Out"
          icon="/svgs/rent-stat.svg"
          bgcolor="#D500B31F"
        />
        <Statistic
          title="1.2k"
          subtitle="Followers"
          icon="/svgs/user-stat.svg"
          bgcolor="#00CFE81F"
        />
        <Statistic
          title="1.423k"
          subtitle="Employees"
          icon="/svgs/employees-stat.svg"
          bgcolor="#EA54551F"
        />
      </div>
    </div>
  );
};

export default CompanyStats;
