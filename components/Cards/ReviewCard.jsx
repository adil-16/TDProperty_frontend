import Image from "next/image";


const ReviewCard = () => {
  return (
    <div className="w-[47%] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)] min-h-[200px] rounded-lg">
      <div className="flex items-center justify-between px-5 py-4">
        <div className="flex gap-2 items-center justify-center">
          <Image src="/imgs/profile.png" width={44} height={44} alt="svg" />
          <p className="text-lg font-semibold">Mr. Bunda</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs font-medium text-thememutedtext">1 week ago</p>
          <Image src="/svgs/stars.svg" width={60} height={10} />
        </div>
      </div>
      <div className="px-5 py-4 leading-snug border-b border-[rgba(0,0,0,0.1)]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus est
        nibh, tempus ac nunc non, suscipit ultrices dolor. Curabitur quis sapien
        nec erat bibendum egestas.
      </div>
      <div className="px-5 py-4 flex items-center gap-2">
        <div className="bg-primary bg-opacity-30 border border-primary rounded-full p-1 w-fit flex items-center justify-center gap-1">
          <Image src="/imgs/profile.png" width={28} height={28} alt="svg" />
          <p className="text-xs font-medium">John David</p>
        </div>
        <Image src="/svgs/stars.svg" width={52} height={9} />
        <div className="text-xs text-themetext font-semibold">4.0 (12 reviews)</div>
      </div>
    </div>
  );
};

export default ReviewCard;
