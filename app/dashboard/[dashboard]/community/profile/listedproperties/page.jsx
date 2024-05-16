"use client";

import PropertyCard from "@/components/Cards/PropertyCard";
import React, { useState } from "react";

const ListedPropertiesPage = () => {
  const [propertiesView, setPropertiesView] = useState("detailed");
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-8 pb-10">
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
  );
};

export default ListedPropertiesPage;
