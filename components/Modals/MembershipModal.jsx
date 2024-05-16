"use client";
import React from "react";
import Modal from "./Modal";
import Image from "next/image";
import ToggleButton from "../Buttons/ToggleButton";

const MembershipModal = () => {
  const [openModal, setOpenModal] = React.useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <Modal
      modalOpener={
        <button 
          className="bg-primary font-semibold px-16 py-2 rounded-full mb-3"
          onClick={() => setOpenModal(true)}
        >
          Subscribe
        </button>
      }
      modalContent={
        <div className="flex flex-col w-[540px]">
          <div className="flex justify-between px-5 py-3 border-b-2 border-[rgba(0,0,0,0.1)]">
            <div className="text-lg font-medium">Subscribe Membership</div>
            <div
              className="flex items-center justify-center p-1 shadow rounded cursor-pointer"
              onClick={closeModal}
            >
              <Image
                src="/svgs/cross.svg"
                width={18}
                height={18}
                alt="cancel"
              />
            </div>
          </div>
          <div className="py-7 px-5">
            <div className="text-darkgray">
              Provide application data for this form
            </div>
            <div className="mt-5 flex flex-col text-darkgray gap-3">
              <form className="flex flex-col max-w-[88%]">
                <label htmlFor="cardnumber" className="text-sm">
                  Card Number
                </label>
                <div className="flex justify-between py-2 px-3 border-2 border-[#D8D6DE] rounded-md mt-1">
                  <input
                    className="outline-none focus:outline-none w-full text-sm"
                    type="number"
                    name="card"
                    id="card"
                    placeholder="5637 8172 1290"
                  />
                </div>
                <div className="flex gap-5 mt-5">
                  <div className="flex flex-col">
                    <label htmlFor="cardholdername" className="text-sm">
                      Name on Card
                    </label>
                    <div className="flex justify-between py-2 px-3 border-2 border-[#D8D6DE] rounded-md mt-1 w-full">
                      <input
                        className="outline-none focus:outline-none text-sm"
                        type="text"
                        name="card"
                        id="card"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="cardexpiry" className="text-sm">
                      Expiration Date
                    </label>
                    <div className="flex justify-between py-2 px-3 border-2 border-[#D8D6DE] rounded-md mt-1">
                      <input
                        className="outline-none focus:outline-none w-24 text-sm"
                        type="text"
                        name="cardexpiry"
                        id="cardexpiry"
                        placeholder="MM/YY"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="cvv" className="text-sm">
                      CVV
                    </label>
                    <div className="flex justify-between py-2 px-3 border-2 border-[#D8D6DE] rounded-md mt-1">
                      <input
                        className="outline-none focus:outline-none w-16 text-sm"
                        type="text"
                        name="cardcvv"
                        id="cardcvv"
                        placeholder="CVV"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex mt-5 gap-3">
                  <ToggleButton />
                  <div className="text-themetext font-bold text-sm items-center">
                    Save card for future billing?
                  </div>
                </div>
              </form>
            </div>
          </div>
     
          <div className="flex justify-end gap-3 p-5">
            <button
              className="bg-white text-primary font-semibold px-6 py-2 rounded-full border-2 border-primary"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              className="bg-primary text-white font-semibold px-6 py-2 rounded-full"
              onClick={closeModal}
            >
              Assign
            </button>
          </div>
        </div>
      }
      openModal={openModal}
      setOpenModal={setOpenModal}
    />
  );
};

export default MembershipModal;
