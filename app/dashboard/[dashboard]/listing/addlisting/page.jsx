"use client";
import BackButton from "@/components/Buttons/BackButton";
import BackArrowSvg from "@/components/Svgs/BackArrowSvg";
import React, { useState, useEffect } from "react";
import PropertyForm from "@/components/Sections/AddListing/PropertyForm";
import ValidateForm from "@/components/Sections/AddListing/ValidateForm";
import RegulatoryForm from "@/components/Sections/AddListing/RegulatoryForm";
import FeatureForm from "@/components/Sections/AddListing/FeaturesForm";

const AddListingPage = () => {
  const steps = [
    { label: "Property Information", component: PropertyForm },
    { label: "Features/Amenities", component: FeatureForm },
    { label: "Validated Information", component: ValidateForm },
    { label: "Regulatory Information", component: RegulatoryForm },
  ];
  const [step, setStep] = useState(0);
  useEffect(() => {
    console.log("Component re-rendered. Current step:", step);
  }, [step]);
  const nextStep = () => {
    setStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const prevStep = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const renderStep = () => {
    const StepComponent = steps[step].component;
    return <StepComponent onNext={nextStep} onPrev={prevStep} />;
  };

  return (
    <div className="flex flex-col xl:px-20 py-10">
      <div className="flex justify-between items-center py-6 px-8">
        <div className="flex items-center">
          <BackButton />
          <h1 className="font-semibold text-[1.3rem]">Add Listing</h1>
        </div>
        <button className="rounded-full font-semibold text-sm border border-[rgba(0,0,0,0.10)] hover:border-[rgba(0,0,0,0.30)] px-12 h-12">
          Discard
        </button>
      </div>
      <div className="rounded-full mx-8 mt-4  justify-between  items-center flex font-semibold 	text-sm border border-[rgba(0, 0, 0, 0.2)] h-14">
        {steps.map((s, index) => (
          <div
            key={index}
            className={`flex text-base	font-semibold	 items-center cursor-pointer w-[210px] mx-2 rounded-full h-[38px] p-2 ${
              step === index ? "text-white bg-[#001749]" : "text-black"
            }`}
            onClick={() => setStep(index)}
          >
            <span className="font-manrope mx-auto">{s.label}</span>
          </div>
        ))}
      </div>
      <div>
        <div></div>
        {renderStep()}
      </div>
    </div>
  );
};

export default AddListingPage;
