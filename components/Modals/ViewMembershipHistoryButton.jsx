"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import Image from "next/image";

const ViewMembershipHistoryButton = () => {
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  return (
    <Modal
      modalOpener={
        <button className="rounded-full font-semibold px-6 py-2 border border-[rgba(0,0,0,0.2)] hover:border-[rgba(0,0,0,0.5)] w-full text-center">
          View History
        </button>
      }
      modalContent={
        <div className="flex flex-col px-5 py-4 min-w-[700px] min-h-[500px]">
          <div className="flex justify-between">
            <p className="text-themetext font-semibold">Membership History</p>
            <button
              onClick={() => setShowHistoryModal(false)}
              className="h-8 w-8 shadow-lg flex items-center justify-center"
            >
              <Image src="/svgs/cross.svg" width={20} height={20} />
            </button>
          </div>
          <div className="flex bg-[url('/svgs/graylinehistory.svg')] bg-no-repeat h-72">
            dsadasd
          </div>
        </div>
      }
      openModal={showHistoryModal}
      setOpenModal={setShowHistoryModal}
    />
  );
};

export default ViewMembershipHistoryButton;
