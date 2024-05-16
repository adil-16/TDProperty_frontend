"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import Image from "next/image";
import DeactivateUserSvg from "../Svgs/DeactivateUserSvg";

const DeactivateUserModal = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Modal
      openModal={openModal}
      setOpenModal={setOpenModal}
      modalOpener={
        <div className="flex items-center gap-1 p-2 border-b border-[rgba(0,0,0,0.05)] cursor-pointer">
          <DeactivateUserSvg />
          <p className="font-medium text-xs">Deactivate User</p>
        </div>
      }
      modalContent={
        <div className="flex flex-col justify-center gap-5 items-center px-8 py-7">
          <Image src="/svgs/binred.svg" width={133} height={133} />
          <p className="font-bold text-lg text-black text-center">
            Are you sure you want to deactivate <br /> this user?
          </p>
          <div className="flex justify-between gap-3 font-semibold">
            <button
              className="border border-[rgba(0,0,0,0.2)] text-[#7E8299] py-3 px-5 rounded-md w-36"
              onClick={() => setOpenModal(false)}
            >
              Cancel
            </button>
            <button className="bg-bloodred text-white py-3 px-5 rounded-md w-36">
              Deactivate
            </button>
          </div>
        </div>
      }
    />
  );
};

export default DeactivateUserModal;
