"use client";

import { useState } from "react";
import Modal from "./Modal";
import Image from "next/image";

const CreateRoleModal = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Modal
      modalOpener={
        <button className="w-[180px] font-semibold bg-primary py-3 text-sm rounded-full">
          Create Role
        </button>
      }
      modalContent={
        <div className="flex flex-col gap-5 items-center py-8 w-[488px]">
          <Image
            src="/svgs/createrole.svg"
            width={133}
            height={133}
            alt="svgf"
          />
          <p className="text-xl font-medium text-center">
            Are you sure to create <br /> this Role?
          </p>
          <div className="flex gap-2">
            <button
              className="w-[180px] text-darkgray border border-darkgray font-semibold text-sm rounded-full py-3 px-5"
              onClick={() => setOpenModal(false)}
            >
              Cancel
            </button>
            <button className="w-[180px] bg-primary font-semibold text-sm rounded-full py-3 px-5">
              Create Role
            </button>
          </div>
        </div>
      }
      openModal={openModal}
      setOpenModal={setOpenModal}
    />
  );
};

export default CreateRoleModal;
