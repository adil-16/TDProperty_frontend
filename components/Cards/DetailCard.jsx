import Image from "next/image";


const DetailCard = ({ numberOfRooms, size, propertyType, rentMonthly }) => {
  return (
    <div>
      <h2 className="font-bold text-xl">Details</h2>
      <div className="flex flex-col gap-4 mt-2">
        <div className="h-[4.25rem] px-7 py-3 flex items-center gap-2 border border-[rgba(0,0,0,0.10)] rounded-full">
          <Image src="/svgs/livingrooms.svg" width={25} height={25} alt="svg" />
          <div className="flex flex-col text-sm">
            <span className="text-darkgray">No. of living rooms</span>
            <span className="leading-4">{numberOfRooms}</span>
          </div>
        </div>
        <div className="h-[4.25rem] px-7 py-3 flex items-center gap-2 border border-[rgba(0,0,0,0.10)] rounded-full">
          <Image src="/svgs/size.svg" width={25} height={25} alt="svg" />
          <div className="flex flex-col text-sm">
            <span className="text-darkgray">Size</span>
            <span className="leading-4">{size}</span>
          </div>
        </div>
        <div className="h-[4.25rem] px-7 py-3 flex items-center gap-2 border border-[rgba(0,0,0,0.10)] rounded-full">
          <Image src="/svgs/villayellow.svg" width={25} height={25} alt="svg" />
          <div className="flex flex-col text-sm">
            <span className="text-darkgray">Property Type</span>
            <span className="leading-4">{propertyType}</span>
          </div>
        </div>
        <div className="h-[4.25rem] px-7 py-3 flex items-center gap-2 border border-[rgba(0,0,0,0.10)] rounded-full">
          <Image src="/svgs/dollarcoin.svg" width={25} height={25} alt="svg" />
          <div className="flex flex-col text-sm">
            <span className="text-darkgray">Rent (Monthly)</span>
            <span className="leading-4">{rentMonthly}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
