

const Star = ({ width, height, filled }) => {
  return (
    <svg
      width={width ? width : 26}
      height={height ? height : 26}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.9322 1.5979L16.4602 9.11442L24.3492 10.3198L18.6407 16.1705L19.9883 24.432L12.9322 20.5315L5.87606 24.432L7.22366 16.1705L1.51514 10.3198L9.40413 9.11442L12.9322 1.5979Z"
        fill={filled ? "#FDCC0D" : "none"}
        stroke="#FDCC0D"
        strokeWidth="1.36296"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Star;
