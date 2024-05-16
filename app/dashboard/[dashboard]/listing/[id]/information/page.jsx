

const PropertyInformationPage = () => {
  return (
    <div>
      <div className="font-bold mb-8">Basic Information</div>
      <div className="flex w-full flex-wrap text-sm gap-x-10 gap-y-5">
        <div className="flex w-[300px] justify-between border-b border-[rgba(0,0,0,0.1)] pb-1">
          <span>Purpose</span>
          <p className="font-semibold">For Rent (Monthly)</p>
        </div>
        <div className="flex w-[300px] justify-between border-b border-[rgba(0,0,0,0.1)] pb-1">
          <span>Added on</span>
          <p className="font-semibold">03 Jan 2023</p>
        </div>
        <div className="flex w-[300px] justify-between border-b border-[rgba(0,0,0,0.1)] pb-1">
          <span>Type</span>
          <p className="font-semibold">Residential (Villa)</p>
        </div>
        <div className="flex w-[300px] justify-between border-b border-[rgba(0,0,0,0.1)] pb-1">
          <span>Furnishing</span>
          <p className="font-semibold">Furnished</p>
        </div>
        <div className="flex w-[300px] justify-between border-b border-[rgba(0,0,0,0.1)] pb-1">
          <span>Completetion</span>
          <p className="font-semibold">-</p>
        </div>
        <div className="flex w-[300px] justify-between border-b border-[rgba(0,0,0,0.1)] pb-1">
          <span>Property Age</span>
          <p className="font-semibold">09 Years</p>
        </div>
        <div className="flex w-[300px] justify-between border-b border-[rgba(0,0,0,0.1)] pb-1">
          <span>No. of Bedrooms</span>
          <p className="font-semibold">6</p>
        </div>
        <div className="flex w-[300px] justify-between border-b border-[rgba(0,0,0,0.1)] pb-1">
          <span>No. of Living Rooms</span>
          <p className="font-semibold">12</p>
        </div>
        <div className="flex w-[300px] justify-between border-b border-[rgba(0,0,0,0.1)] pb-1">
          <span>No. of Toilets</span>
          <p className="font-semibold">8</p>
        </div>
        <div className="flex w-[300px] justify-between border-b border-[rgba(0,0,0,0.1)] pb-1">
          <span>No. of Floors</span>
          <p className="font-semibold">12</p>
        </div>
        <div className="flex w-[300px] justify-between border-b border-[rgba(0,0,0,0.1)] pb-1">
          <span>Floor Number</span>
          <p className="font-semibold">2</p>
        </div>
      </div>
      <div className="font-bold my-8">Validated Information</div>
      <div className="flex w-full flex-wrap text-sm gap-x-10 gap-y-5">
        <div className="flex w-[300px] justify-between border-b border-[rgba(0,0,0,0.1)] pb-1">
          <span>Property Developer</span>
          <p className="font-semibold">2</p>
        </div>
        <div className="flex w-[300px] justify-between border-b border-[rgba(0,0,0,0.1)] pb-1">
          <span>Ownership</span>
          <p className="font-semibold">Freehold</p>
        </div>
        <div className="flex w-[300px] justify-between border-b border-[rgba(0,0,0,0.1)] pb-1">
          <span>Plot Area (sq.ft)</span>
          <p className="font-semibold">220 sq.ft</p>
        </div>
        <div className="flex w-[300px] justify-between border-b border-[rgba(0,0,0,0.1)] pb-1">
          <span>Built in Area (sq.ft)</span>
          <p className="font-semibold">196 sq.ft</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyInformationPage;
