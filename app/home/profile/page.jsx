"use client";

import InDepthStatsButton from "@/components/Buttons/InDepthStatsButton";
import CompanyProfileCard from "@/components/Cards/CompanyProfileCard";
import ExpiryStatusCard from "@/components/Cards/ExpiryStatusCard";
import MyWalletCard from "@/components/Cards/MyWalletCard";
import PropertyCard from "@/components/Cards/PropertyCard";
import ActiveListingDropdown from "@/components/Dropdowns/ActiveListingDropdown";
import DetailedSvg from "@/components/Svgs/DetailedSvg";
import EditPenSvg from "@/components/Svgs/EditPenSvg";
import ListViewSvg from "@/components/Svgs/ListViewSvg";
import SortSvg from "@/components/Svgs/SortSvg";
import Image from "next/image";
import React, { useState } from "react";

const CompanyProfilePage = ({ params }) => {
  const [propertiesView, setPropertiesView] = useState("list");
  return (
    <div className="px-24 py-16">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <h1 className="text-4xl font-extrabold">My Profile</h1>
          <InDepthStatsButton />
        </div>
        <div className="mt-10 flex w-full gap-6">
          <div className="flex w-4/12 flex-col gap-6">
            <CompanyProfileCard role={params.dashboard} />

            <ExpiryStatusCard />
          </div>
          <div className="w-8/12">
            <div>
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
                  image="/imgs/property-big.png"
                  title="Boston Family Villa"
                  desc="Lorem ispum Lorem ispumLorem ispumLorem ispumLorem ispumLorem ispumLorem ispum Lorem ispumLorem ispumLorem ispumLorem"
                  address="Boston, USA"
                  bedrooms="3"
                  type="Villa"
                  cardSize="small"
                  view={propertiesView}
                />
                <PropertyCard
                  id={2}
                  image="/imgs/property-big.png"
                  title="Boston Family Villa"
                  desc="Lorem ispum Lorem ispumLorem ispumLorem ispumLorem ispumLorem ispumLorem ispum Lorem ispumLorem ispumLorem ispumLorem"
                  address="Boston, USA"
                  bedrooms="3"
                  type="Villa"
                  cardSize="small"
                  view={propertiesView}
                />
                <PropertyCard
                  id={3}
                  image="/imgs/property-big.png"
                  title="Boston Family Villa"
                  desc="Lorem ispum Lorem ispumLorem ispumLorem ispumLorem ispumLorem ispumLorem ispum Lorem ispumLorem ispumLorem ispumLorem"
                  address="Boston, USA"
                  bedrooms="3"
                  type="Villa"
                  cardSize="small"
                  view={propertiesView}
                />
                <PropertyCard
                  id={4}
                  image="/imgs/property-big.png"
                  title="Boston Family Villa"
                  desc="Lorem ispum Lorem ispumLorem ispumLorem ispumLorem ispumLorem ispumLorem ispum Lorem ispumLorem ispumLorem ispumLorem"
                  address="Boston, USA"
                  bedrooms="3"
                  type="Villa"
                  cardSize="small"
                  view={propertiesView}
                />
                <PropertyCard
                  id={5}
                  image="/imgs/property-big.png"
                  title="Boston Family Villa"
                  desc="Lorem ispum Lorem ispumLorem ispumLorem ispumLorem ispumLorem ispumLorem ispum Lorem ispumLorem ispumLorem ispumLorem"
                  address="Boston, USA"
                  bedrooms="3"
                  type="Villa"
                  cardSize="small"
                  view={propertiesView}
                />
                <PropertyCard
                  id={6}
                  image="/imgs/property-big.png"
                  title="Boston Family Villa"
                  desc="Lorem ispum Lorem ispumLorem ispumLorem ispumLorem ispumLorem ispumLorem ispum Lorem ispumLorem ispumLorem ispumLorem"
                  address="Boston, USA"
                  bedrooms="3"
                  type="Villa"
                  cardSize="small"
                  view={propertiesView}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfilePage;
