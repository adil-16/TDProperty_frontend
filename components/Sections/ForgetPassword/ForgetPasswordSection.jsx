import BackButton from "@/components/Buttons/BackButton";


const ForgetPasswordSection = () => {
  return (
    <div className="flex flex-col items-center py-20 px-10">
      <div className="bg-[#DEDEDE] w-[160px] h-[5px] rounded-full">
        <div className="bg-primary w-1/3 h-[5px] rounded-full"></div>
      </div>
      <div className="w-full mt-10">
        <BackButton />
      </div>
      <div className="w-full text-[#525252] px-2 text-lg mt-3">
        Enter your email address. A 4-digit code will be sent to the entered
        Email.
      </div>
      <div className="w-full mt-5">
        <form
          className="flex flex-col pr-12"
          action="/login/forgetpassword/verifycode"
        >
          <label className="font-medium mb-2 mx-2" htmlFor="email">
            Email
          </label>
          <input
            className="bg-transparent focus:outline-none outline-none border border-[rgba(0,0,0,0.1)] py-2 px-3 rounded-full text-themetext font-medium text-sm"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
          />
          <input
            className="bg-primary w-full mt-10 rounded-full font-bold py-3 text-sm"
            type="submit"
            value="Send Code"
          />
        </form>
      </div>
    </div>
  );
};

export default ForgetPasswordSection;
