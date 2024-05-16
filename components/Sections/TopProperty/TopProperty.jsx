
import Image from "next/image";

const TopProperty = () => {
  return (
    <div className="flex shadow-[0px_3.4799px_8.69975px_0px_rgba(0,0,0,0.08)] w-full justify-between p-2 rounded">
      <div className="flex items-center gap-2">
        <Image
          className="h-[26px] w-[26px]"
          src="/imgs/property.png"
          alt="property"
          width={26}
          height={26}
        />
        <div className="flex flex-col">
          <p className="text-secondary text-xs font-medium">City Road</p>
          <p className="text-darkgray text-xs">New York, USA</p>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <Image
          src="/svgs/rightarrowtilt.svg"
          alt="rightarrowtilt"
          width={10}
          height={10}
        />
        <p className="text-secondary text-xs font-semibold">90%</p>
      </div>
    </div>
  );
};

export default TopProperty;
