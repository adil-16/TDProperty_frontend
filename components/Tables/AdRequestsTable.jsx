"use client";


import TableWithSort from "./TableWithSort";
import RecordButton from "../Dropdowns/RecordDropdown";
import SortByButton from "../Dropdowns/UsersSortByDropdown";
import SearchIconSvg from "../Svgs/SearchIconSvg";
import ActionDropdown from "../Dropdowns/ActionDropdown";
import TablePagination from "./TablePagination";
import Image from "next/image";

const AdRequestsTable = () => {
  const headings = [
    { id: 1, label: "Property", key: "property" },
    { id: 2, label: "Budget", key: "budget" },
    { id: 3, label: "No. of days", key: "numberOfDays" },
    { id: 4, label: "Platform", key: "platform" },
    { id: 4, label: "End Date", key: "endDate" },
    { id: 5, label: "Actions", key: "actions" },
  ];
  const data = [
    {
      id: 1,
      property: "Myra Foster",
      profilePic: "/imgs/profile.png",
      budget: "$ 25,250.00",
      numberOfDays: 12,
      platform: (
        <div className="flex gap-2 items-center">
          <Image
            src="/svgs/facebook.svg"
            width={24}
            height={24}
            alt="facebook"
          />
          <Image
            src="/svgs/instagram.svg"
            width={24}
            height={24}
            alt="instagram"
          />
          <Image src="/svgs/threads.svg" width={24} height={24} alt="threads" />
          <Image
            src="/svgs/whatsapp.svg"
            width={24}
            height={24}
            alt="whatsapp"
          />
        </div>
      ),
      endDate: "12/12/2023",
      actions: <ActionDropdown />,
    },
    {
      id: 2,
      property: "Rock Apartments Limited",
      profilePic: "/imgs/profile.png",
      budget: "$ 25,250.00",
      numberOfDays: 12,
      platform: (
        <div className="flex gap-2 items-center">
          <Image
            src="/svgs/facebook.svg"
            width={24}
            height={24}
            alt="facebook"
          />
          <Image
            src="/svgs/instagram.svg"
            width={24}
            height={24}
            alt="instagram"
          />
          <Image src="/svgs/threads.svg" width={24} height={24} alt="threads" />
          <Image
            src="/svgs/whatsapp.svg"
            width={24}
            height={24}
            alt="whatsapp"
          />
        </div>
      ),
      endDate: "12/12/2023",
      actions: <ActionDropdown />,
    },
    {
      id: 3,
      property: "Matilda Robertson",
      profilePic: "/imgs/profile.png",
      budget: "$ 25,250.00",
      numberOfDays: 12,
      platform: (
        <div className="flex gap-2 items-center">
          <Image
            src="/svgs/facebook.svg"
            width={24}
            height={24}
            alt="facebook"
          />
          <Image
            src="/svgs/instagram.svg"
            width={24}
            height={24}
            alt="instagram"
          />
          <Image src="/svgs/threads.svg" width={24} height={24} alt="threads" />
          <Image
            src="/svgs/whatsapp.svg"
            width={24}
            height={24}
            alt="whatsapp"
          />
        </div>
      ),
      endDate: "12/12/2023",
      actions: <ActionDropdown />,
    },
  ];
  return (
    <div classproperty="flex flex-col">
      <TableWithSort
        size="lg"
        headings={headings}
        data={data}
        redirectUrl="/users/companies/companyprofile"
      />
    </div>
  );
};

export default AdRequestsTable;
