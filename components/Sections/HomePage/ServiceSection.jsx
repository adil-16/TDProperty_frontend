import ServiceCard from "@/components/Cards/ServiceCard";
import React from "react";

const ServiceSection = () => {
  return (
    <div className="flex min-h-[247px] flex-col p-24">
      <h1 className="text-[38px] font-extrabold text-primary">Services</h1>
      <div className="mt-5 flex gap-[14px] justify-center">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
      <div className="flex w-full justify-center pt-[208px]">
        <div className="grid h-[371px] w-[1200px] grid-cols-2 bg-[url('/imgs/service-banner.png')]">
          <div className="flex items-center justify-center">
            <div className="text-center text-[64px] font-bold leading-[87px] text-primary">
              Sell A <br /> Property
            </div>
          </div>
          <div className="flex flex-col justify-center gap-8 px-10 text-[20px] text-white">
            <p className="leading-normal">
              You have a property that you want to sell or rent but you don't
              have time? Don't worry our experts have got you covered. Leave it
              to us!
            </p>
            <button className="h-[69px] w-[291px] rounded-full bg-primary font-semibold text-white">
              Sell for me
            </button>
            <div className="text-sm">
              And if you prefer to do it by yourself you can list directly and
              easily <br /> through our app. Either way, we're here to support
              your journey!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
