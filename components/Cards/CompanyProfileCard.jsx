import Image from "next/image";


const CompanyProfileCard = ({ role }) => {
  // const rolePascal = role.replace(/\w+/g, function (w) {
  //   return w[0].toUpperCase() + w.slice(1).toLowerCase();
  // });
  const rolePascal =
    role === "company"
      ? "Company"
      : role === "broker"
        ? "Broker"
        : role === "propertyowner"
          ? "Property Owner"
          : "Normal User";
  return (
    <div className="w-full rounded-lg p-4 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)]">
      <div className="flex justify-between">
        <Image src="/svgs/companymsg.svg" width={30} height={30} />
        <Image src="/svgs/companyprofile.svg" width={30} height={30} />
      </div>
      <div className="flex items-center justify-center">
        <Image
          className="h-[120px] w-[120px] rounded-lg"
          src="/imgs/prop-1.png"
          width={120}
          height={120}
        />
      </div>
      <div className="mt-4 text-center text-xl font-medium text-themetext">
        Gertrude Barton
      </div>
      <div className="flex items-center justify-center">
        <p className="mt-2 w-fit rounded-full bg-primary bg-opacity-20 px-2 py-[2px] text-xs font-semibold text-primary">
          {rolePascal}
        </p>
      </div>
      <div className="mt-5 flex justify-between px-8">
        <div className="flex gap-3">
          <div className="rounded-md bg-[rgba(190,190,190,0.12)] p-2">
            <Image src="/svgs/yellowtick.svg" width={20} height={20} />
          </div>
          <div className="flex flex-col">
            <div className="text-lg font-bold leading-5 text-themetext">03</div>
            <div className="text-xs text-themetext">Properties Sold</div>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="rounded-md bg-[rgba(190,190,190,0.12)] p-2">
            <Image src="/svgs/briefcase.svg" width={20} height={20} />
          </div>
          <div className="flex flex-col">
            <div className="text-lg font-bold leading-5 text-themetext">
              $1255.4
            </div>
            <div className="text-xs text-themetext">Revenue</div>
          </div>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-center gap-2">
        <Image src="/svgs/stars.svg" height={9} width={52} />
        <div className="text-xs text-themetext">4.0 (12 reviews)</div>
      </div>
      <div className="mt-8 border-b border-[rgba(0,0,0,0.1)] pb-2">
        <p className="text-xl font-bold">Details</p>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <p className="gap-2 font-semibold text-themetext">
          Username: <span className="font-normal">gertrude.dev</span>
        </p>
        <p className="gap-2 font-semibold text-themetext">
          Email: <span className="font-normal">gertrude@gmail.com</span>
        </p>
        <p className="gap-2 font-semibold text-themetext">
          Account Status: <span className="font-normal " style={{ color: "green" }}>Active</span>
        </p>
        <p className="gap-2 font-semibold text-themetext">
          Contact: <span className="font-normal">+1 (609) 933-44-22</span>
        </p>
        <p className="gap-2 font-semibold text-themetext">
          Language: <span className="font-normal">English</span>
        </p>
        <p className="gap-2 font-semibold text-themetext">
          Country: <span className="font-normal">Wake Island</span>
        </p>
      </div>
      <div className="flex justify-center">
        <button className="mt-9 rounded-full border-2 border-bloodred px-7 py-2     font-bold text-bloodred">
          Deactivate Account
        </button>
      </div>
    </div>
  );
};

export default CompanyProfileCard;
