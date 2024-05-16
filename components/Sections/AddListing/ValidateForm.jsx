
import DropdownSvg from "../../Svgs/DropdownSvg";

const ValidateForm = ({ onPrev,onNext }) => {
  return (
    <form className="mt-4 flex flex-col gap-y-4" action="#">
      <div className="flex flex-col">
        <label className="font-manrope mx-11 mt-4 mb-6 font-medium text-base leading-6 text-[rgba(0,0,0,0.8)]">
          Developer of the property
        </label>
        <input
          className="font-manrope mx-8 -mt-5 bg-transparent border border-black border-opacity-10  w-[450px] rounded-full h-[41px] px-4 text-sm font-medium  focus:border focus:border-[rgba(0,0,0,0.30)] outline-none"
          type="text"
          id="Developer "
          placeholder="ex: 14"
        />
      </div>
      <div className="flex flex-col w-[450px]">
        <label className="font-manrope mx-11 mt-3 mb-6 font-medium text-base leading-6 text-[rgba(0,0,0,0.8)]">
          Ownership
        </label>
        <div className=" relative inline-block w-full">

        <select
          className="font-manrope mx-8 -mt-5 border w-full border-black border-opacity-10 rounded-full h-[41px] px-4 text-sm font-medium focus:border focus:border-[rgba(0,0,0,0.30)] outline-none appearance-none"
          id="ownership"
        >
          <option value="individual">Individual</option>
          <option value="corporate">Corporate</option>
          <option value="Freehold" selected>
            Freehold
          </option>
        </select>
        <div className="absolute top-[0.6rem] -right-5 flex items-center px-2 pointer-events-none">
      {/* Replace the following lie with your custom dropdown icon */}
      <DropdownSvg className="w-5 h-5 text-black" />
    </div>
      </div>
      </div>


      <div className="flex flex-col">
        <label className="font-manrope mx-11 mt-3 mb-6 font-medium text-base leading-6 text-[rgba(0,0,0,0.8)]">
          Plot area (in square feet)
        </label>
        <input
          className="font-manrope mx-8 -mt-5 bg-transparent border border-black border-opacity-10  w-[450px] rounded-full h-[41px] px-4 text-sm font-medium  focus:border focus:border-[rgba(0,0,0,0.30)] outline-none"
          type="text"
          id="plotArea"
          placeholder="ex: 220"
        />
      </div>
      <div className="flex flex-col">
        <label className="font-manrope mx-11 mt-3 mb-6 font-medium text-base leading-6 text-[rgba(0,0,0,0.8)]">
          Built-in-area(in square feet)
        </label>
        <input
          className="font-manrope mx-8 -mt-5 bg-transparent border border-black border-opacity-10  w-[450px] rounded-full h-[41px] px-4 text-sm font-medium focus:border focus:border-[rgba(0,0,0,0.30)] outline-none"
          type="text"
          id="BuiltInArea"
          placeholder="ex: 180"
        />
      </div>
      <div className="flex mx-8 gap-2 justify-end ">
        <button onClick={onPrev}  className="font-manrope rounded-full py-3 px-[5rem]  border border-[rgba(0,0,0,0.10)]   flex items-center justify-center text-sm font-semibold ">
          Previous
        </button>
        <button  onClick={onNext}className="font-manrope rounded-full py-3 px-[5.4rem]  bg-primary  border border-[rgba(0,0,0,0.10)]   flex items-center justify-center text-sm font-semibold ">
          Next
        </button>
      </div>
    </form>
  );
};
export default ValidateForm;
