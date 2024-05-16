"use client";

import PrimaryButton from "./PrimaryButton";
import { useRouter } from "next/navigation";

const AddListingButtonCS = () => {
  const router = useRouter();
  return (
    <PrimaryButton
      title="+ Add Listing"
      onClick={() => router.push("/companydashboard/listing/addlisting")}
    />
  );
};

export default AddListingButtonCS;
