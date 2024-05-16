"use client";


import TableWithSort from "./TableWithSort";
import ActionDropdown from "../Dropdowns/ActionDropdown";

const PropertyBrokerUsersTable = () => {
  const headings = [
    { id: 1, label: "Name", key: "name" },
    { id: 2, label: "Clients Served", key: "clientsServed" },
    { id: 3, label: "Email", key: "email" },
    { id: 4, label: "Contact", key: "contact" },
    { id: 5, label: "Status", key: "status" },
    { id: 6, label: "Actions", key: "actions" },
  ];
  const data = [
    {
      id: 1,
      name: "Myra Foster",
      profilePic: "/imgs/profile.png",
      clientsServed: 4,
      email: "dummy@gmail.com",
      contact: "03332225555",
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
      clientsServed: 15,
      email: "dummy@gmail.com",
      contact: "03332225555",
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
      clientsServed: 4,
      email: "dummy@gmail.com",
      contact: "03332225555",
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
      clientsServed: 8,
      email: "dummy@gmail.com",
      contact: "03332225555",
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
      clientsServed: 9,
      email: "dummy@gmail.com",
      contact: "03332225555",
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
      clientsServed: 8,
      email: "dummy@gmail.com",
      contact: "03332225555",
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
      clientsServed: 9,
      email: "dummy@gmail.com",
      contact: "03332225555",
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
      clientsServed: 4,
      email: "dummy@gmail.com",
      contact: "03332225555",
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
      clientsServed: 8,
      email: "dummy@gmail.com",
      contact: "03332225555",
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
      clientsServed: 8,
      email: "dummy@gmail.com",
      contact: "03332225555",
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
        redirectUrl="/admin/users/propertybrokers/propertybrokerprofile"
      />
    </div>
  );
};

export default PropertyBrokerUsersTable;
