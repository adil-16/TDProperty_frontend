"use client";

import { useParams } from "next/navigation";


const PropertyDetailsPage = () => {
  const { id } = useParams();
  return (
    <div className="mt-10 max-w-[80%] text-darkgray">
      Lorem ispum Lorem ispumLorem ispumLorem ispumLorem ispumLorem ispumLorem
      ispum Lorem ispumLorem ispumLorem ispumLorem Lorem ispum Lorem ispumLorem
      ispumLorem ispumLorem ispumLorem ispumLorem ispum Lorem ispumLorem
      ispumLorem ispumLorem Lorem ispum Lorem ispumLorem ispumLorem.
    </div>
  );
};

export default PropertyDetailsPage;
