import Image from "next/image";


const LandingLogo = () => {
  return (
    <Image
      src="/svgs/logo2.svg"
      width={84}
      height={78}
      alt="svg"
      quality={100}
    />
  );
};

export default LandingLogo;
