import Image from "next/image";


const SenderMessage = ({ profilePic, messages }) => {
  return (
    <div className="w-[80%] min-h-fit self-end flex flex-col">
      <div className="flex justify-end items-center gap-2">
        <p className="rounded-full px-3 py-2 bg-secondary text-white h-fit font-extralight text-xs">
          {messages[0]}
        </p>
        <Image src={profilePic} width={40} height={40} alt="profile" />
      </div>
      {messages.length > 1 &&
        messages.slice(1).map((message, index) => (
          <div className="flex justify-end items-center gap-2" key={index}>
            <p className="rounded-full px-3 py-2 bg-secondary text-white h-fit font-extralight text-xs">
              {message}
            </p>
            <Image
              className="rounded-full opacity-0"
              src={profilePic}
              width={40}
              height={40}
              alt="profile"
            />
          </div>
        ))}
    </div>
  );
};

export default SenderMessage;
