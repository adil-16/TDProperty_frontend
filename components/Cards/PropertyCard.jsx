"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import Star from "../Svgs/Star";
import MessageSvg from "../Svgs/MessageSvg";
import CallSvg from "../Svgs/CallSvg";
import WhatsappRoundedSvg from "../Svgs/WhatsappRoundedSvg";
import Bookmark2Svg from "../Svgs/Bookmark2Svg";
import BookmarkSvg from "../Svgs/BookmarkSvg";
import useMediaQuery from '@mui/material/useMediaQuery';

const PropertyCard = ({
  id,
  image,
  title,
  desc,
  address,
  bedrooms,
  type,
  view,
  redirectUrl,
  cardSize,
  scale,
  CompanyProfile = false,
}) => {
  const router = useRouter();
  const pathname = usePathname();


  const isSmallScreen =  useMediaQuery('(max-width:1155px)');

  const currentPageName = pathname.split("/")[1];
  const handleClick = () => {
    router.push(`/${currentPageName}/${redirectUrl}/${id}`);
  };


  // Check if the URL contains 'propertyownerprofile'
  const property = pathname.includes("propertyownerprofile");

  return (
    <div
      className={`flex ${
        view === "list"
          ? "flex-row items-center justify-center gap-5"
          : "flex-col"
      } rounded-[20px] border border-[rgba(0,0,0,0.20)] px-4 py-[18px] ${
        view === "list" ? "w-full" : "max-w-fit"
      } ${scale ? `scale-${scale} w-fit` : `scale-100`}`}
    >
      <div className="flex">
        <Image
          className={`rounded-2xl ${view !== "list" && ""}`}
          src={image}
          width={305}
          height={182}
          alt="img"
        />
        <button className="absolute m-2 flex h-12 w-12 items-center justify-center rounded-full bg-white bg-opacity-90 hover:bg-opacity-100">
          <BookmarkSvg />
        </button>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <div
            className={`flex ${
              view === "list"
                ? "justify-start gap-2"
                : "mt-5 w-full justify-between"
            } items-center`}
          >
            <h1
              className={`${
                view === "list" && cardSize !== "small" ? "text-2xl" : "text-l"
              } min-w-fit font-semibold`}
            >
              {title}
            </h1>
           {!CompanyProfile && <> <p
              className={`h-fit rounded-lg bg-[rgba(31,76,107,0.69)] px-2 py-1 text-xs font-bold text-white ${
                view === "list" ? "ml-3" : "ml-0"
              }`}
            >
              $370<span className="text-[0.5rem] font-normal">/month</span>
            </p>
            <p
              className={`font-semibold text-primary ${
                view !== "list" && "hidden"
              }`}
            >
              Rent
            </p>
            </>}
           
            {
              !property && cardSize !== "small" && view === "list" &&  (
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      <Image
                        src="/imgs/profile.png"
                        width={49}
                        height={49}
                        alt="svg"
                      />
                      <div className="flex flex-col justify-center gap-1">
                        <span className="max-w-[110px] text-[11px] font-semibold leading-3">
                          Noha Mohamed Abdelaziz
                        </span>
                        <div className="flex gap-1">
                          <Image
                            src="/svgs/stars.svg"
                            width={30}
                            height={8}
                            alt="stars"
                          />
                          <span className="text-[8px] leading-3 text-themetext">
                            4.0 (12 reviews)
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={`flex ${isSmallScreen ? 'flex-col' : 'justify-end'} gap-3`}>
                      <button className="flex h-10 w-10 items-center justify-center rounded-full border border-themetext">
                        <MessageSvg />
                      </button>
                      <button className="flex h-10 w-10 items-center justify-center rounded-full border border-themetext">
                        <CallSvg />
                      </button>
                      <button className="flex h-10 w-10 items-center justify-center rounded-full">
                        <WhatsappRoundedSvg />
                      </button>
                    </div>
                  </div>
                </div>
              )
            }

            

          </div>
         
          <button
            className={`${
              view === "list" && cardSize === "small"
                ? "w-fit px-3 py-2 text-sm"
                : view === "list" && cardSize !== "small"
                ? "hidden"
                : "hidden"
            } rounded-full border border-[rgba(0,0,0,0.40)] font-semibold hover:border-black`}
            onClick={() => handleClick()}
          >
            View listing details
          </button>
        </div>
        { CompanyProfile && 
              <div style={{
                display:'flex' , 
                flexDirection : 'row',
                justifyContent:'center'
              
              }}> <p
              className={`h-fit rounded-lg bg-[rgba(31,76,107,0.69)] px-2 py-1 text-xs font-bold text-white ${
                view === "list" ? "ml-3" : "ml-0"
              }`}
            >
              $370<span className="text-[0.5rem] font-normal">/month</span>
            </p>
            <p
              className={`font-semibold text-primary ml-3 ${
                view !== "list" && "hidden"
              }`}
            >
              Rent
            </p>
            </div>}

            { property && cardSize !== "small" && view === "list" && (
              <div className="my-2">
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  <Image
                    src="/imgs/profile.png"
                    width={49}
                    height={49}
                    alt="svg"
                  />
                  <div className="flex flex-col justify-center gap-1">
                    <span className="max-w-[110px] text-[11px] font-semibold leading-3">
                      Noha Mohamed Abdelaziz
                    </span>
                    <div className="flex gap-1">
                      <Image
                        src="/svgs/stars.svg"
                        width={30}
                        height={8}
                        alt="stars"
                      />
                      <span className="text-[8px] leading-3 text-themetext">
                        4.0 (12 reviews)
                      </span>
                    </div>
                  </div>
                </div>
                <div className={`flex ${isSmallScreen ? 'flex-col' : 'justify-end'} gap-3`}>
                  <button className="flex h-10 w-10 items-center justify-center rounded-full border border-themetext">
                    <MessageSvg />
                  </button>
                  <button className="flex h-10 w-10 items-center justify-center rounded-full border border-themetext">
                    <CallSvg />
                  </button>
                  <button className="flex h-10 w-10 items-center justify-center rounded-full">
                    <WhatsappRoundedSvg />
                  </button>
                </div>
              </div>
            </div>
            )}
       
        <p
          className={`mt-2 text-sm text-darkgray ${
            view === "list" ? "" : "max-w-[260px]"
          }`}
        >
          {desc}
        </p>
        <div
          className={`flex ${
            view === "list" ? "w-full items-end justify-between" : "flex-col"
          }`}
        >
          <div className={view === "list" ? "flex items-end gap-5" : "flex flex-col gap-4"}>
            <div className="flex flex-col">
              <div
                className={`flex ${
                  view === "list" ? "justify-start gap-10" : "justify-between"
                } mt-3`}
              >
                <div className="flex">
                  <Image
                    src="/svgs/bed.svg"
                    width={22}
                    height={20}
                    alt="svg"
                  />
                  <p className="ml-1 text-sm font-medium">{bedrooms} beds</p>
                </div>
                <div className="flex">
                  <Image
                    src="/svgs/bath.svg"
                    width={22}
                    height={20}
                    alt="svg"
                  />
                  <p className="ml-1 text-sm font-medium">{bedrooms} baths</p>
                </div>
                <p
                  className={`font-semibold text-primary ${
                    view === "list" && "hidden"
                  }`}
                >
                  Rent
                </p>
              </div>
              <div
                className={`flex ${
                  view === "list" ? "justify-start gap-10" : "justify-between"
                } mt-3`}
              >
                <div className="flex">
                  <Image
                    src="/svgs/stairs.svg"
                    width={22}
                    height={20}
                    alt="svg"
                  />
                  <p className="ml-1 text-sm font-medium">{bedrooms} beds</p>
                </div>
                <div className="flex">
                  <Image
                    src="/svgs/triangle.svg"
                    width={22}
                    height={20}
                    alt="svg"
                  />
                  <p className="ml-1 text-sm font-medium">{bedrooms} beds</p>
                </div>
                <div
                  className={`flex items-center gap-[2px] ${
                    view === "list" && "hidden"
                  }`}
                >
                  <Star width={20} height={20} filled />
                  <span className="text-sm font-bold text-secondary">
                    4.7
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div
                className={`flex items-center gap-1 ${
                  view !== "list" && "w-full border-b pb-5"
                }`}
              >
                <Image
                  src="/svgs/address.svg"
                  width={12}
                  height={15}
                  alt="svg"
                />
                <small>{address}</small>
              </div>
              <div
                className={`flex items-center gap-[2px] ${
                  view !== "list" && "hidden"
                }`}
              >
                <Star width={20} height={20} filled />
                <span className="text-sm font-bold text-secondary">4.7</span>
              </div>
            </div>
          </div>
          {
           !property && 
            (<button
            className={`${
              view === "list" && cardSize === "small"
                ? "hidden"
                : view === "list" && cardSize !== "small"
                ? "w-fit px-1.5"
                : "w-full"
            } rounded-full border border-[rgba(0,0,0,0.40)] py-3 font-semibold hover:border-black`}
            onClick={() => handleClick()}
          >
            View listing details
          </button>
          )}
          
        </div>
        {
           property && 
            (
            <div style={{
              display:"flex",
              justifyContent:'center',
              alignItems:'center',
              marginTop: 6
            }}>
               <button
                className={`${
                  view === "list" && cardSize === "small"
                    ? "hidden"
                    : view === "list" && cardSize !== "small"
                    ? "w-fit px-1.5"
                    : "w-full"
                } rounded-full border border-[rgba(0,0,0,0.40)] px-4 py-3 font-semibold hover:border-black`}
                onClick={() => handleClick()}
              >
                View listing details
              </button>
            </div>
          )}
      </div>
    </div>
  );
};

export default PropertyCard;
