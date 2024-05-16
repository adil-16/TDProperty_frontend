import Image from "next/image";


const RegulatoryInformationPage = () => {
  return (
    <div>
      <div className="flex w-full flex-wrap text-sm gap-x-10 gap-y-5">
        <div className="flex w-[300px] justify-between border-b border-[rgba(0,0,0,0.1)]">
          <span>Permit Number</span>
          <p className="font-semibold">101249-5jB9Ba</p>
        </div>
        <div className="flex w-[300px] justify-between border-b border-[rgba(0,0,0,0.1)]">
          <span>DED</span>
          <p className="font-semibold">03 Jan 2023</p>
        </div>
        <div className="flex w-[300px] justify-between border-b border-[rgba(0,0,0,0.1)]">
          <span>RERA</span>
          <p className="font-semibold">Residential (Villa)</p>
        </div>
        <div className="flex w-[300px] justify-between border-b border-[rgba(0,0,0,0.1)]">
          <span>BERN</span>
          <p className="font-semibold">Furnished</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-10">
        <div className="font-bold">
        Tarkheesi Permit
        </div>
        <Image src="/svgs/barcode.svg" width={170} height={135} alt="svg" />
      </div>
    </div>
  );
};

export default RegulatoryInformationPage;
