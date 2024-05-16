import Image from "next/image";


const RecieverMessage = ({ profilePic, messages }) => {
  return (
    <div className="w-[80%] min-h-fit flex flex-col">
      <div className="flex items-center gap-2">
        <Image src={profilePic} width={40} height={40} alt="profile" />
        <p className="rounded-full px-3 py-2 bg-white h-fit text-xs">
          {messages[0]}
        </p>
      </div>
      {messages.length > 1 &&
        messages.slice(1).map((message, index) => (
          <div className="flex items-center gap-2" key={index}>
            <Image
              className="rounded-full opacity-0"
              src={profilePic}
              width={40}
              height={40}
              alt="profile"
            />
            <p className="rounded-full px-3 py-2 bg-white h-fit text-xs">
              {message}
            </p>
          </div>
        ))}
    </div>
  );
};

export default RecieverMessage;
