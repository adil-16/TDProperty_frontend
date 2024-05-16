const Dropdown = ({
  dropButton,
  dropContent,
  showDropdown,
  setShowDropdown,
  dropRef,
  fullWidth,
}) => {
  return (
    <div
      className={`relative z-50 flex ${!fullWidth && "w-fit"}`}
      ref={dropRef}
    >
      <div
        className="w-full cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {dropButton}
      </div>
      {showDropdown && dropContent}
    </div>
  );
};

export default Dropdown;
