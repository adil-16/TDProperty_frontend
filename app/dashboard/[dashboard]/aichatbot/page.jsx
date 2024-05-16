import Image from "next/image";


const AiChatBotPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full py-20">
      <Image
        src="/svgs/aichatbot.svg"
        width={730}
        height={730}
        alt="aichatbot"
      />
      <p className="text-center text-xl">
        Meet Chatbot, your personal AI language model & discover the <br />{" "}
        benefits of using Chatbot_AI for language tasks
      </p>
      <button className="px-20 py-3 rounded-full text-sm mt-10 bg-primary font-bold">Start Chat Now</button>
    </div>
  );
};

export default AiChatBotPage;
