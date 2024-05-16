import UsersCountCard from "@/components/Cards/UsersCountCard";
import UsersTable from "@/components/Tables/UsersTable";
import Image from "next/image";


const UsersPage = () => {
  return (
    <div className="flex flex-col px-8 py-5">
      <h1 className="text-2xl font-bold">Users</h1>
      <div className="flex flex-wrap gap-5 mt-5">
        <UsersCountCard title="Companies" count={2} />
        <UsersCountCard title="Property Owners" count={2} />
        <UsersCountCard title="Property Brokers" count={2} />
        <UsersCountCard title="Normal Users" count={2} />
        <div className="flex flex-col justify-end items-center shadow min-w-[300px] rounded">
          <div className="flex">
            <Image src="/svgs/girlonchair.svg" width={85} height={102} alt="svg" />
            <div className="flex flex-col items-center gap-3">
              <button className="bg-primary rounded-full px-4 w-[143px] py-[10px] text-xs font-medium">
                Add New Role
              </button>
              <span className="text-darkgray">Add role, if does not exist</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14">
        <h1 className="text-2xl font-bold">All Users</h1>
        <div className="mt-5">
          <UsersTable />
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
