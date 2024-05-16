"use client";

import BackButton from "@/components/Buttons/BackButton";
import PropertySortDropdown from "@/components/Dropdowns/PropertySortDropdown";
import CompanyUsersTable from "@/components/Tables/CompanyUsersTable";
import Image from "next/image";
import { useRouter } from "next/navigation";


const CompanyUsersPage = () => {
  const router = useRouter;
  return (
    <div className="flex flex-col p-5 gap-3">
        <BackButton />
      <div className="flex justify-between mt-3">
        <h1 className="text-3xl font-bold">Clients</h1>
        <button
          className="bg-primary px-8 py-3 rounded-full font-semibold"
          onClick={() => router.push("/properties/addlisting")}
        >
          + Add New
        </button>
      </div>
      <div className="flex flex-row justify-start">
        <PropertySortDropdown />
        <div className="flex h-11 w-50 items-center justify-center gap-2 rounded-full border border-[1px_solid_rgba(0,0,0,0.20)] px-3 text-xs font-semibold">
              <Image
                src="/svgs/searchicon.svg"
                width={20}
                height={20}
                alt="svg"
              />
              <input
                className="w-full border-none bg-transparent outline-none"
                type="search"
                name="analyticsSearch"
                id="analyticsSearch"
                placeholder="Search"
              />
            </div>
      </div>
      <CompanyUsersTable />
    </div>
  );
};

export default CompanyUsersPage;
