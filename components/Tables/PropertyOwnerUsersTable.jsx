"use client";


import TableWithSort from "./TableWithSort";
import ThreeDotSvg from "../Svgs/ThreeDotSvg";
import RecordButton from "../Dropdowns/RecordDropdown";
import SortByButton from "../Dropdowns/UsersSortByDropdown";
import SearchIconSvg from "../Svgs/SearchIconSvg";
import ActionDropdown from "../Dropdowns/ActionDropdown";
import TablePagination from "./TablePagination";

const PropertyOwnerUsersTable = () => {
  const headings = [
    { id: 1, label: "Name", key: "name" },
    { id: 2, label: "Properties Bought", key: "propertiesBought" },
    { id: 3, label: "Properties Sold", key: "propertiesSold" },
    { id: 4, label: "Status", key: "status" },
    { id: 5, label: "Actions", key: "actions" },
  ];
  const data = [
    {
      id: 1,
      name: "Myra Foster",
      profilePic: "/imgs/profile.png",
      propertiesBought: 4,
      propertiesSold: 12,
      status: (
        <div className="rounded-full bg-success bg-opacity-20 text-success font-semibold text-center text-xs w-fit px-2">
          Active
        </div>
      ),
      actions: <ActionDropdown />,
    },
    {
      id: 2,
      name: "Rock Apartments Limited",
      profilePic: "/imgs/profile.png",
      propertiesBought: 15,
      propertiesSold: 12,
      status: (
        <div className="rounded-full bg-success bg-opacity-20 text-success font-semibold text-center text-xs w-fit px-2">
          Active
        </div>
      ),
      actions: <ActionDropdown />,
    },
    {
      id: 3,
      name: "Matilda Robertson",
      profilePic: "/imgs/profile.png",
      propertiesBought: 4,
      propertiesSold: 12,
      status: (
        <div className="rounded-full bg-success bg-opacity-20 text-success font-semibold text-center text-xs w-fit px-2">
          Active
        </div>
      ),
      actions: <ActionDropdown />,
    },
    {
      id: 4,
      name: "French Southern Terr",
      profilePic: "/imgs/profile.png",
      propertiesBought: 8,
      propertiesSold: 12,
      status: (
        <div className="rounded-full bg-success bg-opacity-20 text-success font-semibold text-center text-xs w-fit px-2">
          Active
        </div>
      ),
      actions: <ActionDropdown />,
    },
    {
      id: 5,
      name: "Martha Barnes",
      profilePic: "/imgs/profile.png",
      propertiesBought: 9,
      propertiesSold: 12,
      status: (
        <div className="rounded-full bg-success bg-opacity-20 text-success font-semibold text-center text-xs w-fit px-2">
          Active
        </div>
      ),
      actions: <ActionDropdown />,
    },
    {
      id: 6,
      name: "Monaco",
      profilePic: "/imgs/profile.png",
      propertiesBought: 8,
      propertiesSold: 12,
      status: (
        <div className="rounded-full bg-success bg-opacity-20 text-success font-semibold text-center text-xs w-fit px-2">
          Active
        </div>
      ),
      actions: <ActionDropdown />,
    },
    {
      id: 7,
      name: "Minnie Hoffman",
      profilePic: "/imgs/profile.png",
      propertiesBought: 9,
      propertiesSold: 12,
      status: (
        <div className="rounded-full bg-success bg-opacity-20 text-success font-semibold text-center text-xs w-fit px-2">
          Active
        </div>
      ),
      actions: <ActionDropdown />,
    },
    {
      id: 8,
      name: "Lawrence Walton",
      profilePic: "/imgs/profile.png",
      propertiesBought: 4,
      propertiesSold: 12,
      status: (
        <div className="rounded-full bg-success bg-opacity-20 text-success font-semibold text-center text-xs w-fit px-2">
          Active
        </div>
      ),
      actions: <ActionDropdown />,
    },
    {
      id: 9,
      name: "Mable Fernandez",
      profilePic: "/imgs/profile.png",
      propertiesBought: 8,
      propertiesSold: 12,
      status: (
        <div className="rounded-full bg-success bg-opacity-20 text-success font-semibold text-center text-xs w-fit px-2">
          Active
        </div>
      ),
      actions: <ActionDropdown />,
    },
    {
      id: 10,
      name: "Gregory Maldonado",
      profilePic: "/imgs/profile.png",
      propertiesBought: 8,
      propertiesSold: 12,
      status: (
        <div className="rounded-full bg-success bg-opacity-20 text-success font-semibold text-center text-xs w-fit px-2">
          Active
        </div>
      ),
      actions: <ActionDropdown />,
    },
  ];
  return (
    <div className="flex flex-col">
      <TableWithSort
        size="lg"
        headings={headings}
        data={data}
        redirectUrl="/admin/users/propertyowners/propertyownerprofile"
      />
      <div className="w-full flex justify-center mt-2">
        <TablePagination />
      </div>
    </div>
  );
};

export default PropertyOwnerUsersTable;
