"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";


const AddAdRequestButton = () => {
  const pathname = usePathname();
  const router = useRouter();

  const currentPageName = pathname.split("/")[1];
  return (
    <button
      className="bg-primary px-8 py-3 rounded-full font-semibold"
      onClick={() => router.push(`/${currentPageName}/admanagement/adrequest`)}
    >
      + Ad Request
    </button>
  );
};

export default AddAdRequestButton;
