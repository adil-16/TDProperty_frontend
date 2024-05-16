
import SearchListing from "../SearchBars/SearchListing";
import Image from "next/image";

const ListingInstance = ({ listing }) => {
  return (
    <div className="flex flex-col gap-3">
      <SearchListing />
      <Image
        className="rounded-2xl"
        src="/imgs/prop-3.png"
        width={339}
        height={196}
        alt="prop"
      />
      <div className="flex gap-2 items-center">
        <Image src="/svgs/location2.svg" width={12} height={14} />
        <p className="text-xs text-semibold">Boston rd, near Lohada</p>
      </div>
      <div className="flex gap-8 items-center">
        <div className="flex gap-2">
          <Image src="/svgs/bed.svg" width={12} height={14} />
          <p className="text-xs text-themetext">4 bedrooms</p>
        </div>
        <div className="flex gap-2">
          <Image src="/svgs/villa.svg" width={12} height={14} />
          <p className="text-xs text-themetext">Villa</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-10 py-10">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-4xl text-primary font-medium">12,125</h1>
          <p className="font-medium text-sm">Impressions</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-4xl text-primary font-medium">12,125</h1>
          <p className="font-medium text-sm">No. of visits</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-4xl text-primary font-medium">12,125</h1>
          <p className="font-medium text-sm">Avg. Visit Time Spent</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-4xl text-primary font-medium">Location</h1>
          <p className="font-medium text-sm">Type of Search</p>
        </div>
      </div>
    </div>
  );
};

export default ListingInstance;
