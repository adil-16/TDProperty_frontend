"use client";

import Image from "next/image";
import Modal from "./Modal";
import { useState } from "react";
import AddEmployeeRoleDropdown from "../Dropdowns/AddEmployeeRoleDropdown";

const AddEmployeeModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [role, setRole] = useState("Admin");
  const roles = ["Admin", "Property Analyst", "Property Manager"];
  return (
    <Modal
      modalOpener={
        <button className="w-[190px] rounded-full border border-secondary px-7 py-3 text-sm font-semibold text-secondary">
          Add Employee
        </button>
      }
      modalContent={
        <div className="flex w-[450px] flex-col rounded-lg bg-white">
          <div className="flex justify-between border-b border-[rgba(0,0,0,0.1)] px-5 py-4">
            <h1 className="font-semibold">Add Employee</h1>
            <button
              className="rounded-md p-[5px] shadow"
              onClick={() => setShowModal(false)}
            >
              <Image
                src="/svgs/cross.svg"
                width={18}
                height={18}
                alt="cancel"
              />
            </button>
          </div>
          <div className="flex flex-col gap-5 px-6 py-7">
            <div className="flex flex-col gap-2">
              <p className="px-3 text-sm font-medium">Role Name</p>
              <AddEmployeeRoleDropdown
                roles={roles}
                selectedRole={role}
                setSelectedRole={setRole}
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="px-3 text-sm font-medium">Email</p>
              <input
                type="email"
                name="roleemail"
                id="roleemail"
                className="flex w-full items-center rounded-full border border-[rgba(0,0,0,0.1)] px-5 py-2 text-left text-sm outline-none focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="px-3 text-sm font-medium">Phone Number</p>
              <input
                type="email"
                name="phonenumber"
                id="phonenumber"
                className="flex w-full items-center rounded-full border border-[rgba(0,0,0,0.1)] px-5 py-2 text-left text-sm outline-none focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="px-3 text-sm font-medium">Whatsapp Number</p>
              <input
                type="email"
                name="whatsappnumber"
                id="whatsappnumber"
                className="flex w-full items-center rounded-full border border-[rgba(0,0,0,0.1)] px-5 py-2 text-left text-sm outline-none focus:outline-none"
              />
            </div>
            <div className="flex items-center justify-between gap-4">
              <button
                className="w-full rounded-full border border-darkgray py-3 text-sm font-bold text-darkgray"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="w-full rounded-full bg-primary py-3 text-sm font-bold text-white"
                onClick={() => setShowModal(false)}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      }
      openModal={showModal}
      setOpenModal={setShowModal}
    />
  );
};

export default AddEmployeeModal;
