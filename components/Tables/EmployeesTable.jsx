"use client";


import TableWithSort from "./TableWithSort";
import ActionDropdown from "../Dropdowns/ActionDropdown";
import { useParams } from "next/navigation";

const EmployeesTable = () => {
  const dashboard = useParams().dashboard;
  const headings = [
    { id: 1, label: "Name", key: "name" },
    { id: 2, label: "Role", key: "role" },
    { id: 3, label: "Sold", key: "sold" },
    { id: 4, label: "Rented For", key: "rentedFor" },
    { id: 5, label: "Email", key: "email" },
    { id: 5, label: "Status", key: "status" },
    { id: 5, label: "Actions", key: "actions" },
  ];
  const data = [
    {
      id: 1,
      name: "Myra Foster",
      profilePic: "/imgs/profile.png",
      role: "Property Analyst",
      rentedFor: 4,
      email: "dummy@gmail.com",
      sold: 12,
      status: (
        <div className="w-fit rounded-full bg-success bg-opacity-20 px-2 text-center text-xs font-semibold text-success">
          Active
        </div>
      ),
      actions: <ActionDropdown />,
    },
    {
      id: 2,
      name: "Rock Apartments Limited",
      profilePic: "/imgs/profile.png",
      role: "Property Analyst",
      rentedFor: 4,
      email: "dummy@gmail.com",
      sold: 12,
      status: (
        <div className="w-fit rounded-full bg-success bg-opacity-20 px-2 text-center text-xs font-semibold text-success">
          Active
        </div>
      ),
      actions: <ActionDropdown />,
    },
    {
      id: 3,
      name: "Matilda Robertson",
      profilePic: "/imgs/profile.png",
      role: "Property Analyst",
      rentedFor: 4,
      email: "dummy@gmail.com",
      sold: 12,
      status: (
        <div className="w-fit rounded-full bg-success bg-opacity-20 px-2 text-center text-xs font-semibold text-success">
          Active
        </div>
      ),
      actions: <ActionDropdown />,
    },
    {
      id: 4,
      name: "French Southern Terr",
      profilePic: "/imgs/profile.png",
      role: "Property Analyst",
      rentedFor: 4,
      email: "dummy@gmail.com",
      sold: 12,
      status: (
        <div className="w-fit rounded-full bg-success bg-opacity-20 px-2 text-center text-xs font-semibold text-success">
          Active
        </div>
      ),
      actions: <ActionDropdown />,
    },
    {
      id: 5,
      name: "Martha Barnes",
      profilePic: "/imgs/profile.png",
      role: "Property Analyst",
      rentedFor: 4,
      email: "dummy@gmail.com",
      sold: 12,
      status: (
        <div className="w-fit rounded-full bg-success bg-opacity-20 px-2 text-center text-xs font-semibold text-success">
          Active
        </div>
      ),
      actions: <ActionDropdown />,
    },
    {
      id: 6,
      name: "Monaco",
      profilePic: "/imgs/profile.png",
      role: "Property Analyst",
      rentedFor: 4,
      email: "dummy@gmail.com",
      sold: 12,
      status: (
        <div className="w-fit rounded-full bg-success bg-opacity-20 px-2 text-center text-xs font-semibold text-success">
          Active
        </div>
      ),
      actions: <ActionDropdown />,
    },
    {
      id: 7,
      name: "Minnie Hoffman",
      profilePic: "/imgs/profile.png",
      role: "Property Analyst",
      rentedFor: 4,
      email: "dummy@gmail.com",
      sold: 12,
      status: (
        <div className="w-fit rounded-full bg-success bg-opacity-20 px-2 text-center text-xs font-semibold text-success">
          Active
        </div>
      ),
      actions: <ActionDropdown />,
    },
    {
      id: 8,
      name: "Lawrence Walton",
      profilePic: "/imgs/profile.png",
      role: "Property Analyst",
      rentedFor: 4,
      email: "dummy@gmail.com",
      sold: 12,
      status: (
        <div className="w-fit rounded-full bg-success bg-opacity-20 px-2 text-center text-xs font-semibold text-success">
          Active
        </div>
      ),
      actions: <ActionDropdown />,
    },
    {
      id: 9,
      name: "Mable Fernandez",
      profilePic: "/imgs/profile.png",
      role: "Property Analyst",
      rentedFor: 4,
      email: "dummy@gmail.com",
      sold: 12,
      status: (
        <div className="w-fit rounded-full bg-success bg-opacity-20 px-2 text-center text-xs font-semibold text-success">
          Active
        </div>
      ),
      actions: <ActionDropdown />,
    },
    {
      id: 10,
      name: "Gregory Maldonado",
      profilePic: "/imgs/profile.png",
      role: "Property Analyst",
      rentedFor: 4,
      email: "dummy@gmail.com",
      sold: 12,
      status: (
        <div className="w-fit rounded-full bg-success bg-opacity-20 px-2 text-center text-xs font-semibold text-success">
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
        redirectUrl={`/dashboard/${dashboard}/employees/profile`}
      />
    </div>
  );
};

export default EmployeesTable;
