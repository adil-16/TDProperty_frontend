"use client";

import React, { useState } from "react";
import SearchListing from "../SearchBars/SearchListing";
import Image from "next/image";
import ListingInstance from "./ListingInstance";

const ListingComparisonCard = () => {
  const [listings, setListings] = useState([1]);
  return (
    <div className="flex flex-col shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08),0px_0px_4px_0px_rgba(0,0,0,0.12)]">
      <div className="flex justify-between items-center border-b px-5 py-2">
        <p className="font-semibold text-sm">Listing Comparison</p>
        <small className="text-themetext text-xs">Updated 2 days ago</small>
      </div>
      <div className="flex gap-10 py-8 px-7">
        {listings.map((listing, index) => (
          <ListingInstance key={index} listing={listing} />
        ))}
        {listings.length < 3 && (
          <button
            className="px-5 py-2 text-sm font-semibold rounded-full border h-fit border-primary"
            onClick={() => setListings([...listings, 2])}
          >
            Add another
          </button>
        )}
      </div>
    </div>
  );
};

export default ListingComparisonCard;
