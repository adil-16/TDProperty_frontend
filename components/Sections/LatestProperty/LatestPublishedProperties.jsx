import React, { useState } from "react";
import LatestProperty from "./LatestProperty";

const LatestPublishedProperties = () => {
  const properties = [
    {
      title: "City Road",
      address: "Washington DC, USA",
      price: "$4500",
      image: "/imgs/property-big.png",
      beds: 4,
      baths: 1,
      area: 579,
      description:
        "This stylish flat offers contemporary urban living at its finest. Located in a desirable neighborhood, it boasts an open-concept layout flooded with natural light, creating a welcoming atmosphere. The sleek, well-appointed kitchen is a highlight, and the spacious bedrooms provide ample comfort.",
    },
    {
      title: "Boston Road",
      address: "Cliffton, USA",
      price: "$4500",
      image: "/imgs/prop-1.png",
      beds: 4,
      baths: 1,
      area: 579,
      description:
        "This stylish flat offers contemporary urban living at its finest. Located in a desirable neighborhood, it boasts an open-concept layout flooded with natural light, creating a welcoming atmosphere. The sleek, well-appointed kitchen is a highlight, and the spacious bedrooms provide ample comfort.",
    },
    {
      title: "Yorker Road",
      address: "Backyard, USA",
      price: "$4500",
      image: "/imgs/prop-2.png",
      beds: 4,
      baths: 1,
      area: 579,
      description:
        "This stylish flat offers contemporary urban living at its finest. Located in a desirable neighborhood, it boasts an open-concept layout flooded with natural light, creating a welcoming atmosphere. The sleek, well-appointed kitchen is a highlight, and the spacious bedrooms provide ample comfort.",
    },
    {
      title: "Hill Road",
      address: "New York, USA",
      price: "$4500",
      image: "/imgs/prop-3.png",
      beds: 4,
      baths: 1,
      area: 579,
      description:
        "This stylish flat offers contemporary urban living at its finest. Located in a desirable neighborhood, it boasts an open-concept layout flooded with natural light, creating a welcoming atmosphere. The sleek, well-appointed kitchen is a highlight, and the spacious bedrooms provide ample comfort.",
    },
  ];
  const [currentProperty, setCurrentProperty] = useState(0);
  const incrementPropertyIndex = () => {
    if (currentProperty === properties.length - 1) {
      setCurrentProperty(0);
    } else {
      setCurrentProperty(currentProperty + 1);
    }
  };
  const decrementPropertyIndex = () => {
    if (currentProperty === 0) {
      setCurrentProperty(properties.length - 1);
    } else {
      setCurrentProperty(currentProperty - 1);
    }
  };
  return (
    <div className="flex flex-col gap-6 p-7 rounded shadow-[0px_8.81px_35.51px_0px_rgba(51,38,174,0.08)] w-3/4 text-secondary">
      <div className="flex justify-between w-full">
        <p className="text-lg font-semibold text-secondary">
          Latest Published Properties
        </p>
        <div className="flex gap-2">
          <button
            className="rounded-full bg-lightgray w-6 h-6 flex items-center justify-center pb-[px]"
            onClick={() => decrementPropertyIndex()}
          >
            {"<"}
          </button>
          <button
            className="rounded-full bg-primary text-white w-6 h-6 flex items-center justify-center pb-[px]"
            onClick={() => incrementPropertyIndex()}
          >
            {">"}
          </button>
        </div>
      </div>
      {properties.map((property, index) => (
        <LatestProperty
          key={index}
          property={property}
          current={currentProperty === index}
        />
      ))}
    </div>
  );
};

export default LatestPublishedProperties;
