import BackButton from "@/components/Buttons/BackButton";


const NewPasswordSection = () => {
  return (
    <div className="flex flex-col items-center py-20 px-10">
      <div className="bg-[#DEDEDE] w-[160px] h-[5px] rounded-full">
        <div className="bg-primary w-11/12 h-[5px] rounded-full"></div>
      </div>
      <div className="w-full mt-10">
        <BackButton />
      </div>
      <div className="w-full text-[#525252] px-2 text-lg mt-3">
        Enter your new Password
      </div>
      <div className="w-full mt-5">
        <form className="flex flex-col pr-12" action="/login">
          <label className="font-medium mb-2 mx-2" htmlFor="password">
            Password
          </label>
          <input
            className="bg-transparent focus:outline-none outline-none border border-[rgba(0,0,0,0.1)] py-2 px-3 rounded-full text-themetext font-medium text-sm"
            type="password"
            name="password"
            id="password"
            placeholder="New Password"
          />
          <label className="font-medium mt-8 mb-2 mx-2" htmlFor="password">
            Confirm Password
          </label>
          <input
            className="bg-transparent focus:outline-none outline-none border border-[rgba(0,0,0,0.1)] py-2 px-3 rounded-full text-themetext font-medium text-sm"
            type="confirmpassword"
            name="confirmpassword"
            id="confirmpassword"
            placeholder="Confirm Password"
          />
          <input
            className="bg-primary w-full mt-10 rounded-full font-bold py-3 text-sm"
            type="submit"
            value="Reset"
          />
        </form>
      </div>
    </div>
  );
};

export default NewPasswordSection;
