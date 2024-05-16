"use client";
import { useParams, useRouter } from "next/navigation";


const DescPage = () => {
  const router = useRouter();
  const { id } = useParams();
  return router.push(`/properties/${id}`);
};

export default DescPage;
