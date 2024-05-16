"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import Image from "next/image";
import PropertyForm from "../Sections/AddListing/PropertyForm";
import FeatureForm from "../Sections/AddListing/FeaturesForm";
import ValidateForm from "../Sections/AddListing/ValidateForm";
import RegulatoryForm from "../Sections/AddListing/RegulatoryForm";
import ImagesVideosSection from "../Sections/AddPost/ImagesVideosSection";
import BlogSection from "../Sections/AddPost/BlogSection";

const AddPostModal = () => {
  const [showModal, setShowModal] = useState(false);
  const steps = [
    { label: "Images and Videos", component: ImagesVideosSection },
    { label: "Blog", component: BlogSection },
  ];
  const [step, setStep] = useState(0);

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
    <Modal
      modalOpener={
        <button className="bg-primary text-white p-4 rounded-full pointer-events-auto">
          <Image src="/svgs/addpost.svg" alt="addpost" width={28} height={28} />
        </button>
      }
      modalContent={
        <div className="flex flex-col p-5 w-[550px] pointer-events-auto">
          <div className="flex justify-between">
            <p className="text-themetext font-semibold">Add Post</p>
            <button
              onClick={() => setShowModal(false)}
              className="flex items-center justify-center shadow rounded-md w-[30px] h-[30px]"
            >
              <Image src="/svgs/cross.svg" alt="close" width={20} height={20} />
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
          <div>{renderStep()}</div>
        </div>
      }
      openModal={showModal}
      setOpenModal={setShowModal}
    />
  );
};

export default AddPostModal;
