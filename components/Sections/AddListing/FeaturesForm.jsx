import React, { useState, useEffect } from "react";
import ParkingSpaceSvg from "../../Svgs/ParkingSpaceSvg";
import TickSvg from "../../Svgs/TickSvg";
import CentrallyAirSvg from "../../Svgs/CentrallyAirSvg";
import BalconySvg from "../../Svgs/BalconySvg";
import SwimmingPoolSvg from "../../Svgs/SwimmingpoolSvg.jsx";
import InternetSvg from "../../Svgs/InternetSvg";
import MaidsRoomSvg from "../../Svgs/MaidsRoomSvg";
import KidsPlayAreaSvg from "../../Svgs/KidsPlayAreaSvg";
import LobbySvg from "../../Svgs/LobbySvg";
import CctvSvg from "../../Svgs/CctvSvg";
import WasteSvg from "../../Svgs/WasteSvg";
import MaintinenceSvg from "../../Svgs/MaintinenceSvg";
import SecuritySvg from "../../Svgs/SecuritySvg";
import GymSvg from "../../Svgs/GymSvg";
import AddSvg from "../../Svgs/AddSvg";
import CrossSvg from "../../Svgs/CrossSvg";
const FeatureForm = ({ onPrev,onNext } ) => {
  const [total, setTotal] = useState(0);
  const [featuresData, setFeaturesData] = useState([
    {
      id: 1,
      name: "Parking Space",
      icon: <ParkingSpaceSvg />,
      isSelected: false,
    },
    {
      id: 2,
      name: "Centrally-air conditioned",
      icon: <CentrallyAirSvg />,
      isSelected: false,
    },
    {
      id: 3,
      name: "Balcony/Terrace",
      icon: <BalconySvg />,
      isSelected: false,
    },
    {
      id: 4,
      name: "Swimming Pool ",
      icon: <SwimmingPoolSvg />,
      isSelected: false,
    },
    { id: 5, name: "Internet", icon: <InternetSvg />, isSelected: false },
    { id: 6, name: "Maids Room", icon: <MaidsRoomSvg />, isSelected: false },
    {
      id: 7,
      name: "Kids Play Area",
      icon: <KidsPlayAreaSvg />,
      isSelected: false,
    },
    {
      id: 8,
      name: "Lobby in building",
      icon: <LobbySvg />,
      isSelected: false,
    },
    {
      id: 9,
      name: "CCTV Security",
      icon: <CctvSvg />,
      isSelected: false,
    },
    {
      id: 10,
      name: "Gym/Health Club",
      icon: <GymSvg />,
      isSelected: false,
    },
    {
      id: 11,
      name: "Waste Disposal",
      icon: <WasteSvg />,
      isSelected: false,
    },
    {
      id: 12,
      name: " Maintenance Staff",
      icon: <MaintinenceSvg />,
      isSelected: false,
    },
    {
      id: 13,
      name: "Security Staff",
      icon: <SecuritySvg />,
      isSelected: false,
    },
  ]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [num, setNum] = useState(0);
  const [otherItems, setOtherItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const toggleFeature = (featureId) => {
    setFeaturesData((prevFeaturesData) => {
      return prevFeaturesData.map((feature) => {
        if (feature.id === featureId) {
          return { ...feature, isSelected: !feature.isSelected };
        } else {
          return feature;
        }
      });
    });

    setSelectedFeatures((prevSelectedFeatures) => {
      if (prevSelectedFeatures.includes(featureId)) {
        return prevSelectedFeatures.filter((id) => id !== featureId);
      } else {
        return [...prevSelectedFeatures, featureId];
      }
    });
  };

  const clearSelection = () => {
    setFeaturesData((prevFeaturesData) => {
      return prevFeaturesData.map((feature) => ({
        ...feature,
        isSelected: false,
      }));
    });
    setSelectedFeatures([]);
  };
  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      setOtherItems([...otherItems, newItem]);
      setNewItem("");
    }
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...otherItems];
    updatedItems.splice(index, 1);
    setOtherItems(updatedItems);
  };
  const toggleAllFeatures = () => {
    const allSelected = featuresData.every((feature) => feature.isSelected);

    setFeaturesData((prevFeaturesData) => {
      return prevFeaturesData.map((feature) => ({
        ...feature,
        isSelected: !allSelected,
      }));
    });

    if (allSelected) {
      setSelectedFeatures([]);
    } else {
      setSelectedFeatures(featuresData.map((feature) => feature.id));
    }
  };


  return (
    <div className="mx-10">
      <div className="flex mt-7 justify-between">
        <div className="flex">
          <div className="font-semibold text-base">Select the Features</div>
          <div>
            <p className="text-[rgba(52,52,52,0.8)]">
              ({selectedFeatures.length} selected)
            </p>
          </div>
        </div>
        <div
          onClick={toggleAllFeatures}
          className="underline text-[#001749] underline-offset-auto cursor-pointer"
        >
          {selectedFeatures.length === 0 ? "Select All" : "Unselect All"}
        </div>
      </div>
      <div className=" gap-x-[2.3rem] grid grid-rows-2 grid-cols-7 gap-4 gap-y-6 mt-6 ">
        {featuresData.map((feature) => (
          <div
            key={feature.id}
            onClick={() => toggleFeature(feature.id)}
            className={`feature-box ${
              feature.isSelected
                ? "bg-[#FFFBF6] border border-[rgba(0, 0, 0, 0.05)]"
                : "border border-[#ccc]"
            } h-28 w-32 cursor-pointer flex flex-col justify-start	 hover:border-primary	 rounded-[10px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] 	 `}
          >
            <div className="grid">
              {feature.isSelected && (
                <span className=" justify-self-end  mt-2 mr-1.5 h-2 tick-svg">
                  <TickSvg />
                </span>
              )}
            </div>
            <div
              className={` ${
                feature.isSelected ? "mt-4" : "mt-8"
              } flex flex-col h-18  justify-center	items-center `}
            >
              <span>{feature.icon}</span>
              <span
                className={` ${
                  feature.isSelected ? "text-primary" : "text-black "
                } disabled
            text-center	font-inter  mt-1.5 font-medium max-w-[80%] text-xs `}
              >
                {feature.name}
              </span>
            </div>
          </div>
        ))}
      </div>
      <form className="mt-4 flex flex-col gap-y-4" action="#">
        <div className="flex flex-col">
          <label className="font-manrope mx-2 mt-4 mb-6 font-medium text-base leading-6 text-[rgba(0,0,0,0.8)]">
            Other (Optional)
          </label>
          <div className="grid items-center">
            <input
              className="font-manrope  -mt-3 bg-transparent border border-black border-opacity-10 w-[450px] rounded-full h-[41px] px-4 text-sm font-medium focus:border focus:border-[rgba(0,0,0,0.30)] outline-none"
              type="text"
              id="Other"
              placeholder="ex:Cricket Ground"
              value={newItem}
              onChange={handleInputChange}
            />
            <button
              onClick={handleAddItem}
              type="button"
              className=" bg-[#0A1828] font-manrope h-14	 text-white rounded-full font-semibold w-36 mt-6 text-sm border  px-2  flex items-center justify-center gap-x-1"
            >
              <AddSvg className="text-center " />
              Add
            </button>
          </div>
        </div>
        <div className="mt-4 flex">
          {otherItems.map((item, index) => (
            <div key={index} className="flex  ">
              <div className="rounded-xl text-xs border border-[rgba(0,0,0,0.10)] hover:border-[rgba(0,0,0,0.30)] flex items-center justify-center w-32 h-12">
                {item}
              </div>
              <button
                type="button"
                className="mt-2"
                onClick={() => handleDeleteItem(index)}
              >
                {" "}
                <CrossSvg />
              </button>
            </div>
          ))}
        </div>
        <div className="flex  gap-2 justify-end ">
          <button onClick={onPrev} className="font-manrope rounded-full py-3 px-[5rem]  border border-[rgba(0,0,0,0.10)]   flex items-center justify-center text-sm font-semibold ">
            Previous
          </button>
          <button onClick={onNext} className="font-manrope rounded-full py-3 px-[5.4rem]  bg-primary  border border-[rgba(0,0,0,0.10)]   flex items-center justify-center text-sm font-semibold ">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};
export default FeatureForm;
