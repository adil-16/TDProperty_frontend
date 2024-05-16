import PropertyCard from "@/components/Cards/PropertyCard";
import Image from "next/image";
import React from "react";

const RecommendedPropertiesSection = () => {
  return (
    <div className="flex w-full flex-col px-[100px] py-[70px]">
      <div className="mb-5 flex w-full items-center justify-between">
        <div className="text-[36px] font-bold">Recommended Properties</div>
        <div className="flex items-center gap-3">
          <span className="text-[21px]">Explore All</span>
          <Image
            src="/svgs/imp-news/rightarrow2.svg"
            width={24}
            height={24}
            alt="img"
          />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-5">
        <PropertyCard
          id={1}
          image="/imgs/property-big.png"
          title="Boston Family Villa"
          desc="Lorem ispum Lorem ispumLorem ispumLorem ispumLorem ispumLorem ispumLorem ispum Lorem ispumLorem ispumLorem ispumLorem"
          address="Boston, USA"
          bedrooms="3"
          type="Villa"
        />
        <PropertyCard
          id={1}
          image="/imgs/property-big.png"
          title="Boston Family Villa"
          desc="Lorem ispum Lorem ispumLorem ispumLorem ispumLorem ispumLorem ispumLorem ispum Lorem ispumLorem ispumLorem ispumLorem"
          address="Boston, USA"
          bedrooms="3"
          type="Villa"
        />
        <PropertyCard
          id={1}
          image="/imgs/property-big.png"
          title="Boston Family Villa"
          desc="Lorem ispum Lorem ispumLorem ispumLorem ispumLorem ispumLorem ispumLorem ispum Lorem ispumLorem ispumLorem ispumLorem"
          address="Boston, USA"
          bedrooms="3"
          type="Villa"
        />
      </div>
    </div>
  );
};

export default RecommendedPropertiesSection;
