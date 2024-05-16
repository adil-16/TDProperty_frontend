"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";


const AdRequestButton = () => {
  const pathname = usePathname();
  const router = useRouter();

  const currentPageName = pathname.split("/")[1];
  return (
    <button
      className="border border-[rgba(0,0,0,0.4)] px-8 py-3 rounded-full font-semibold"
      onClick={() => router.push(`/${currentPageName}/admanagement/adrequests`)}
    >
      Ad Requests
    </button>
  );
};

export default AdRequestButton;
