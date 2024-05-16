"use client";

import BackButton from "@/components/Buttons/BackButton";
import PropertyOwnerUsersTable from "@/components/Tables/PropertyOwnerUsersTable";
import { useRouter } from "next/navigation";

const PropOwnerUsersPage = () => {
  const router = useRouter;
  return (
    <div className="flex flex-col gap-3 p-5">
      <BackButton />
      <div className="mt-3 flex justify-between">
        <h1 className="text-3xl font-bold">Property Owner</h1>
        {/* <button
          className="bg-primary px-8 py-3 rounded-full font-semibold"
          onClick={() => router.push("/properties/addlisting")}
        >
          + Company Account
        </button> */}
      </div>
      <PropertyOwnerUsersTable />
    </div>
  );
};

export default PropOwnerUsersPage;
