import Image from "next/image";


const ListingSection = () => {
  return (
    <div className="flex flex-col gap-2 pb-8 items-center shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)]">
      <div className="flex justify-between items-center w-full px-4 pt-4">
        <p className="font-semibold text-lg text-secondary">Listing</p>
        <select className="border border-[rgba(0,0,0,0.10)] text-[10px] text-darkgray p-1">
          <option>Monthly</option>
          <option>Weekly</option>
          <option>Daily</option>
        </select>
      </div>
      <div className="flex flex-col gap-5 px-4 my-5 w-full">
        <Image
          className="w-full"
          src="/svgs/listingactive.svg"
          width={230}
          height={70}
          alt="svg"
        />
        <Image
          className="w-full"
          src="/svgs/listinginactive.svg"
          width={230}
          height={70}
          alt="svg"
        />
      </div>
    </div>
  );
};

export default ListingSection;
