"use client";
import AddListingButtonCS from "@/components/Buttons/AddListingButtonCS";
import PropertyCard from "@/components/Cards/PropertyCard";
import PropertySortDropdown from "@/components/Dropdowns/PropertySortDropdown";
import DetailedSvg from "@/components/Svgs/DetailedSvg";
import ListViewSvg from "@/components/Svgs/ListViewSvg";
import LocationPropertySvg from "@/components/Svgs/LocationPropertySvg";
import SortSvg from "@/components/Svgs/SortSvg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const PropertyListingSection = ({ dashboard }) => {
  
  const pathname = usePathname()
  const [propertiesView, setPropertiesView] = useState("detailed");


  return (
    <div className="flex items-center justify-center">
      <div className="flex w-full max-w-7xl flex-col px-10 py-10">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-extrabold">All Listing / Properties</h1>
          <div
            className={`flex items-center gap-5 text-sm ${
              dashboard === "landing" && "hidden"
            }`}
          >
           <button className="font-semibold hover:font-bold border border-gray-800 rounded-3xl px-6 py-3">
            {pathname.includes("broker") && "Selling Request"}
            {pathname.includes("company") && "Property Request"}
            {pathname.includes("propertyowner") && "Property Request"}
            {pathname.includes("agent") && "Selling Request"}
          </button>
          {
            pathname.includes("propertyowner") &&
            <button className="font-semibold hover:font-bold border border-gray-800 rounded-3xl px-6 py-3">
              Sell For me
            </button>
          }
            <AddListingButtonCS />
          </div>
        </div>
        <div className="mt-6 flex w-full items-center justify-between">
          <div className="flex w-2/3 gap-3">
            <PropertySortDropdown />
            <button className="flex h-11 w-40 items-center justify-center gap-1 rounded-full border border-[1px_solid_rgba(0,0,0,0.20)] text-xs font-semibold">
              <span>Filter</span>
              <SortSvg />
            </button>
            <div className="flex h-11 w-80 items-center justify-center gap-2 rounded-full border border-[1px_solid_rgba(0,0,0,0.20)] px-3 text-xs font-semibold">
              <Image
                src="/svgs/searchicon.svg"
                width={20}
                height={20}
                alt="svg"
              />
              <input
                className="w-full border-none bg-transparent outline-none"
                type="search"
                name="analyticsSearch"
                id="analyticsSearch"
                placeholder="Search listing"
              />
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() =>
                setPropertiesView(
                  propertiesView == "detailed" ? "list" : "detailed",
                )
              }
            >
              {propertiesView == "detailed" ? <DetailedSvg /> : <ListViewSvg />}
            </button>
            <button>
              <LocationPropertySvg />
            </button>
          </div>
        </div>
        <div
          className={`m-auto my-10 grid w-full gap-10 ${
            propertiesView === "detailed" ? "grid-cols-3" : "grid-cols-1"
          }`}
          style={{
            '@media (max-width: 768px)': {
              gridTemplateColumns: '1fr', 
            },
          }}
        >
          <PropertyCard
            id={1}
            image="/imgs/property-big.png"
            title="Boston Family Villa"
            desc="Lorem ispum Lorem ispumLorem ispumLorem ispumLorem ispumLorem ispumLorem ispum Lorem ispumLorem ispumLorem ispumLorem"
            address="Boston, USA"
            bedrooms="3"
            type="Villa"
            view={propertiesView}
            redirectUrl={`${dashboard}/listing`}
          />
          <PropertyCard
            id={2}
            image="/imgs/property-big.png"
            title="Boston Family Villa"
            desc="Lorem ispum Lorem ispumLorem ispumLorem ispumLorem ispumLorem ispumLorem ispum Lorem ispumLorem ispumLorem ispumLorem"
            address="Boston, USA"
            bedrooms="3"
            type="Villa"
            view={propertiesView}
            redirectUrl={`${dashboard}/listing`}
          />
          <PropertyCard
            id={3}
            image="/imgs/property-big.png"
            title="Boston Family Villa"
            desc="Lorem ispum Lorem ispumLorem ispumLorem ispumLorem ispumLorem ispumLorem ispum Lorem ispumLorem ispumLorem ispumLorem"
            address="Boston, USA"
            bedrooms="3"
            type="Villa"
            view={propertiesView}
            redirectUrl={`${dashboard}/listing`}
          />
          <PropertyCard
            id={4}
            image="/imgs/property-big.png"
            title="Boston Family Villa"
            desc="Lorem ispum Lorem ispumLorem ispumLorem ispumLorem ispumLorem ispumLorem ispum Lorem ispumLorem ispumLorem ispumLorem"
            address="Boston, USA"
            bedrooms="3"
            type="Villa"
            view={propertiesView}
            redirectUrl={`${dashboard}/listing`}
          />
          <PropertyCard
            id={5}
            image="/imgs/property-big.png"
            title="Boston Family Villa"
            desc="Lorem ispum Lorem ispumLorem ispumLorem ispumLorem ispumLorem ispumLorem ispum Lorem ispumLorem ispumLorem ispumLorem"
            address="Boston, USA"
            bedrooms="3"
            type="Villa"
            view={propertiesView}
            redirectUrl={`${dashboard}/listing`}
          />
          <PropertyCard
            id={6}
            image="/imgs/property-big.png"
            title="Boston Family Villa"
            desc="Lorem ispum Lorem ispumLorem ispumLorem ispumLorem ispumLorem ispumLorem ispum Lorem ispumLorem ispumLorem ispumLorem"
            address="Boston, USA"
            bedrooms="3"
            type="Villa"
            view={propertiesView}
            redirectUrl={`${dashboard}/listing`}
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyListingSection;
