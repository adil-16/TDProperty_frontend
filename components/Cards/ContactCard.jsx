import Image from "next/image";

import BookmarkSvg from "../Svgs/BookmarkSvg";
import MessageSvg from "../Svgs/MessageSvg";
import CallSvg from "../Svgs/CallSvg";
import WhatsappRoundedSvg from "../Svgs/WhatsappRoundedSvg";
import MailSvg from "../Svgs/MailSvg";

const ContactCard = () => {
  return (
    <div>
      <h2 className="font-bold text-xl">Contact</h2>
      <div className="flex flex-col justify-center items-center gap-5 px-4 pt-4 pb-2 mt-2 border border-[rgba(0,0,0,0.10)] rounded-2xl max-w-full">
        <div className="flex justify-center items-center gap-3">
          <Image src="/imgs/profile-2.png" width={78} height={78} alt="png" />
          <div className="flex flex-col gap-1">
            <h4 className="font-bold w-3/4 text-sm">
              Noha Mohamed Abdel Rehman
            </h4>
            <div className="flex gap-1">
              <Image src="/svgs/stars.svg" width={52} height={8} alt="svg" />
              <small className="text-[10px]">4.0 (12 reviews)</small>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="flex gap-1 justify-center items-center bg-primary rounded-full px-6 text-sm py-2">
            <MailSvg />
            <span className="font-medium">Email</span>
          </button>
          <button className="rounded-full p-3 h-11 w-11 flex items-center justify-center border border-[rgba(0,0,0,0.20)]">
            <MessageSvg />
          </button>
          <button className="rounded-full p-3 h-11 w-11 flex items-center justify-center border border-[rgba(0,0,0,0.20)]">
            <CallSvg />
          </button>
          <button>
            <WhatsappRoundedSvg />
          </button>
        </div>
        <button className="flex border-t pt-2 border-[rgba(0,0,0,0.20)] text-primary w-full justify-end">
          View all listings {">"}
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
