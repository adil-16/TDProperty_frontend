
const RegulatoryForm = ({ onPrev }) => {
  return (
    <form className="mt-4 flex flex-col gap-y-4" action="#">
      <div className="flex flex-col">
        <label className="font-manrope mx-11 mt-4 mb-6 font-medium text-base leading-6 text-[rgba(0,0,0,0.8)]">
          Permit number
        </label>
        <input
          className=" font-manrope mx-8 -mt-5 bg-transparent border border-black border-opacity-10  w-[450px] rounded-full h-[41px] px-4 text-sm font-medium  focus:border   focus:border-[rgba(0,0,0,0.30)] outline-none"
          type=""
          id="PermitNumber"
          placeholder="ex: 156515122315"
        />
      </div>
      <div className="flex flex-col">
        <label className="font-manrope mx-11 mt-3 mb-6 font-medium text-base leading-6 text-[rgba(0,0,0,0.8)]">
          DED
        </label>
        <input
          className=" font-manrope mx-8 -mt-5 bg-transparent border border-black border-opacity-10  w-[450px] rounded-full h-[41px] px-4 text-sm font-medium focus:border focus:border-[rgba(0,0,0,0.30)] outline-none"
          type="text"
          id="ded"
          placeholder="ex: 156515122315"
        />
      </div>
      <div className="flex flex-col">
        <label className="font-manrope mx-11 mt-3 mb-6 font-medium text-base leading-6 text-[rgba(0,0,0,0.8)]">
          RERA
        </label>
        <input
          className=" font-manrope mx-8 -mt-5 bg-transparent border border-black border-opacity-10  w-[450px] rounded-full h-[41px] px-4 text-sm font-medium  focus:border focus:border-[rgba(0,0,0,0.30)] outline-none"
          type="text"
          id="RERA"
          placeholder="ex: 156515122315"
        />
      </div>
      <div className="flex flex-col">
        <label
          className="font-manrope mx-11 mt-3 mb-6 font-medium text-base leading-6 text-[rgba(0,0,0,0.8)]"
        >
          BRN
        </label>
        <input
          className=" font-manrope mx-8 -mt-5 bg-transparent border border-black border-opacity-10  w-[450px] rounded-full h-[41px] px-4 text-sm font-mediumcus focus:border focus:border-[rgba(0,0,0,0.30)] outline-none"
          type="text"
          id="BRN"
          placeholder="ex: 156515122315"
        />
      </div>
      <div className="flex mx-8 gap-2 justify-end ">
      <button           onClick={onPrev} className="font-manrope rounded-full py-3 px-[5rem]  border border-[rgba(0,0,0,0.10)]   flex items-center justify-center text-sm font-semibold ">Previous</button>
      <button className="font-manrope rounded-full py-3 px-[5.4rem]  bg-primary  border border-[rgba(0,0,0,0.10)]   flex items-center justify-center text-sm font-semibold ">  Finish  </button>


      </div>
    </form>
  );
};
export default RegulatoryForm;
