

export default function OptionButton() {
  return (
    <div>
      <div className="bg mx-auto flex h-[52px] w-[390px] flex-row items-center justify-center gap-1 rounded-full border border-[1px_solid_rgba(0,0,0,0.20)]">
        <div className="mx-auto flex h-[40px] w-[184px] items-center justify-center gap-1 rounded-full border border-[1px_solid_rgba(0,0,0,0.20)] bg-primary text-sm font-semibold">
          <span>Recent Searches</span>
        </div>
        <div className="mx-auto flex h-[40px] w-[174px] items-center justify-center gap-1 rounded-full text-sm font-semibold text-[#A1A5B7]">
          <span>Viewed</span>
        </div>
      </div>
    </div>
  );
}
