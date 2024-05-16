"use client";

import React, { useState } from "react";
import BackButton from "@/components/Buttons/BackButton";
import OptionButton from "@/components/Buttons/OptionButton";
import ResidentialProperty from "@/components/Sections/ResidentialProperty/page";
import PropertyCard from "@/components/Cards/PropertyCard";
const Activity = () => {
  const [propertiesView, setPropertiesView] = useState("");
  const todayProperties = [
    { name: "Residential Properties", location: "Jakarta, Indonesia" },
    { name: "Residential Properties", location: "Jakarta, Indonesia" },
    { name: "Residential Properties", location: "Jakarta, Indonesia" },
    { name: "Residential Properties", location: "Jakarta, Indonesia" },
  ];
  const yesterdayProperties = [
    { name: "Residential Properties", location: "Jakarta, Indonesia" },
    { name: "Residential Properties", location: "Jakarta, Indonesia" },
    { name: "Residential Properties", location: "Jakarta, Indonesia" },
  ];
  return (
    <div className="flex min-h-screen justify-center bg-[#FFFFFF]">
      <div className="mb-16 mt-9 w-full max-w-[1270px] ">
        <BackButton />
        <OptionButton />
        <div className="ml-3 font-manrope text-2xl font-bold leading-[43.71px]">
          My Activity
        </div>
        <div className="mt-4 flex flex-row justify-between gap-0">
          <div className=" ml-3 h-[856px] w-[600px] rounded-xl	border border-gray-700   border-opacity-20 shadow-md">
            <div className="font-inter leading-12  flex  h-[56px]  items-center justify-center font-medium ">
              Recent Searches
            </div>
            <div className=" border-t border-gray-700 border-opacity-20 shadow-md"></div>
            <div className="ml-6 mt-4 text-sm text-[#171C26]">Today</div>
            {todayProperties.map((property, index) => (
              <ResidentialProperty
                key={index}
                name={property.name}
                location={property.location}
              />
            ))}
            <div className="mb-3 ml-6 mt-8 text-sm text-[#171C26]">
              Yesterday
            </div>
            {yesterdayProperties.map((property, index) => (
              <ResidentialProperty
                key={index}
                name={property.name}
                location={property.location}
              />
            ))}
          </div>
          <div className="  h-[856px] w-[600px] rounded-xl	border border-gray-700   border-opacity-20 shadow-md">
            <div className="font-inter leading-12  flex  h-[56px]  items-center justify-center border-b border-gray-700 border-opacity-20 font-medium">
              Viewed
            </div>
            <div className="flex w-full flex-center px-6 py-5">
              <PropertyCard
                id={1}
                image="/imgs/property-big.png"
                title="Boston Family Villa"
                desc="Lorem ispum Lorem ispumLorem ispumLorem ispumLorem ispumLorem ispumLorem ispum Lorem ispumLorem ispumLorem ispumLorem"
                address="Boston, USA"
                bedrooms="3"
                type="Villa"
                view={propertiesView}
                redirectUrl="properties"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
