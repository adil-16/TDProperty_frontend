

const PrimaryButton = ({ title, className, onClick }) => {
  return (
    <button
      className={`bg-primary  px-10 py-3 rounded-full font-semibold ${className}`}
      onClick={onClick}
    >
        {title}
    </button>
  );
};

export default PrimaryButton;
