"use client";

import BackButton from "@/components/Buttons/BackButton";
import Checkbox from "@/components/Checkbox/Checkbox";
import PermissionDropdown from "@/components/Dropdowns/PermissionDropdown";
import CreateRoleModal from "@/components/Modals/CreateRoleModal";
import DeleteUserSvg from "@/components/Svgs/DeleteUserSvg";
import EditPenSvg from "@/components/Svgs/EditPenSvg";
import React, { useState } from "react";

const CreateRolePage = () => {
  const [permissions, setPermissions] = useState([]);
  const [selectedRole, setSelectedRole] = useState("Property");
  const [view, setView] = useState(true);
  const [edit, setEdit] = useState(true);
  const [add, setAdd] = useState(true);
  const roles = ["Property", "User"];
  return (
    <div className="flex flex-col w-full px-20 py-14">
      <div className="flex gap-3 items-center">
        <BackButton />
        <div className="text-3xl font-semibold">Create Role</div>
      </div>
      <div className="flex">
        <div className="w-1/2 border-r border-[rgba(0,0,0,0.1)] flex flex-col">
          <div className="w-3/4 mt-10 flex flex-col gap-7">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="rolename"
                className="w-full px-3 font-medium text-[rgba(0,0,0,0.8)]"
              >
                Role Name
              </label>
              <input
                type="text"
                name="rolename"
                id="rolename"
                className="px-5 py-3 text-sm rounded-full border border-[rgba(0,0,0,0.1)]"
                placeholder="Property Analyst"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label
                htmlFor="permission"
                className="w-full px-3 font-medium text-[rgba(0,0,0,0.8)]"
              >
                Permission
              </label>
              <PermissionDropdown
                roles={roles}
                selectedRole={selectedRole}
                setSelectedRole={setSelectedRole}
              />
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="font-bold text-secondary">{selectedRole}</h1>
              <div className="flex justify-between w-full">
                <div className="flex gap-2 items-center">
                  <Checkbox checked={view} setChecked={setView} />
                  <p className="text-themetext font-semibold">View</p>
                </div>
                <div className="flex gap-2 items-center">
                  <Checkbox checked={edit} setChecked={setEdit} />
                  <p className="text-themetext font-semibold">Edit</p>
                </div>
                <div className="flex gap-2 items-center">
                  <Checkbox checked={add} setChecked={setAdd} />
                  <p className="text-themetext font-semibold">Add</p>
                </div>
              </div>
            </div>
            <button
              className="w-[150px] bg-secondary text-white font-semibold text-sm rounded-full py-3 px-5"
              onClick={() =>
                setPermissions([
                  ...permissions,
                  { role: selectedRole, view: view, edit: edit, add: add },
                ])
              }
            >
              + Add
            </button>
          </div>
        </div>
        <div
          className={`w-1/2 flex justify-center ${
            permissions.length == 0 && "items-center"
          }`}
        >
          {permissions.length > 0 ? (
            <div className="flex flex-col w-full mx-20">
              {permissions.map((permission, index) => (
                <div
                  className="flex flex-col w-full items-center py-7 border-b border-[rgba(0,0,0,0.1)]"
                  key={index}
                >
                  <div className="flex w-full justify-between items-center">
                    <p className="font-bold">{permission.role}</p>
                    <div className="flex gap-3">
                      <EditPenSvg width={14} height={14} />
                      <span className="text-[#DC3545]">
                        <DeleteUserSvg width={14} height={14} />
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-y-4 mt-5 w-full">
                    {permission.view && (
                      <div className="flex gap-2 items-center w-1/2">
                        <Checkbox checked={true} disabled />
                        <p className="text-themetext font-semibold">View</p>
                      </div>
                    )}
                    {permission.edit && (
                      <div className="flex gap-2 items-center w-1/2">
                        <Checkbox checked={true} disabled />
                        <p className="text-themetext font-semibold">Edit</p>
                      </div>
                    )}
                    {permission.add && (
                      <div className="flex gap-2 items-center w-1/2">
                        <Checkbox checked={true} disabled />
                        <p className="text-themetext font-semibold">Add</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="font-bold text-themetext text-center text-lg leading-[21px]">
              No Roles Permissions <br /> added Yet
            </p>
          )}
        </div>
      </div>
      <div className="flex justify-end items-center gap-2 mt-10">
        <button className="w-[180px] text-darkgray border border-darkgray font-semibold py-3 text-sm rounded-full">
          Discard
        </button>
        <CreateRoleModal />
      </div>
    </div>
  );
};

export default CreateRolePage;
