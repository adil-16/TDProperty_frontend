import CompanyLogo from "@/components/Logos/CompanyLogo";
import NewPasswordSection from "@/components/Sections/ForgetPassword/NewPasswordSection";
import Image from "next/image";


const NewPasswordPage = () => {
  return (
    <main className="bg-[#F3F4F6] grid grid-cols-2 h-full p-6">
      {/* Left side */}
      <div className="px-14">
        <CompanyLogo />
        <NewPasswordSection />
      </div>
      {/* Right Side */}
      <div className="bg-white rounded-[22px] flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold leading-[44px] mb-2 mt-20">
          Forgot Your Password!
        </h1>
        <p className="text-lg leading-6 text-[rgba(0,0,0,0.7)] font-medium text-center max-w-lg mb-10">
          Do not worry we got you
        </p>
        <Image
          className="mb-10"
          src="/svgs/login.svg"
          width={518}
          height={518}
          alt="login"
        />
      </div>
    </main>
  );
};

export default NewPasswordPage;
