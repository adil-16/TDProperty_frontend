import Image from "next/image";
import CompanyLogo from "../Logos/CompanyLogo";
import FacebookIcon from "../Svgs/footer/FacebookIcon";
import TwitterIcon from "../Svgs/footer/TwitterIcon";
import LinkedInIcon from "../Svgs/footer/LinkedInIcon";

const CompanyFooter = () => {
  return (
    <footer className="w-full bg-secondary text-white">
      <div className="flex h-[440px] items-start justify-between pl-28 pr-40 pt-28">
        <div className="flex flex-col gap-5">
          <CompanyLogo />
          <div className="px-3 leading-7">
            Our goal is at the <br /> heart of all that we do.
          </div>
          <div className="flex items-center gap-3 px-3">
            <FacebookIcon />
            <TwitterIcon />
            <LinkedInIcon />
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h3 className="font-semibold">Page</h3>
          <div className="flex flex-col items-start gap-6 font-medium">
            <button>Homepage</button>
            <button>Listing</button>
            <button>Pricing</button>
            <button>Community</button>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h3 className="font-semibold">Support</h3>
          <div className="flex flex-col items-start gap-6 font-medium">
            <button>FAQ's</button>
            <button>Support Center</button>
            <button>Security</button>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h3 className="font-semibold">Contact</h3>
          <div className="flex flex-col items-start gap-6">
            <button>+234- 70-1449-8006</button>
            <button>homie@gmail.com</button>
            <button>23, Ali express way lagos, Nigeria</button>
          </div>
        </div>
      </div>
      <div className="flex justify-center border-t-[0.7px] border-white py-5">
        <Image
          src="/svgs/footer/copyright.svg"
          width={13}
          height={13}
          alt="svg"
        />
        <span className="text-xs text-white">2022. All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default CompanyFooter;
