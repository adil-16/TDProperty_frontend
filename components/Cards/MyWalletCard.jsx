

const MyWalletCard = () => {
  return (
    <div className="w-full shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] p-4 rounded-lg flex flex-col gap-5">
      <div className="text-xl font-bold">My Wallet</div>
      <div className="flex flex-col items-center justify-center rounded-lg bg-[linear-gradient(104deg,#F79F36_10%,rgba(202,129,43,0.70)_98.92%)] w-full py-8">
        <div className="text-sm">Balance</div>
        <div className="text-3xl font-bold">$ 152.12</div>
      </div>
      <div className="flex justify-center items-center w-full">
        <button className="border border-[rgba(0,0,0,0.2)] hover:border-[rgba(0,0,0,0.6)] text-primary px-10 py-2 rounded-full">
          Earn More
        </button>
      </div>
    </div>
  );
};

export default MyWalletCard;
