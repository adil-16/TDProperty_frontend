"use client";


import Modal from "./Modal";
import FindPeopleSvg from "../Svgs/FindPeopleSvg";
import CrossSvg from "../Svgs/CrossSvg";
import { useState } from "react";
import Image from "next/image";

const FindPeopleModal = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Modal
      modalOpener={
        <button className="flex flex-col gap-1 items-center justify-center w-[110px] py-2">
          <FindPeopleSvg />
          <p className="text-xs text-[#9DB2CE]">Find People</p>
        </button>
      }
      modalContent={
        <div className="flex flex-col gap-5 w-[570px] bg-white p-5 rounded-lg">
          <div className="flex justify-between items-center">
            <div className="text-themetext font-semibold text-lg">
              Follow Poeple
            </div>
            <button
              onClick={() => setOpenModal(false)}
              className="p-1 rounded shadow"
            >
              <Image src="/svgs/cross.svg" alt="cross" width={20} height={20} />
            </button>
          </div>
          <div className="flex gap-4 rounded-full w-full shadow-[0px_1.999px_7.994px_0px_rgba(153,153,153,0.20)] p-3">
            <Image
              src="/svgs/searchicon.svg"
              alt="search"
              width={20}
              height={20}
            />
            <input
              type="search"
              name="findpeoplesearch"
              id="findpeoplesearch"
              className="outline-none focus:outline-none w-full"
              placeholder="Search"
            />
          </div>
          <div className="flex flex-col gap-5 w-full">
            <div className="flex justify-between w-full">
              <div className="flex gap-3 items-center">
                <Image
                  src="/imgs/profile-3.png"
                  alt="profile"
                  width={40}
                  height={40}
                />
                <p className="font-semibold">Bea_Mine</p>
              </div>
              <button className="bg-primary text-white px-5 py-2 rounded-full">
                Follow
              </button>
            </div>
            <div className="flex justify-between w-full">
              <div className="flex gap-3 items-center">
                <Image
                  src="/imgs/profile-3.png"
                  alt="profile"
                  width={40}
                  height={40}
                />
                <p className="font-semibold">Bea_Mine</p>
              </div>
              <button className="bg-primary text-white px-5 py-2 rounded-full">
                Follow
              </button>
            </div>
            <div className="flex justify-between w-full">
              <div className="flex gap-3 items-center">
                <Image
                  src="/imgs/profile-3.png"
                  alt="profile"
                  width={40}
                  height={40}
                />
                <p className="font-semibold">Bea_Mine</p>
              </div>
              <button className="bg-primary text-white px-5 py-2 rounded-full">
                Follow
              </button>
            </div>
            <div className="flex justify-between w-full">
              <div className="flex gap-3 items-center">
                <Image
                  src="/imgs/profile-3.png"
                  alt="profile"
                  width={40}
                  height={40}
                />
                <p className="font-semibold">Bea_Mine</p>
              </div>
              <button className="bg-primary text-white px-5 py-2 rounded-full">
                Follow
              </button>
            </div>
            <div className="flex justify-between w-full">
              <div className="flex gap-3 items-center">
                <Image
                  src="/imgs/profile-3.png"
                  alt="profile"
                  width={40}
                  height={40}
                />
                <p className="font-semibold">Bea_Mine</p>
              </div>
              <button className="border border-primary font-medium px-5 py-2 rounded-full">
                Following
              </button>
            </div>
            <div className="flex justify-between w-full">
              <div className="flex gap-3 items-center">
                <Image
                  src="/imgs/profile-3.png"
                  alt="profile"
                  width={40}
                  height={40}
                />
                <p className="font-semibold">Bea_Mine</p>
              </div>
              <button className="bg-primary text-white px-5 py-2 rounded-full">
                Follow
              </button>
            </div>
            <div className="flex justify-between w-full">
              <div className="flex gap-3 items-center">
                <Image
                  src="/imgs/profile-3.png"
                  alt="profile"
                  width={40}
                  height={40}
                />
                <p className="font-semibold">Bea_Mine</p>
              </div>
              <button className="bg-primary text-white px-5 py-2 rounded-full">
                Follow
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

export default FindPeopleModal;
