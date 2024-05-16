"use client";

import BackButton from "@/components/Buttons/BackButton";
import CompanyProfileCard from "@/components/Cards/CompanyProfileCard";
import ExpiryStatusCard from "@/components/Cards/ExpiryStatusCard";
import PropertyCard from "@/components/Cards/PropertyCard";
import ActiveListingDropdown from "@/components/Dropdowns/ActiveListingDropdown";
import DetailedSvg from "@/components/Svgs/DetailedSvg";
import EditPenSvg from "@/components/Svgs/EditPenSvg";
import ListViewSvg from "@/components/Svgs/ListViewSvg";
import SortSvg from "@/components/Svgs/SortSvg";
import Image from "next/image";
import React, { useState } from "react";

const CompanyProfile = () => {
  const [propertiesView, setPropertiesView] = useState("list");
  return (
    <div className="flex flex-col px-6 py-7">
      <BackButton />
      <div className="flex w-full flex-col gap-2 p-2">
        <div className="text-3xl font-bold">Company Profile</div>
        <div className="flex gap-3">
          <div className="mt-5 flex w-2/6 flex-col gap-3">
            <CompanyProfileCard role="company" />
            <ExpiryStatusCard />
          </div>
          <div className="w-4/6 px-7">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ActiveListingDropdown />
                <div className="flex gap-1 font-medium text-themetext">
                  <Image src="/svgs/listinggray.svg" width={15} height={17} />
                  Past Listings (3)
                </div>
              </div>
              <button className="flex items-center gap-2">
                <EditPenSvg width={15} height={15} />
                <p className="font-semibold">Edit Profile</p>
              </button>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <div className="flex gap-2">
                <button className="flex h-11 w-40 items-center justify-center gap-1 rounded-full border border-[1px_solid_rgba(0,0,0,0.40)] text-xs font-semibold">
                  <span>Filter</span>
                  <SortSvg />
                </button>
                <div className="flex h-11 items-center justify-center gap-2 rounded-full border border-[1px_solid_rgba(0,0,0,0.20)] px-3 text-xs font-semibold">
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
                    placeholder="Search"
                  />
                </div>
              </div>
              <button
                onClick={() =>
                  setPropertiesView(
                    propertiesView == "detailed" ? "list" : "detailed",
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
            <div className="my-10 flex flex-wrap gap-5">
              <PropertyCard
                id={1}
                cardSize="small"
                image="/imgs/property-big.png"
                title="Boston Family Villa"
                desc="Lorem ispum Lorem ispumLorem ispumLorem ispumLorem ispumLorem ispumLorem ispum Lorem ispumLorem ispumLorem ispumLorem"
                address="Boston, USA"
                bedrooms="3"
                type="Villa"
                view={propertiesView}
                CompanyProfile = {true}
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
                CompanyProfile = {true}
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
                CompanyProfile = {true}
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
                CompanyProfile = {true}
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
                CompanyProfile = {true}
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
                CompanyProfile = {true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
