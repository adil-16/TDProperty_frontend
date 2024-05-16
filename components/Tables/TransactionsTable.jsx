"use client";


import TableWithSort from "./TableWithSort";
import RecordButton from "../Dropdowns/RecordDropdown";
import SortByButton from "../Dropdowns/UsersSortByDropdown";
import SearchIconSvg from "../Svgs/SearchIconSvg";
import ActionDropdown from "../Dropdowns/ActionDropdown";
import TablePagination from "./TablePagination";

const TransactionsTable = () => {
  const headings = [
    { id: 1, label: "Name", key: "name" },
    { id: 2, label: "Membership", key: "membership" },
    { id: 3, label: "Total Revenue Generated", key: "revenue" },
    { id: 4, label: "Status", key: "status" },
  ];
  const data = [
    {
      id: 1,
      name: "Myra Foster",
      profilePic: "/imgs/profile.png",
      membership: "Basic",
      revenue: "$1250.25",
      status: (
        <div className="rounded-full bg-success bg-opacity-20 text-success font-semibold text-center text-xs w-fit px-2">
          Active
        </div>
      ),
    },
    {
      id: 2,
      name: "Rock Apartments Limited",
      profilePic: "/imgs/profile.png",
      membership: "Single",
      revenue: "$1250.25",
      status: (
        <div className="rounded-full bg-success bg-opacity-20 text-success font-semibold text-center text-xs w-fit px-2">
          Active
        </div>
      ),
    },
    {
      id: 3,
      name: "Matilda Robertson",
      profilePic: "/imgs/profile.png",
      membership: "Basic",
      revenue: "$1250.25",
      status: (
        <div className="rounded-full bg-success bg-opacity-20 text-success font-semibold text-center text-xs w-fit px-2">
          Active
        </div>
      ),
    },
    {
      id: 4,
      name: "French Southern Terr",
      profilePic: "/imgs/profile.png",
      membership: "Elite",
      revenue: "$1250.25",
      status: (
        <div className="rounded-full bg-success bg-opacity-20 text-success font-semibold text-center text-xs w-fit px-2">
          Active
        </div>
      ),
    },
    {
      id: 5,
      name: "Martha Barnes",
      profilePic: "/imgs/profile.png",
      membership: "Platinum",
      revenue: "$1250.25",
      status: (
        <div className="rounded-full bg-success bg-opacity-20 text-success font-semibold text-center text-xs w-fit px-2">
          Active
        </div>
      ),
    },
    {
      id: 6,
      name: "Monaco",
      profilePic: "/imgs/profile.png",
      membership: "Elite",
      revenue: "$1250.25",
      status: (
        <div className="rounded-full bg-success bg-opacity-20 text-success font-semibold text-center text-xs w-fit px-2">
          Active
        </div>
      ),
    },
    {
      id: 7,
      name: "Minnie Hoffman",
      profilePic: "/imgs/profile.png",
      membership: "Platinum",
      revenue: "$1250.25",
      status: (
        <div className="rounded-full bg-success bg-opacity-20 text-success font-semibold text-center text-xs w-fit px-2">
          Active
        </div>
      ),
    },
    {
      id: 8,
      name: "Lawrence Walton",
      profilePic: "/imgs/profile.png",
      membership: "Basic",
      revenue: "$1250.25",
      status: (
        <div className="rounded-full bg-success bg-opacity-20 text-success font-semibold text-center text-xs w-fit px-2">
          Active
        </div>
      ),
    },
    {
      id: 9,
      name: "Mable Fernandez",
      profilePic: "/imgs/profile.png",
      membership: "Elite",
      revenue: "$1250.25",
      status: (
        <div className="rounded-full bg-success bg-opacity-20 text-success font-semibold text-center text-xs w-fit px-2">
          Active
        </div>
      ),
    },
    {
      id: 10,
      name: "Gregory Maldonado",
      profilePic: "/imgs/profile.png",
      membership: "Elite",
      revenue: "$1250.25",
      status: (
        <div className="rounded-full bg-success bg-opacity-20 text-success font-semibold text-center text-xs w-fit px-2">
          Active
        </div>
      ),
    },
  ];
  return (
    <div className="flex flex-col">
      <TableWithSort
        size="lg"
        headings={headings}
        data={data}
        redirectUrl="/users/propertyowners/propertyownerprofile"
      />
    </div>
  );
};

export default TransactionsTable;
