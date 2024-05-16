"use client";


import TableWithSort from "./TableWithSort";
import ActionDropdown from "../Dropdowns/ActionDropdown";

const CompanyUsersTable = () => {
  const headings = [
    { id: 1, label: "Name", key: "name" },
    { id: 2, label: "Current Listings", key: "currentListings" },
    { id: 3, label: "Properties Sold", key: "propertiesSold" },
    { id: 4, label: "Status", key: "status" },
    { id: 5, label: "Actions", key: "actions" },
  ];
  const data = [
    {
      id: 1,
      name: "Myra Foster",
      profilePic: "/imgs/profile.png",
      currentListings: 4,
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
      currentListings: 15,
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
      currentListings: 4,
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
      currentListings: 8,
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
      currentListings: 9,
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
      currentListings: 8,
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
      currentListings: 9,
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
      currentListings: 4,
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
      currentListings: 8,
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
      currentListings: 8,
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
        redirectUrl="/admin/users/companies/companyprofile"
      />
    </div>
  );
};

export default CompanyUsersTable;
