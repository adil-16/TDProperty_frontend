"use client";

import TopProperty from "./TopProperty";

const TopProperties = () => {
  return (
    <div className="flex flex-col gap-y-3 shadow-[0px_8.81px_35.51px_0px_rgba(51,38,174,0.08)] px-4 py-3">
      <p className="text-base font-semibold text-secondary">
        Top Properties
      </p>
      <TopProperty />
      <TopProperty />
      <TopProperty />
      <TopProperty />
    </div>
  );
};

export default TopProperties;
