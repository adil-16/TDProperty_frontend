import BackButton from "@/components/Buttons/BackButton";
import Image from "next/image";
import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="flex h-[1700px] flex-col">
      <div className="px-[100px] pt-[70px]">
        <BackButton />
        <div className="mt-2 px-3 text-[32px] font-bold">Privacy Policy</div>
      </div>
      <div className="relative flex items-start justify-between">
        <div className="flex flex-col px-[115px] py-[125px]">
          <h1 className="text-[32px] font-bold">Heading 1</h1>
          <p className="mt-5 max-w-[680px] text-[#444]">
            Lorem ispum Lorem ispumLorem ispumLorem ispumLorem ispumLorem
            ispumLorem ispum Lorem ispumLorem ispumLorem ispumLorem Lorem ispum
            Lorem ispumLorem ispumLorem ispumLorem ispumLorem ispumLorem ispum
            Lorem ispumLorem ispumLorem ispumLorem Lorem ispum Lorem ispumLorem
            ispumLorem.
            <br /> <br /> Lorem ispum Lorem ispumLorem ispumLorem ispumLorem
            ispumLorem ispumLorem ispum Lorem ispumLorem ispumLorem ispumLorem
            Lorem ispum Lorem ispumLorem ispumLorem ispumLorem ispumLorem
            ispumLorem ispum Lorem ispumLorem ispumLorem ispumLorem Lorem ispum
            Lorem ispumLorem ispumLorem.
            <br /> <br /> Lorem ispum Lorem ispumLorem ispumLorem ispumLorem
            ispumLorem ispumLorem ispum Lorem ispumLorem ispumLorem ispumLorem
            Lorem ispum Lorem ispumLorem ispumLorem ispumLorem ispumLorem
            ispumLorem ispum Lorem ispumLorem ispumLorem ispumLorem Lorem ispum
            Lorem ispumLorem ispumLorem.
          </p>
          <h1 className="mt-10 text-[32px] font-bold">Heading 1</h1>
          <p className="mt-5 max-w-[680px] text-[#444]">
            Lorem ispum Lorem ispumLorem ispumLorem ispumLorem ispumLorem
            ispumLorem ispum Lorem ispumLorem ispumLorem ispumLorem Lorem ispum
            Lorem ispumLorem ispumLorem ispumLorem ispumLorem ispumLorem ispum
            Lorem ispumLorem ispumLorem ispumLorem Lorem ispum Lorem ispumLorem
            ispumLorem.
            <br /> <br /> Lorem ispum Lorem ispumLorem ispumLorem ispumLorem
            ispumLorem ispumLorem ispum Lorem ispumLorem ispumLorem ispumLorem
            Lorem ispum Lorem ispumLorem ispumLorem ispumLorem ispumLorem
            ispumLorem ispum Lorem ispumLorem ispumLorem ispumLorem Lorem ispum
            Lorem ispumLorem ispumLorem.
            <br /> <br /> Lorem ispum Lorem ispumLorem ispumLorem ispumLorem
            ispumLorem ispumLorem ispum Lorem ispumLorem ispumLorem ispumLorem
            Lorem ispum Lorem ispumLorem ispumLorem ispumLorem ispumLorem
            ispumLorem ispum Lorem ispumLorem ispumLorem ispumLorem Lorem ispum
            Lorem ispumLorem ispumLorem.
          </p>
        </div>
        <Image
          className="absolute -top-36 right-0"
          src="/svgs/privacy-policy/main.svg"
          width={657}
          height={657}
          alt="svg"
        />
      </div>
      <div className="flex w-[1015px] flex-wrap justify-between self-center rounded-[25px] bg-primary bg-opacity-[0.15] p-5">
        <div className="flex max-w-[451px] flex-col">
          <h1 className="border-b border-[rgba(0,0,0,0.1)] pb-1 text-[19px] font-semibold">
            How Accounts Works?
          </h1>
          <p className="py-3 tracking-[0.5px] text-[#53587A]">
            Enim magni ipsum nostrum culpa ipsum voluptatum occaecati aut fugit.
            Est mollitia asperiores ut pariatur voluptas magni laudantium labore
            exercitationem. Ratione corporis recusandae perferendis consequatur
            nobis.
          </p>
        </div>
        <div className="mr-5 flex max-w-[451px] flex-col">
          <h1 className="border-b border-[rgba(0,0,0,0.1)] pb-1 text-[19px] font-semibold">
            How Accounts Works?
          </h1>
          <p className="py-3 tracking-[0.5px] text-[#53587A]">
            Enim magni ipsum nostrum culpa ipsum voluptatum occaecati aut fugit.
            Est mollitia asperiores ut pariatur voluptas magni laudantium labore
            exercitationem. Ratione corporis recusandae perferendis consequatur
            nobis.
          </p>
        </div>
        <div className="mr-5 flex max-w-[451px] flex-col">
          <h1 className="border-b border-[rgba(0,0,0,0.1)] pb-1 text-[19px] font-semibold">
            How Accounts Works?
          </h1>
          <p className="py-3 tracking-[0.5px] text-[#53587A]">
            Enim magni ipsum nostrum culpa ipsum voluptatum occaecati aut fugit.
            Est mollitia asperiores ut pariatur voluptas magni laudantium labore
            exercitationem. Ratione corporis recusandae perferendis consequatur
            nobis.
          </p>
        </div>
        <div className="mr-5 flex max-w-[451px] flex-col">
          <h1 className="border-b border-[rgba(0,0,0,0.1)] pb-1 text-[19px] font-semibold">
            How Accounts Works?
          </h1>
          <p className="py-3 tracking-[0.5px] text-[#53587A]">
            Enim magni ipsum nostrum culpa ipsum voluptatum occaecati aut fugit.
            Est mollitia asperiores ut pariatur voluptas magni laudantium labore
            exercitationem. Ratione corporis recusandae perferendis consequatur
            nobis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
