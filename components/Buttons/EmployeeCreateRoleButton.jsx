"use client";

import { useRouter } from "next/navigation";

const EmployeeCreateRoleButton = () => {
  const router = useRouter();
  return (
    <button
      className="bg-primary text-secondary px-7 py-3 rounded-full font-semibold text-sm w-[190px]"
      onClick={() => router.push("./employees/createrole")}
    >
      + Create role
    </button>
  );
};

export default EmployeeCreateRoleButton;
