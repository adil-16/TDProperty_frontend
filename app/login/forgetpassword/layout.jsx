import CompanyLogo from "@/components/Logos/CompanyLogo";
import ForgetPasswordSection from "@/components/Sections/ForgetPassword/ForgetPasswordSection";
import Image from "next/image";

const ForgetPasswordLayout = () => {
  return (
    <main className="grid h-full lg:grid-cols-2 sm:grid-cols-1 bg-[#F3F4F6] p-6">
      {/* Left side */}
      <div className="px-14 order-2 lg:order-1">
        <CompanyLogo />
        <ForgetPasswordSection />
      </div>
      {/* Right Side */}
      <div className="flex flex-col items-center justify-center rounded-[22px] bg-white order-1 lg:order-2">
        <h1 className="mb-1 mt-5 lg:mt-10 text-2xl lg:text-3xl font-bold leading-[36px] lg:leading-[44px]">
          Forgot Your Password!
        </h1>
        <p className="max-w-lg text-center text-md lg:text-lg font-medium leading-6 text-[rgba(0,0,0,0.7)]">
          Do not worry we got you
        </p>
        <Image
          className=""
          src="/svgs/login.svg"
          width={318} // Adjusted image width for small screens
          height={318} // Adjusted image height for small screens
          alt="login"
        />
      </div>
    </main>
  );
};

export default ForgetPasswordLayout;
