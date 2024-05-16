
import SearchIconSvg from "../Svgs/SearchIconSvg";

const SearchListing = () => {
  return (
    <div className="flex items-center gap-3 rounded-full border px-3 py-2 w-full">
      <SearchIconSvg width={18} height={18} />
      <input
        className="outline-none focus:outline-none w-60 text-sm"
        type="search"
        name="listingsearch"
        id="listingsearch"
        placeholder="Search Listing"
      />
    </div>
  );
};

export default SearchListing;
