"use client";

import BackButton from "@/components/Buttons/BackButton";
import PropertyBrokerUsersTable from "@/components/Tables/PropertyBrokerUsersTable";
import { useRouter } from "next/navigation";


const PropBrokersUsersPage = () => {
  const router = useRouter;
  return (
    <div className="flex flex-col p-5 gap-3">
      <BackButton />
      <div className="flex justify-between mt-3">
        <h1 className="text-3xl font-bold">Property Broker</h1>
        <button
          className="bg-primary px-8 py-3 rounded-full font-semibold"
          onClick={() => router.push("/properties/addlisting")}
        >
          + Company Account
        </button>
      </div>
      <PropertyBrokerUsersTable />
    </div>
  );
};

export default PropBrokersUsersPage;
