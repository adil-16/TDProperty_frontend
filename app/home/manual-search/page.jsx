import ManualSearchSection from "@/components/Sections/ManualSearch/ManualSearchSection";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({ subsets: ["latin"] });

const ManualSearchPage = () => {
  return (
    <div className="mb-10 flex flex-col">
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
        <div className="flex w-[1080px] flex-col items-center self-center rounded-3xl bg-white py-6 shadow-[0px_5px_50px_0px_rgba(0,0,0,0.05)]">
          <h2 className="mb-[40px] text-[24px]">Manual Search</h2>
          <ManualSearchSection />
          <div className="mt-[28px] flex w-full items-center gap-2 px-7 text-[18px]">
            <p> Recommendations</p>
            <Image
              src="/svgs/manual-search/chevron-down.svg"
              width={12}
              height={7}
              alt="svg"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-[101px] mt-[90px] px-[100px]">
        <div className="flex flex-col">
          <h1 className="text-[30px] font-semibold">2200+</h1>
          <span className="text-[26px] text-[#6B6B6B]">Membership</span>
        </div>
        <div className="h-[51px] w-[2px] bg-[#D6D6D6]"></div>
        <div className="flex flex-col">
          <h1 className="text-[30px] font-semibold">2200+</h1>
          <span className="text-[26px] text-[#6B6B6B]">Membership</span>
        </div>
        <div className="h-[51px] w-[2px] bg-[#D6D6D6]"></div>
        <div className="flex flex-col">
          <h1 className="text-[30px] font-semibold">2200+</h1>
          <span className="text-[26px] text-[#6B6B6B]">Membership</span>
        </div>
      </div>
     <div>
        <div className="flex items-center justify-between gap-[101px] mt-[60px] px-[100px]">
        <p className="text-[18px] font-semibold">
        Popular
        </p>
        
        </div>
        <div className="flex items-center justify-between mt-[5px] px-[100px]">
        <h1 className="text-[26px] font-bold">
        Our Popular Residence
        </h1>
        <p className="flex flex-row text-[15px] font-semibold">
        Explore All
        <span>
        <svg class="h-6 w-6 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="5" y1="12" x2="19" y2="12" />  <line x1="13" y1="18" x2="19" y2="12" />  <line x1="13" y1="6" x2="19" y2="12" /></svg>
        </span>
        </p>

        </div>
        <div>
          Popular residence from Backend
        </div>
     </div>
    </div>
  );
};

export default ManualSearchPage;
