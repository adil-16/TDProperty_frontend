import Image from "next/image";


const ChatOpenerButton = ({ selected }) => {
  return (
    <div
      className={`flex items-center px-3 py-2 gap-2 cursor-pointer ${
        selected ? "bg-secondary" : "hover:bg-[#F8F8F8]"
      }`}
    >
      <div className="relative w-[45px] h-[40px]">
        <Image
          src="/imgs/profile-2.png"
          height={40}
          width={40}
          alt="profileimg"
        />
        <div className="absolute bottom-0 right-0 h-[13px] w-[13px] flex justify-center items-center bg-white rounded-full">
          <div className="bg-primary h-[8px] w-[8px] rounded-full"></div>
        </div>
      </div>
      <div className="flex flex-col w-full justify-center">
        <div className="flex justify-between items-center w-full">
          <p
            className={`${
              selected ? "text-white" : "text-themetext"
            } text-sm font-medium`}
          >
            Helena Reynolds
          </p>
          <p
            className={`font-light ${
              selected ? "text-white" : "text-thememutedtext"
            } text-xs`}
          >
            10:02AM
          </p>
        </div>
        <div className="flex justify-between items-center w-full">
          <p className="font-light text-thememutedtext text-[0.8rem]">
            How to set intentions ...
          </p>
          {!selected && (
            <div className="rounded-full flex justify-center items-center bg-primary text-white text-xs h-[18px] w-[18px]">
              <span className="text-white font-medium">3</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatOpenerButton;
