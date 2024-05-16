"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";


const UsersCountCard = ({ title, count }) => {
  const router = useRouter();
  const pathname = usePathname();
  const navigateToPage = () => {
    // remove spaces from title
    const url = title.split(" ").join("").toLowerCase();
    router.push(`${pathname}/${url}`);
  };
  return (
    <div className="flex flex-col shadow-lg min-w-[300px] p-4 rounded cursor-pointer">
      <div
        className="flex justify-between items-center"
        onClick={() => navigateToPage()}
      >
        <p className="text-darkgray text-sm">Total {count} users</p>
        <Image src="/imgs/groupusers.png" width={112} height={28} alt="png" />
      </div>
      <div
        className="text-darkgray text-lg font-semibold"
        onClick={() => navigateToPage()}
      >
        {title}
      </div>
      <button className="text-primary text-xs font-bold text-left w-fit mt-2">
        Edit
      </button>
    </div>
  );
};

export default UsersCountCard;
