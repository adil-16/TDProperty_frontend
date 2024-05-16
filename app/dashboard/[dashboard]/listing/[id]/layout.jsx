"use client";
import BackButton from "@/components/Buttons/BackButton";
import ContactCard from "@/components/Cards/ContactCard";
import DetailCard from "@/components/Cards/DetailCard";
import FindDistanceModal from "@/components/Modals/FindDistanceModal";
import PropertyNavbar from "@/components/Navbars/PropertyNavbar";
import BookmarkSvg from "@/components/Svgs/BookmarkSvg";
import CallSvg from "@/components/Svgs/CallSvg";
import ThreeDotSvg from "@/components/Svgs/ThreeDotSvg";
import UploadIconSvg from "@/components/Svgs/UploadIconSvg";
import Image from "next/image";
import { useParams } from "next/navigation";


const PropertyLayout = ({ params, children }) => {
  const { id } = useParams();
  const dashboard = params.dashboard;
  return (
    <div className="flex flex-col item px-32 xl:py-10">
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
          <button className="hover:bg-[rgba(0,0,0,0.1)] w-10 flex items-center justify-center rounded-full">
            <ThreeDotSvg />
          </button>
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
          <PropertyNavbar id={id} redirectUrl={`${dashboard}/listing`} />
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
