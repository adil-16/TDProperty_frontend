"use client";

import BackButton from "@/components/Buttons/BackButton";
import CompanyUsersTable from "@/components/Tables/CompanyUsersTable";
import { useRouter } from "next/navigation";


const CompanyUsersPage = () => {
  const router = useRouter;
  return (
    <div className="flex flex-col p-5 gap-3">
      <BackButton />
      <div className="flex justify-between mt-3">
        <h1 className="text-3xl font-bold">Company</h1>
        <button
          className="bg-primary px-8 py-3 rounded-full font-semibold"
          onClick={() => router.push("/properties/addlisting")}
        >
          + Company Account
        </button>
      </div>
      <CompanyUsersTable />
    </div>
  );
};

export default CompanyUsersPage;
