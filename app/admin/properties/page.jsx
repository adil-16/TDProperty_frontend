"use client";

import PropertyCard from "@/components/Cards/PropertyCard";
import PropertySortDropdown from "@/components/Dropdowns/PropertySortDropdown";
import MyMap from "@/components/Map/Map";
import DetailedSvg from "@/components/Svgs/DetailedSvg";
import ListViewSvg from "@/components/Svgs/ListViewSvg";
import LocationPropertySvg from "@/components/Svgs/LocationPropertySvg";
import SortSvg from "@/components/Svgs/SortSvg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const PropertiesPage = () => {
  const router = useRouter();
  const [propertiesView, setPropertiesView] = useState("detailed");
  const [viewMap, setViewMap] = useState(false)

  const locations = [
    { lat: 33.69210033411755, lng: 73.00267127166194, name: 'F/10' }, 
    { lat: 33.67495932296654,  lng: 73.01503089104224, name: 'G/10' }
  ];

  const showMap = () => {
    setViewMap(!viewMap)
  }

  return (
    <div className="flex flex-col p-[30px]">
      <div className="flex w-full justify-between">
        <div className="text-3xl font-bold">All Listings/ Properties</div>
        <div>
          <button
            className="font-semibold mx-3" 
            onClick={() => router.push("/admin/properties/addlisting")}
          >
            Request Property
          </button>
          <button
            className="bg-primary px-8 py-3 rounded-full font-semibold"
            onClick={() => router.push("/admin/properties/addlisting")}
          >
            + Add listing
          </button>
        </div>
      </div>
      <div className="w-full flex justify-between items-center mt-6">
        <div className="flex gap-3 w-2/3">
          <PropertySortDropdown />
          <button className="flex items-center justify-center gap-1 rounded-full text-xs font-semibold w-40 h-11 border border-[1px_solid_rgba(0,0,0,0.20)]">
            <span>Filter</span>
            <SortSvg />
          </button>
          <div className="flex items-center justify-center gap-2 rounded-full text-xs font-semibold w-80 px-3 h-11 border border-[1px_solid_rgba(0,0,0,0.20)]">
            <Image
              src="/svgs/searchicon.svg"
              width={20}
              height={20}
              alt="svg"
            />
            <input
              className="outline-none border-none bg-transparent w-full"
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
             { setPropertiesView(
                propertiesView == "detailed" ? "list" : "detailed"
              )
              setViewMap(false)
            }
            }
          >
            {propertiesView == "detailed" ? <DetailedSvg /> : <ListViewSvg />}
          </button>
          <button onClick={showMap}>
            <LocationPropertySvg map = {viewMap}  />
          </button>
        </div>
      </div>
      { viewMap ? 
        <div className="mt-5">
          <MyMap locations={locations} />
        </div> : 
      <div className="flex flex-wrap gap-5 my-10">
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
        <PropertyCard
          id={2}
          image="/imgs/property-big.png"
          title="Boston Family Villa"
          desc="Lorem ispum Lorem ispumLorem ispumLorem ispumLorem ispumLorem ispumLorem ispum Lorem ispumLorem ispumLorem ispumLorem"
          address="Boston, USA"
          bedrooms="3"
          type="Villa"
          view={propertiesView}
          redirectUrl="properties"
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
          redirectUrl="properties"
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
          redirectUrl="properties"
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
          redirectUrl="properties"
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
          redirectUrl="properties"
        />
      </div> 
    }
    </div>
  );
};

export default PropertiesPage;
