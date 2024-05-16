import ManualSearchButton from "@/components/Buttons/ManualSearchButton";
import AboutSection from "@/components/Sections/HomePage/AboutSection";
import ImportantNewsSections from "@/components/Sections/HomePage/ImportantNewsSections";
import RecentlyViewedSection from "@/components/Sections/HomePage/RecentlyViewedSection";
import RecommendedPropertiesSection from "@/components/Sections/HomePage/RecommendedPropertiesSection";
import ServiceSection from "@/components/Sections/HomePage/ServiceSection";
import ManualSearchIcon from "@/components/Svgs/home/ManualSearchIcon";
import SearchByRangeSvg from "@/components/Svgs/home/SearchByRangeSvg";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({ subsets: ["latin"] });

const Homepage = () => {
  return (
    <div className="flex flex-col">
      {/* Top Section Banner */}
      <div className="flex w-full flex-col justify-between bg-[url('/imgs/home-bg.png')] bg-cover bg-no-repeat">
        <div className="flex flex-col gap-4 px-[145px] py-[107px]">
          <div className="text-[100px] font-bold leading-[111px]">
            <p className={montserrat.className}>
              Find your <br /> dream home
            </p>
          </div>
          <div className="text-2xl text-[#545454]">
            This is where you can find a dream home of your <br /> choice
            without stress
          </div>
        </div>
        <div className="flex w-[1080px] flex-col items-center self-center rounded-3xl bg-secondary py-6">
          <h2 className="text-2xl text-primary">Search a property</h2>
          <p className="text-center text-[18px] text-white text-opacity-70">
            Find Your Ideal Home - Tap into AI-powered searches, chat with our
            virtual assistant, or use precise <br /> filters for an easy and
            accurate home-hunting journey. Begin now!
          </p>
          <div className="mt-8 flex gap-4">
            <button className="flex w-[313px] items-center justify-center gap-2 rounded-full bg-white py-4 text-[20px]  font-medium text-[#959595]">
              <SearchByRangeSvg />
              Search by Range
            </button>
            <ManualSearchButton />
            <button className="flex w-[313px] items-center justify-center gap-2 rounded-full bg-white py-4 text-[20px]  font-medium text-[#959595]">
              <Image src="/svgs/aiface.svg" width={26} height={25} alt="svg" />
              Search by Ai Agent
            </button>
          </div>
        </div>
      </div>
      <ServiceSection />
      <ImportantNewsSections />
      <RecentlyViewedSection />
      <RecommendedPropertiesSection />
      <AboutSection />
    </div>
  );
};

export default Homepage;
