import SignUpForm from "@/components/Forms/SignUpForm";
import CompanyLogo from "@/components/Logos/CompanyLogo";
import Image from "next/image";


const SignUp = () => {
  return (
    <main className="bg-[#F3F4F6] grid grid-cols-2 h-full p-6">
      {/* Left side */}
      <div className="px-14">
        <CompanyLogo />
        <div className="pl-14 pr-20 py-20">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold">Register</h1>
            <a href="/login" className="text-primary">
              Login
            </a>
          </div>
          <SignUpForm />
        </div>
      </div>
      {/* Right Side */}
      <div className="bg-white rounded-[22px] flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold leading-[44px] mb-2 mt-32">
          Create an account and get started!
        </h1>
        <p className="text-lg leading-6 font-medium text-center max-w-lg mb-14">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae
        </p>
        <Image className="mb-10" src="./svgs/signup.svg" width={518} height={518} alt="svg" />
      </div>
    </main>
  );
};

export default SignUp;
