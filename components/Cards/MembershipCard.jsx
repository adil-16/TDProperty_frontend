
import MembershipModal from "../Modals/MembershipModal";

const MembershipCard = ({ title, subtitle, pricing, children }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl shadow-[0px_4px_10px_rgba(0,0,0,0.08)] max-w-[300px] h-fit">
      <h1 className="font-black text-3xl mt-6 uppercase">{title}</h1>
      <h2 className="text-[#747474] font-bold text-xs mt-3">{subtitle}</h2>
      <div className="flex items-start font-semibold my-5">
        <span className="text-sm mt-1 mx-1">$</span>
        <span className="text-4xl font-bold font-sans">{pricing}</span>
        <span className="self-end">/ month</span>
      </div>
      <MembershipModal />
      <div className="border-t border-[rgba(0,0,0,0.1)]">{children}</div>
    </div>
  );
};

export default MembershipCard;
