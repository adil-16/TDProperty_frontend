import Image from "next/image";


const NoteCard = () => {
  return (
    <div className="flex w-[400px] flex-col gap-3 rounded-[10px] px-4 py-5 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/svgs/worknote/noteicon.svg"
            width={24}
            height={24}
            alt="svg"
          />
          <h2 className="text-lg font-semibold">Note Title</h2>
        </div>
        <div className="flex items-center gap-3">
          <button>
            <Image
              src="/svgs/worknote/noteediticon.svg"
              width={16}
              height={16}
              alt="svg"
            />
          </button>
          <Image
            src="/svgs/worknote/notegreentick.svg"
            width={18}
            height={18}
            alt="svg"
          />
        </div>
      </div>
      <p className="leading-[1.38rem] text-darkgray">
        Lorem ispum Lorem ispumLorem ispumLorem fsd fds ispumLorem ispumLorem
        ispumLorem ispum Loremc uLorem ispufd ff.
      </p>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <Image
            src="/svgs/worknote/noteprofile.svg"
            width={18}
            height={20}
            alt="svg"
          />
          <h3 className="text-sm font-medium text-[#171C26]">Saim Ijaz</h3>
        </div>
        <button className="text-xs font-bold text-primary underline">
          View Profile
        </button>
      </div>
      <div className="flex gap-5">
        <div className="flex items-center gap-1">
          <Image
            src="/svgs/worknote/whatsappicon.svg"
            width={25}
            height={25}
            alt="svg"
          />
          <h3 className="text-sm font-medium text-[#171C26]">+92346445522</h3>
        </div>
        <div className="flex items-center gap-1">
          <Image
            src="/svgs/worknote/phoneicon.svg"
            width={28}
            height={28}
            alt="svg"
          />
          <h3 className="text-sm font-medium text-[#171C26]">+92346445522</h3>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
