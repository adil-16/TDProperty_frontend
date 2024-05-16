import AirConditionerSvg from "@/components/Svgs/amenities/AirConditionerSvg";
import BalconyTerraceSvg from "@/components/Svgs/amenities/BalconyTerraceSvg";
import CCTVSvg from "@/components/Svgs/amenities/CCTVSvg";
import GymSvg from "@/components/Svgs/amenities/GymSvg";
import InternetSvg from "@/components/Svgs/amenities/InternetSvg";
import LobbySvg from "@/components/Svgs/amenities/LobbySvg";
import MaidsRoomSvg from "@/components/Svgs/amenities/MaidsRoomSvg";
import ParkingSpaceSvg from "@/components/Svgs/amenities/ParkingSpaceSvg";
import PlayAreaSvg from "@/components/Svgs/amenities/PlayAreaSvg";
import SecuritySvg from "@/components/Svgs/amenities/SecuritySvg";
import StaffSvg from "@/components/Svgs/amenities/StaffSvg";
import SwimmingPoolSvg from "@/components/Svgs/amenities/SwimmingPoolSvg";
import WasteSvg from "@/components/Svgs/amenities/WasteSvg";


const AmenitiesPage = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <div className="flex flex-col items-center justify-center gap-2 w-32 h-28 rounded-lg border border-primary bg-primary bg-opacity-10">
        <ParkingSpaceSvg />
        <div className="text-xs text-primary font-medium text-center">
          Parking Space
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 w-32 h-28 rounded-lg border border-primary bg-primary bg-opacity-10">
        <AirConditionerSvg />
        <div className="text-xs text-primary font-medium text-center">
          Centrally Air Conditioned
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 w-32 h-28 rounded-lg border border-primary bg-primary bg-opacity-10">
        <BalconyTerraceSvg />
        <div className="text-xs text-primary font-medium text-center">
          Balcony Terrace
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 w-32 h-28 rounded-lg border border-primary bg-primary bg-opacity-10">
        <SwimmingPoolSvg />
        <div className="text-xs text-primary font-medium text-center">
          Swimming Pool
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 w-32 h-28 rounded-lg border border-primary bg-primary bg-opacity-10">
        <InternetSvg />
        <div className="text-xs text-primary font-medium text-center">
          Internet
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 w-32 h-28 rounded-lg border border-primary bg-primary bg-opacity-10">
        <MaidsRoomSvg />
        <div className="text-xs text-primary font-medium text-center">
          Maids Room
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 w-32 h-28 rounded-lg border border-primary bg-primary bg-opacity-10">
        <PlayAreaSvg />
        <div className="text-xs text-primary font-medium text-center">
          Kids Play Area
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 w-32 h-28 rounded-lg border border-primary bg-primary bg-opacity-10">
        <CCTVSvg />
        <div className="text-xs text-primary font-medium text-center">
          CCTV Security
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 w-32 h-28 rounded-lg border border-primary bg-primary bg-opacity-10">
        <LobbySvg />
        <div className="text-xs text-primary font-medium text-center">
          Lobby in building
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 w-32 h-28 rounded-lg border border-primary bg-primary bg-opacity-10">
        <GymSvg />
        <div className="text-xs text-primary font-medium text-center">
          Gym/Health Club
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 w-32 h-28 rounded-lg border border-primary bg-primary bg-opacity-10">
        <WasteSvg />
        <div className="text-xs text-primary font-medium text-center">
          Waste Disposal
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 w-32 h-28 rounded-lg border border-primary bg-primary bg-opacity-10">
        <StaffSvg />
        <div className="text-xs text-primary font-medium text-center">
          Maintenance Staff
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 w-32 h-28 rounded-lg border border-primary bg-primary bg-opacity-10">
        <SecuritySvg />
        <div className="text-xs text-primary font-medium text-center">
          Security Staff
        </div>
      </div>
    </div>
  );
};

export default AmenitiesPage;
