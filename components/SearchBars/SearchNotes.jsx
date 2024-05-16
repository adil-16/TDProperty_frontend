
import SearchIconSvg from "../Svgs/SearchIconSvg";

const SearchNotes = () => {
  return (
    <div className="flex h-[46px] w-[280px] items-center gap-3 rounded-full px-4 py-2 shadow-[0px_2px_8px_0px_rgba(153,153,153,0.20)]">
      <SearchIconSvg width={18} height={18} />
      <input
        className="w-60 text-sm outline-none focus:outline-none"
        type="search"
        name="listingsearch"
        id="listingsearch"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchNotes;
