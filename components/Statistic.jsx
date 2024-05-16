import Image from "next/image";


const Statistic = ({ title, subtitle, icon, bgcolor }) => {
  return (
    <div className="flex items-center gap-x-4">
      <div
        className={`h-12 w-12 flex items-center justify-center rounded-full bg-opacity-10`}
        style={{
          backgroundColor: bgcolor,
        }}
      >
        <Image src={icon} width={20} height={20} alt="icon" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-bold">{title}</p>
        <small className="text-darkgray text-xs">{subtitle}</small>
      </div>
    </div>
  );
};

export default Statistic;
