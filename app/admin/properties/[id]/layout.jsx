"use client";
import BackButton from "@/components/Buttons/BackButton";
import ContactCard from "@/components/Cards/ContactCard";
import DetailCard from "@/components/Cards/DetailCard";
import FindDistanceModal from "@/components/Modals/FindDistanceModal";
import PropertyNavbar from "@/components/Navbars/PropertyNavbar";
import BackArrowSvg from "@/components/Svgs/BackArrowSvg";
import BookmarkSvg from "@/components/Svgs/BookmarkSvg";
import CallSvg from "@/components/Svgs/CallSvg";
import FindLocationSvg from "@/components/Svgs/FindLocationSvg";
import ThreeDotSvg from "@/components/Svgs/ThreeDotSvg";
import UploadIconSvg from "@/components/Svgs/UploadIconSvg";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";


const PropertyLayout = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (e) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target) && isDropdownOpen
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", closeDropdown);
    return () => {
      window.removeEventListener("click", closeDropdown);
    };
  }, []);
  const { id } = useParams();
  return (
    <div className="flex flex-col px-8 py-9">
      <div className="flex justify-between">
        {/* back button */}
        <BackButton />
        <div className="flex gap-3">
          <FindDistanceModal />
          <button className="rounded-full p-3 bg-secondary text-white h-11 w-11 flex items-center justify-center">
            <UploadIconSvg />
          </button>
          <button className="rounded-full p-3 h-11 w-11 flex items-center justify-center border border-[rgba(0,0,0,0.20)]">
            <BookmarkSvg />
          </button>
          <button className="rounded-full p-3 h-11 w-11 flex items-center justify-center border border-[rgba(0,0,0,0.20)]">
            <CallSvg />
          </button>
          <button className="h-11 bg-[#fff5e9] flex items-center justify-center gap-2 px-4 py-2 border border-[#ffaa45] rounded-full">
            <Image src="/imgs/profile-2.png" width={34} height={34} alt="svg" />
            <span>John David</span>
          </button>


          <button
        onClick={toggleDropdown}
        className="hover:bg-[rgba(0,0,0,0.1)] w-10 flex items-center justify-center rounded-full"
      >
        <ThreeDotSvg />
      </button>

      {isDropdownOpen && (
        <div 
        ref={dropdownRef} 
        className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Edit
            </a>
          </div>
        </div>
      )}
        </div>
      </div>
      <h1 className="text-3xl font-bold mt-3">Boston Family Villa</h1>
      <div className="flex gap-4 mt-3">
        <Image src="/imgs/prop-5.png" width={500} height={296} alt="svg" />
        <div className="grid grid-cols-2 gap-4">
          <Image
            className="w-full h-full"
            src="/imgs/prop-4.png"
            width={262}
            height={140}
            alt="svg"
          />
          <Image
            className="w-full h-full"
            src="/imgs/prop-3.png"
            width={262}
            height={140}
            alt="svg"
          />
          <Image
            className="w-full h-full"
            src="/imgs/prop-2.png"
            width={262}
            height={140}
            alt="png"
          />
          <Image
            className="w-full h-full"
            src="/imgs/prop-1.png"
            width={262}
            height={140}
            alt="png"
          />
        </div>
      </div>
      <div className="flex w-full mt-10">
        <div className="w-[70%]">
          <PropertyNavbar id={id} redirectUrl="properties" />
          <div className="mt-10">{children}</div>
        </div>
        <div className="w-[30%] flex flex-col gap-5">
          <DetailCard
            numberOfRooms={5}
            size="196 sq.ft (14 x 14)"
            propertyType="Villa"
            rentMonthly="$ 5,000.00"
          />
          <ContactCard />
        </div>
      </div>
    </div>
  );
};

export default PropertyLayout;
