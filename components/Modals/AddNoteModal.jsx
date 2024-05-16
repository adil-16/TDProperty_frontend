"use client";
import { useState } from "react";
import Modal from "./Modal";
import Image from "next/image";
import DateTimePicker from "./Component/DatePicker";

const AddNoteModal = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Modal
      modalOpener={
        <button className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-primary p-4 text-4xl font-bold">
          <Image src="/svgs/addnote.svg" width={18} height={18} alt="avg" />
        </button>
      }
      modalContent={
        <div className="flex flex-col rounded-md">
          <div className="flex justify-between border-b border-[rgba(0,0,0,0.1)] px-5 py-4">
            <h1 className="font-semibold">Add Notes</h1>
            <button
              className="rounded-md p-[5px] shadow"
              onClick={() => setOpenModal(false)}
            >
              <Image
                src="/svgs/cross.svg"
                width={18}
                height={18}
                alt="cancel"
              />
            </button>
          </div>
          <div className="flex flex-col px-7 py-5">
           <div className="flex flex-row mb-2">
           <div className="flex flex-col mr-4 mt-2">
              <p className="px-2 text-sm font-medium">Title</p>
              <input
                type="text"
                name="notetitle"
                id="notetitle"
                placeholder="Note title"
                className="flex w-full items-center rounded-full border border-[rgba(0,0,0,0.1)] px-4 py-2 text-left text-sm outline-none focus:outline-none"
              />
            </div>
            <div className="flex flex-col mr-4">
              <p className="px-2 text-sm font-medium">Date And Time</p>
              < DateTimePicker />
            </div>
            
           </div>
            <div className="flex flex-col gap-2 mb-2">
              <p className="px-2 text-sm font-medium">Description</p>
              <textarea
                name="notedesc"
                id="notedesc"
                cols="30"
                rows="5"
                placeholder="Note Description"
                className="flex w-full items-center rounded-xl border border-[rgba(0,0,0,0.1)] px-4 py-2 text-left text-sm outline-none focus:outline-none"
              ></textarea>
            </div>
            <div className="flex flex-col gap-2 mb-2">
              <p className="px-2 text-sm font-medium">Client</p>
              <input
                type="text"
                name="noteclient"
                id="noteclient"
                placeholder="John Doe"
                className="flex w-full items-center rounded-full border border-[rgba(0,0,0,0.1)] px-4 py-2 text-left text-sm outline-none focus:outline-none"
              />
            </div>
            
            

            <div className="flex items-center justify-between gap-4">
              <button
                className="w-full rounded-full border border-darkgray py-3 text-sm font-bold text-darkgray"
                onClick={() => setOpenModal(false)}
              >
                Cancel
              </button>
              <button
                className="w-full rounded-full bg-primary py-3 text-sm font-bold text-white"
                onClick={() => setOpenModal(false)}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      }
      openModal={openModal}
      setOpenModal={setOpenModal}
    />
  );
};

export default AddNoteModal;
