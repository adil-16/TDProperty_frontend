import Image from "next/image";


const NotificationLink = ({ img, text, datetime }) => {
  return (
    <div className="flex min-h-[62px] px-5 items-center gap-x-4 border-b border-[#EBE9F1]">
      <Image
        className="rounded-full w-8 h-8"
        src={img}
        height={32}
        width={32}
        alt="svg"
      />
      <div className="flex flex-col text-sm">
        <span className="text-themetext ">{text}</span>
        <span className="text-thememutedtext">{datetime}</span>
      </div>
    </div>
  );
};

export default NotificationLink;
