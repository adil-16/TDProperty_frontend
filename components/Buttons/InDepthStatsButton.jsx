"use client";

import { useParams, usePathname, useRouter } from "next/navigation";


const InDepthStatsButton = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const currentPageName = pathname.split("/")[1] + "/" + params.dashboard;
  return (
    <button
      className="text-primary text-sm underline"
      onClick={() => router.push(`/${currentPageName}/statistics`)}
    >
      Subscribe to get the <br />
      in depth statistics
    </button>
  );
};

export default InDepthStatsButton;
