import Image from "next/image";


const FeatureMembersCard = () => {
  return (
    <div className="w-full flex flex-col rounded-lg shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)]">
      <div className="px-5 py-6">
        <p className="font-bold pb-3">Featured Members:</p>
        <div className="flex flex-col mt-3 gap-5">
          <div className="flex gap-3 items-center">
            <Image src="/imgs/profile.png" width={40} height={40} alt="pic" />
            <div className="flex flex-col justify-center w-full">
              <p className="font-semibold text-sm">Steve Jobs</p>
              <p className="font-light text-xs">CEO of Apple</p>
            </div>
            <button className="border border-primary rounded-lg px-3 py-2 h-fit text-xs text-primary font-medium">
              Follow
            </button>
          </div>
          <div className="flex gap-3 items-center">
            <Image src="/imgs/profile.png" width={40} height={40} alt="pic" />
            <div className="flex flex-col justify-center w-full">
              <p className="font-semibold text-sm">Steve Jobs</p>
              <p className="font-light text-xs">CEO of Apple</p>
            </div>
            <button className="border border-primary rounded-lg px-3 py-2 h-fit text-xs text-primary font-medium">
              Follow
            </button>
          </div>
          <div className="flex gap-3 items-center">
            <Image src="/imgs/profile.png" width={40} height={40} alt="pic" />
            <div className="flex flex-col justify-center w-full">
              <p className="font-semibold text-sm">Steve Jobs</p>
              <p className="font-light text-xs">CEO of Apple</p>
            </div>
            <button className="border border-primary rounded-lg px-3 py-2 h-fit text-xs text-primary font-medium">
              Follow
            </button>
          </div>
        </div>
      </div>
      <button className="border-t border-[#DFDFDF] py-3 font-semibold text-primary text-xs">
        See all
      </button>
    </div>
  );
};

export default FeatureMembersCard;
