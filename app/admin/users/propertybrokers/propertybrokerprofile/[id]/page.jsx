"use client";

import BackButton from "@/components/Buttons/BackButton";
import CompanyProfileCard from "@/components/Cards/CompanyProfileCard";
import ExpiryStatusCard from "@/components/Cards/ExpiryStatusCard";
import PropertyCard from "@/components/Cards/PropertyCard";
import ActiveListingDropdown from "@/components/Dropdowns/ActiveListingDropdown";
import ViewMembershipHistoryButton from "@/components/Modals/ViewMembershipHistoryButton";
import DetailedSvg from "@/components/Svgs/DetailedSvg";
import EditPenSvg from "@/components/Svgs/EditPenSvg";
import ListViewSvg from "@/components/Svgs/ListViewSvg";
import SortSvg from "@/components/Svgs/SortSvg";
import Image from "next/image";
import React, { useState } from "react";

const PropertyBrokerProfile = () => {
  const [propertiesView, setPropertiesView] = useState("detailed");
  return (
    <div className="flex flex-col px-6 py-7">
      <BackButton />
      <div className="flex flex-col gap-2 p-2 w-full">
        <div className="text-3xl font-bold">Property Broker Profile</div>
        <div className="flex gap-3">
          <div className="w-[40%] flex flex-col gap-3 mt-5">
            <CompanyProfileCard role="Broker" />
            <ExpiryStatusCard />
          </div>
          <div className="w-[60%] px-7">
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <ActiveListingDropdown />
                <div className="text-themetext font-medium flex gap-1">
                  <Image src="/svgs/listinggray.svg" width={15} height={17} />
                  Past Listings (3)
                </div>
              </div>
              <button className="flex gap-2 items-center">
                <EditPenSvg width={15} height={15} />
                <p className="font-semibold">Edit Profile</p>
              </button>
            </div>
            <div className="flex justify-between items-center mt-5">
              <div className="flex gap-2">
                <button className="flex items-center justify-center gap-1 rounded-full text-xs font-semibold w-40 h-11 border border-[1px_solid_rgba(0,0,0,0.40)]">
                  <span>Filter</span>
                  <SortSvg />
                </button>
                <div className="flex items-center justify-center gap-2 rounded-full text-xs font-semibold px-3 h-11 border border-[1px_solid_rgba(0,0,0,0.20)]">
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
                    placeholder="Search"
                  />
                </div>
              </div>
              <button
                onClick={() =>
                  setPropertiesView(
                    propertiesView == "detailed" ? "list" : "detailed"
                  )
                }
              >
                {propertiesView == "detailed" ? (
                  <DetailedSvg />
                ) : (
                  <ListViewSvg />
                )}
              </button>
            </div>
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
                cardSize="small"
              />
              <PropertyCard
                id={2}
                cardSize="small"
                image="/imgs/property-big.png"
                title="Boston Family Villa"
                desc="Lorem ispum Lorem ispumLorem ispumLorem ispumLorem ispumLorem ispumLorem ispum Lorem ispumLorem ispumLorem ispumLorem"
                address="Boston, USA"
                bedrooms="3"
                type="Villa"
                view={propertiesView}
              />
              <PropertyCard
                id={3}
                cardSize="small"
                image="/imgs/property-big.png"
                title="Boston Family Villa"
                desc="Lorem ispum Lorem ispumLorem ispumLorem ispumLorem ispumLorem ispumLorem ispum Lorem ispumLorem ispumLorem ispumLorem"
                address="Boston, USA"
                bedrooms="3"
                type="Villa"
                view={propertiesView}
              />
              <PropertyCard
                id={4}
                cardSize="small"
                image="/imgs/property-big.png"
                title="Boston Family Villa"
                desc="Lorem ispum Lorem ispumLorem ispumLorem ispumLorem ispumLorem ispumLorem ispum Lorem ispumLorem ispumLorem ispumLorem"
                address="Boston, USA"
                bedrooms="3"
                type="Villa"
                view={propertiesView}
              />
              <PropertyCard
                id={5}
                cardSize="small"
                image="/imgs/property-big.png"
                title="Boston Family Villa"
                desc="Lorem ispum Lorem ispumLorem ispumLorem ispumLorem ispumLorem ispumLorem ispum Lorem ispumLorem ispumLorem ispumLorem"
                address="Boston, USA"
                bedrooms="3"
                type="Villa"
                view={propertiesView}

              />
              <PropertyCard
                id={6}
                cardSize="small"
                image="/imgs/property-big.png"
                title="Boston Family Villa"
                desc="Lorem ispum Lorem ispumLorem ispumLorem ispumLorem ispumLorem ispumLorem ispum Lorem ispumLorem ispumLorem ispumLorem"
                address="Boston, USA"
                bedrooms="3"
                type="Villa"
                view={propertiesView}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyBrokerProfile;
