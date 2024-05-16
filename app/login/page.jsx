import LoginForm from "@/components/Forms/LoginForm";
import CompanyLogo from "@/components/Logos/CompanyLogo";
import Image from "next/image";


const LoginPage = () => {
  return (
    <main className="bg-[#F3F4F6] grid grid-cols-2 h-full p-6">
      {/* Left side */}
      <div className="px-14">
        <CompanyLogo />
        <div className="pl-14 pr-20 py-20">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold">Login</h1>
            <a href="/signup" className="text-primary">
              Register
            </a>
          </div>
          <LoginForm />
          <a href="/login/forgetpassword" className="text-primary mx-2">
            Forget Password
          </a>
        </div>
      </div>
      {/* Right Side */}
      <div className="bg-white rounded-[22px] flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold leading-[44px] mb-2 mt-20">
          Welcome Back!
        </h1>
        <p className="text-lg leading-6 font-medium text-center max-w-lg mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae
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

export default LoginPage;
