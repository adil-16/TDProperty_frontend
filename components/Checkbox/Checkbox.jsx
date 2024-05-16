import Image from "next/image";

const Checkbox = ({ checked, setChecked, disabled }) => {
  return (
    <button
      className={`rounded w-[18px] h-[18px] shadow-[0px_2px_4px_0px_rgba(115,103,240,0.40)] ${
        checked ? "bg-secondary" : ""
      }`}
      onClick={() => !disabled && setChecked(!checked)}
    >
      {checked && (
        <Image
          src="/svgs/checksecondary.svg"
          alt="check"
          width={18}
          height={18}
        />
      )}
    </button>
  );
};

export default Checkbox;
