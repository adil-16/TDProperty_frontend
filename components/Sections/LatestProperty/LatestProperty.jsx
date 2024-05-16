
import Image from "next/image";

const LatestProperty = ({ property, current }) => {
  return (
    <div className={`flex gap-3 ${!current && "hidden"}`}>
      <Image className="rounded" src={property.image} alt="property" width={275} height={186} />
      <div className="flex flex-col">
        <h1 className="text-lg font-semibold">{property.title}</h1>
        <div className="flex items-center gap-[2px]">
          <Image
            className="pt-[1px]"
            src="/svgs/location.svg"
            width={8}
            height={8}
            alt="location"
          />
          <p className="text-[11px]">{property.address}</p>
        </div>
        <div className="rounded-full text-center bg-primary w-[72px] text-[11px] mt-2">
          {property.price}
        </div>
        <div className="max-w-lg text-sm mt-2 leading-[1.2rem]">
          {property.description}
        </div>
        <div className="flex items-center mt-3 gap-5">
          <div className="flex gap-2 items-center">
            <Image src="/svgs/bed.svg" width={12} height={12} alt="svg" />
            <small>{property.beds} beds</small>
          </div>
          <div className="flex gap-2 items-center">
            <Image src="/svgs/bath.svg" width={12} height={12} alt="svg" />
            <small>{property.baths} bath</small>
          </div>
          <div className="flex gap-2 items-center">
            <Image src="/svgs/triangle.svg" width={12} height={12} alt="svg" />
            <small>{property.area}ft</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProperty;
